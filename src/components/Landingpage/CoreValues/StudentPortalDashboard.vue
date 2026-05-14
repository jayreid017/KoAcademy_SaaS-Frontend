<script setup lang="ts">
const portalStats = [
  { label: "Active Students", value: "1,183", delta: "Online this week", up: true },
  { label: "Avg. Attendance", value: "94.2%", delta: "+1.3% from last month", up: true },
  { label: "Messages Sent", value: "342", delta: "Today across all classes", up: true },
  { label: "Docs Requested", value: "28", delta: "8 ready for pickup", up: false },
];

const announcements = [
  { title: "2nd Quarter Exam Schedule Released", tag: "Exams", time: "Today", urgent: true },
  { title: "Enrollment for SY 2025–2026 Opens May 20", tag: "Enrollment", time: "Yesterday", urgent: false },

];

const attendanceSummary = [
  { label: "Mon", value: 95 },
  { label: "Tue", value: 93 },
  { label: "Wed", value: 96 },

];
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in portalStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <!-- Weekly attendance bar chart -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hidden sm:block">
      <p class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Weekly Attendance</p>
      <div class="flex items-end gap-3 h-20">
        <div
          v-for="(day, i) in attendanceSummary"
          :key="i"
          class="flex-1 flex flex-col items-center gap-1"
        >
          <p class="text-[10px] text-muted-foreground font-medium">{{ day.value }}%</p>
          <div class="w-full rounded-t-md bg-secondary/80 transition-all shadow-sm" :style="{ height: (day.value / 100 * 50) + 'px' }"></div>
          <p class="text-[11px] text-muted-foreground font-semibold mt-1">{{ day.label }}</p>
        </div>
      </div>
    </div>

    <!-- Announcements -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div class="flex items-center justify-between mb-2 sm:mb-4">
        <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Announcements</p>
        <span class="text-[8px] sm:text-[11px] font-bold text-chart-4 bg-chart-4/10 px-1.5 sm:px-2 py-0.5 rounded-full">{{ announcements.length }} new</span>
      </div>
      <div class="flex flex-col gap-2 sm:gap-3">
        <div
          v-for="(ann, i) in announcements"
          :key="i"
          :class="['rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 border shadow-sm', ann.urgent ? 'bg-chart-5/5 border-chart-5/20' : 'bg-muted/30 border-border', i >= 2 ? 'hidden sm:block' : 'block']"
        >
          <div class="flex items-start gap-2 sm:gap-3">
            <div class="flex-1">
              <p class="text-xs sm:text-sm font-semibold text-foreground leading-snug">{{ ann.title }}</p>
              <div class="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                <span class="text-[8px] sm:text-[10px] font-bold text-muted-foreground bg-white border border-border rounded px-1.5 sm:px-2 py-0.5 shadow-sm">{{ ann.tag }}</span>
                <span class="text-[9px] sm:text-[11px] text-muted-foreground font-medium">{{ ann.time }}</span>
              </div>
            </div>
            <span v-if="ann.urgent" class="text-chart-5 text-[10px] sm:text-sm mt-0.5 sm:mt-1">●</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const gradesStats = [
  { label: "Class Average", value: "84.6%", delta: "+2.1 from last quarter", up: true },
  { label: "Top Performers", value: "128", delta: "90% and above", up: true },
  { label: "At Risk", value: "23", delta: "Below 75%", up: false },
  { label: "Submissions Due", value: "14", delta: "Due this week", up: false },
];

const gradeSubjects = [
  { subject: "Mathematics", avg: 82, color: "bg-primary", students: 145 },
  { subject: "Science", avg: 88, color: "bg-secondary", students: 145 },
  { subject: "English", avg: 91, color: "bg-accent", students: 145 },
  { subject: "Filipino", avg: 79, color: "bg-chart-1", students: 145 },
  { subject: "History", avg: 85, color: "bg-chart-2", students: 145 },
];

const topStudents = [
  { name: "Ria Dela Cruz", score: "98.4", rank: 1 },
  { name: "Marco Tan", score: "97.1", rank: 2 },
  { name: "Elena Bautista", score: "96.8", rank: 3 },

];
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in gradesStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <!-- Subject averages -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Subject Averages</p>
      <div class="flex flex-col gap-2 sm:gap-3.5">
        <div v-for="(sub, i) in gradeSubjects" :key="i" :class="['items-center gap-2 sm:gap-3', i >= 3 ? 'hidden sm:flex' : 'flex']">
          <p class="text-[10px] sm:text-xs text-muted-foreground font-medium w-16 sm:w-24 shrink-0 truncate">{{ sub.subject }}</p>
          <div class="flex-1 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
            <div :class="['h-full rounded-full transition-all', sub.color]" :style="{ width: sub.avg + '%' }"></div>
          </div>
          <p class="text-[10px] sm:text-xs font-bold text-foreground w-6 sm:w-8 text-right">{{ sub.avg }}%</p>
        </div>
      </div>
    </div>

    <!-- Top students -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Top Performers</p>
      <div class="flex flex-col gap-2 sm:gap-3">
        <div v-for="(s, i) in topStudents" :key="i" :class="['items-center gap-2 sm:gap-3', i >= 2 ? 'hidden sm:flex' : 'flex']">
          <div :class="['w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[9px] sm:text-[11px] font-bold border shadow-sm', i === 0 ? 'bg-amber-100 border-amber-300 text-amber-700' : 'bg-white border-border text-muted-foreground']">
            {{ s.rank }}
          </div>
          <p class="flex-1 text-xs sm:text-sm font-semibold text-foreground leading-tight">{{ s.name }}</p>
          <p class="text-[10px] sm:text-sm font-bold text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded sm:rounded-md">{{ s.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

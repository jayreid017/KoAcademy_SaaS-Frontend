<script setup lang="ts">
const statusColor: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  Approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
  "Under Review": "bg-sky-100 text-sky-700 border-sky-200",
  ongoing: "bg-primary/20 text-primary border-primary/30",
  upcoming: "bg-muted text-muted-foreground border-border",
};

const enrollmentStats = [
  { label: "Total Enrolled", value: "1,248", delta: "+34 this week", up: true },
  { label: "Pending Review", value: "87", delta: "12 urgent", up: false },
  { label: "Approved Today", value: "42", delta: "+18% vs yesterday", up: true },
  { label: "Rejected", value: "5", delta: "-3 from last week", up: true },
];

const enrollmentSteps = [
  { step: "01", label: "Submit Application", done: true },
  { step: "02", label: "Document Verification", done: true },
  { step: "03", label: "Academic Assessment", done: false },
  { step: "04", label: "Final Approval", done: false },
];

const enrollmentQueue = [
  { name: "Maria Santos", grade: "Grade 7", status: "Pending", time: "2m ago" },
  { name: "James Reyes", grade: "Grade 10", status: "Approved", time: "15m ago" },
  { name: "Ana Cruz", grade: "Grade 8", status: "Pending", time: "31m ago" },

];
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <!-- Stat cards -->
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in enrollmentStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">
          {{ stat.delta }}
        </p>
      </div>
    </div>

    <!-- Enrollment pipeline -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Pipeline</p>
      <div class="flex items-center gap-1">
        <div v-for="(step, i) in enrollmentSteps" :key="i" class="flex items-center gap-1 flex-1">
          <div :class="['flex flex-col items-center gap-1 sm:gap-2 flex-1']">
            <div :class="['w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[9px] sm:text-[11px] font-bold border transition-all shadow-sm', step.done ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border text-muted-foreground']">
              {{ step.done ? '✓' : step.step }}
            </div>
            <p class="text-[8px] sm:text-[10px] text-muted-foreground text-center leading-tight font-medium w-full sm:w-16 hidden sm:block">{{ step.label }}</p>
          </div>
          <div v-if="i < enrollmentSteps.length - 1" :class="['h-px flex-1 mb-0 sm:mb-6 -mx-1 sm:-mx-2', step.done ? 'bg-primary/50' : 'bg-border']"></div>
        </div>
      </div>
    </div>

    <!-- Queue -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div class="flex items-center justify-between mb-2 sm:mb-4">
        <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Live Queue</p>
        <span class="text-[8px] sm:text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-1.5 sm:px-2 py-0.5">Live</span>
      </div>
      <div class="flex flex-col gap-2 sm:gap-3">
        <div
          v-for="(item, i) in enrollmentQueue"
          :key="i"
          :class="['items-center gap-2 sm:gap-3', i >= 2 ? 'hidden sm:flex' : 'flex']"
        >
          <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted border border-border flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-muted-foreground shrink-0">
            {{ item.name.split(' ').map((n: string) => n[0]).join('') }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs sm:text-sm text-foreground font-semibold truncate leading-tight">{{ item.name }}</p>
            <p class="text-[8px] sm:text-[11px] text-muted-foreground leading-tight">{{ item.grade }}</p>
          </div>
          <div class="flex flex-col items-end gap-0.5 sm:gap-1 shrink-0">
            <span :class="['text-[8px] sm:text-[10px] font-bold border rounded-full px-1.5 sm:px-2 py-0.5', statusColor[item.status]]">{{ item.status }}</span>
            <p class="text-[8px] sm:text-[10px] text-muted-foreground hidden sm:block">{{ item.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

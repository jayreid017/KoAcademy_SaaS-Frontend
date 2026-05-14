<script setup lang="ts">
const rfidStats = [
  { label: "Present Today", value: "1,142", delta: "92% of students", up: true },
  { label: "Late Arrivals", value: "34", delta: "12 unexcused", up: false },
  { label: "Staff Present", value: "89", delta: "98% attendance", up: true },
  { label: "Alerts", value: "5", delta: "Unregistered scans", up: false },
];

const recentScans = [
  { name: "John Doe", type: "Student", time: "07:15 AM", status: "On Time", location: "Main Gate" },
  { name: "Sarah Smith", type: "Staff", time: "07:22 AM", status: "On Time", location: "Staff Entrance" },
  { name: "Mike Johnson", type: "Student", time: "07:45 AM", status: "Late", location: "Main Gate" },
  { name: "Unknown ID", type: "Alert", time: "08:12 AM", status: "Denied", location: "Side Gate" },
];

const statusColor: Record<string, string> = {
  "On Time": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Late": "bg-amber-100 text-amber-700 border-amber-200",
  "Denied": "bg-red-100 text-red-700 border-red-200",
};
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in rfidStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <!-- Live Scanner Feed -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <div class="flex items-center justify-between mb-2 sm:mb-4">
        <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Live Scanner Feed</p>
        <span class="text-[8px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-100 border border-emerald-200 rounded-full px-1.5 sm:px-2 py-0.5 animate-pulse">● Active</span>
      </div>
      <div class="flex flex-col gap-2 sm:gap-3">
        <div
          v-for="(scan, i) in recentScans"
          :key="i"
          :class="['items-center gap-2 sm:gap-3', i >= 3 ? 'hidden sm:flex' : 'flex']"
        >
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted border border-border flex items-center justify-center text-[10px] sm:text-xs font-bold text-muted-foreground shrink-0 overflow-hidden">
            <span v-if="scan.type !== 'Alert'">👤</span>
            <span v-else>⚠️</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs sm:text-sm text-foreground font-semibold truncate leading-tight">{{ scan.name }}</p>
            <p class="text-[8px] sm:text-[11px] text-muted-foreground leading-tight">{{ scan.type }} · {{ scan.location }}</p>
          </div>
          <div class="flex flex-col items-end gap-0.5 sm:gap-1 shrink-0">
            <span :class="['text-[8px] sm:text-[10px] font-bold border rounded-full px-1.5 sm:px-2 py-0.5', statusColor[scan.status]]">{{ scan.status }}</span>
            <p class="text-[8px] sm:text-[10px] text-muted-foreground hidden sm:block">{{ scan.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

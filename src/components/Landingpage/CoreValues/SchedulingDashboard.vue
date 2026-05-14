<script setup lang="ts">
const scheduleStats = [
  { label: "Active Classes", value: "64", delta: "Across 3 buildings", up: true },
  { label: "Faculty Assigned", value: "38", delta: "2 pending assignment", up: false },
  { label: "Room Utilization", value: "91%", delta: "+4% this semester", up: true },
  { label: "Conflicts", value: "0", delta: "All resolved", up: true },
];

const todaySchedule = [
  { time: "7:00 AM", subject: "Mathematics 9", room: "Room 201", teacher: "Mr. Cruz", status: "ongoing" },
  { time: "8:00 AM", subject: "Science 10", room: "Lab 1", teacher: "Ms. Santos", status: "upcoming" },
  { time: "9:00 AM", subject: "English 8", room: "Room 103", teacher: "Mrs. Reyes", status: "upcoming" },

 
];

const roomOccupancy = [
  { room: "Room 201", capacity: 45, current: 43, pct: 96 },
  { room: "Lab 1", capacity: 30, current: 28, pct: 93 },
  { room: "Room 103", capacity: 40, current: 35, pct: 88 },

];

const statusColor: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  Approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
  "Under Review": "bg-sky-100 text-sky-700 border-sky-200",
  ongoing: "bg-primary/10 text-primary border-primary/20",
  upcoming: "bg-muted/50 text-muted-foreground border-border",
};
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in scheduleStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <!-- Today's schedule -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Today's Schedule</p>
      <div class="flex flex-col gap-2 sm:gap-2.5">
        <div
          v-for="(cls, i) in todaySchedule"
          :key="i"
          :class="['items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border transition-all', cls.status === 'ongoing' ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-muted/30 border-border', i >= 3 ? 'hidden sm:flex' : 'flex']"
        >
          <p class="text-[10px] sm:text-xs text-muted-foreground font-medium w-12 sm:w-16 shrink-0">{{ cls.time }}</p>
          <div class="flex-1 min-w-0">
            <p class="text-xs sm:text-sm font-semibold text-foreground truncate leading-tight">{{ cls.subject }}</p>
            <p class="text-[9px] sm:text-[11px] text-muted-foreground leading-tight">{{ cls.room }} <span class="hidden sm:inline">· {{ cls.teacher }}</span></p>
          </div>
          <span :class="['text-[8px] sm:text-[10px] font-bold border rounded-full px-1.5 sm:px-2 py-0.5', statusColor[cls.status]]">{{ cls.status }}</span>
        </div>
      </div>
    </div>

    <!-- Room occupancy -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Room Occupancy</p>
      <div class="flex flex-col gap-2 sm:gap-3.5">
        <div v-for="(room, i) in roomOccupancy" :key="i" :class="['items-center gap-2 sm:gap-3', i >= 2 ? 'hidden sm:flex' : 'flex']">
          <p class="text-[10px] sm:text-xs text-muted-foreground font-medium w-12 sm:w-20 shrink-0">{{ room.room }}</p>
          <div class="flex-1 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
            <div
              :class="['h-full rounded-full', room.pct > 90 ? 'bg-chart-5' : room.pct > 0 ? 'bg-primary' : 'bg-muted-foreground/30']"
              :style="{ width: room.pct + '%' }"
            ></div>
          </div>
          <p class="text-[10px] sm:text-xs font-bold text-foreground w-6 sm:w-8 text-right">{{ room.pct }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

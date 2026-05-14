<script setup lang="ts">
const accStats = [
  { label: "Net Revenue", value: "₱ 4.2M", delta: "+8% this month", up: true },
  { label: "Operating Exp.", value: "₱ 1.8M", delta: "-2% this month", up: true },
  { label: "Cash on Hand", value: "₱ 850k", delta: "Healthy", up: true },
  { label: "Payables", value: "₱ 320k", delta: "Due in 30 days", up: false },
];

const expenses = [
  { category: "Payroll", amount: 1200000, pct: 65, color: "bg-chart-1" },
  { category: "Utilities", amount: 250000, pct: 14, color: "bg-chart-2" },
  { category: "Maintenance", amount: 150000, pct: 8, color: "bg-chart-3" },
  { category: "Supplies", amount: 100000, pct: 5, color: "bg-chart-4" },
  { category: "Others", amount: 100000, pct: 8, color: "bg-muted-foreground" },
];
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in accStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <!-- Expense Breakdown -->
    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Expense Breakdown</p>
      
      <!-- Chart Bar -->
      <div class="w-full h-3 sm:h-4 rounded-full overflow-hidden flex mb-4 sm:mb-6">
        <div v-for="(exp, i) in expenses" :key="'bar'+i" :class="[exp.color, 'h-full']" :style="{ width: exp.pct + '%' }"></div>
      </div>

      <div class="flex flex-col gap-2 sm:gap-3">
        <div
          v-for="(exp, i) in expenses"
          :key="'list'+i"
          :class="['items-center gap-2 sm:gap-3', i >= 3 ? 'hidden sm:flex' : 'flex']"
        >
          <div :class="['w-2 h-2 sm:w-3 sm:h-3 rounded-full shrink-0', exp.color]"></div>
          <p class="text-xs sm:text-sm text-foreground font-semibold flex-1">{{ exp.category }}</p>
          <p class="text-[10px] sm:text-xs text-muted-foreground font-medium w-12 text-right">{{ exp.pct }}%</p>
          <p class="text-xs sm:text-sm font-bold text-foreground text-right">₱ {{(exp.amount / 1000).toFixed(0)}}k</p>
        </div>
      </div>
    </div>
  </div>
</template>

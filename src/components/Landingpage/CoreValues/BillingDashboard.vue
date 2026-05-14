<script setup lang="ts">
const billingStats = [
  { label: "Collections Today", value: "₱ 124.5k", delta: "+15% vs yesterday", up: true },
  { label: "Pending Dues", value: "₱ 840k", delta: "142 students", up: false },
  { label: "Fully Paid", value: "68%", delta: "Of total population", up: true },
  { label: "Overdue", value: "34", delta: "Needs follow-up", up: false },
];

const recentTransactions = [
  { id: "TXN-9012", name: "Maria Santos", desc: "Tuition - 1st Sem", amount: "₱ 15,000", status: "Paid", time: "10 mins ago" },
  { id: "TXN-9013", name: "James Reyes", desc: "Lab Fees", amount: "₱ 2,500", status: "Paid", time: "1 hour ago" },
  { id: "TXN-9014", name: "Ana Cruz", desc: "Miscellaneous", amount: "₱ 4,000", status: "Pending", time: "3 hours ago" },
  { id: "TXN-9015", name: "Luis Gomez", desc: "Tuition Installment", amount: "₱ 8,000", status: "Overdue", time: "1 day ago" },
];

const statusColor: Record<string, string> = {
  "Paid": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Pending": "bg-amber-100 text-amber-700 border-amber-200",
  "Overdue": "bg-red-100 text-red-700 border-red-200",
};
</script>

<template>
  <div class="space-y-2 sm:space-y-4">
    <div class="grid grid-cols-2 gap-2 sm:gap-3">
      <div
        v-for="(stat, i) in billingStats"
        :key="i"
        :class="['dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]', i >= 2 ? 'hidden sm:block' : 'block']"
      >
        <p class="text-[9px] sm:text-[11px] text-muted-foreground font-medium mb-0.5 sm:mb-1">{{ stat.label }}</p>
        <p class="text-lg sm:text-2xl font-bold text-foreground font-heading leading-tight">{{ stat.value }}</p>
        <p :class="['text-[8px] sm:text-[11px] mt-0.5 sm:mt-1 font-medium', stat.up ? 'text-emerald-600' : 'text-amber-600']">{{ stat.delta }}</p>
      </div>
    </div>

    <div class="dash-item rounded-xl sm:rounded-2xl bg-white border border-border p-3 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
      <p class="text-[9px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4">Recent Transactions</p>
      <div class="flex flex-col gap-2 sm:gap-3">
        <div
          v-for="(txn, i) in recentTransactions"
          :key="i"
          :class="['items-center gap-2 sm:gap-3', i >= 3 ? 'hidden sm:flex' : 'flex']"
        >
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-lg shrink-0">
            💸
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs sm:text-sm text-foreground font-semibold truncate leading-tight">{{ txn.name }}</p>
            <p class="text-[8px] sm:text-[11px] text-muted-foreground leading-tight">{{ txn.desc }}</p>
          </div>
          <div class="flex flex-col items-end gap-0.5 sm:gap-1 shrink-0">
            <p class="text-[10px] sm:text-sm font-bold text-foreground">{{ txn.amount }}</p>
            <span :class="['text-[8px] sm:text-[9px] font-bold border rounded px-1.5 py-0.5', statusColor[txn.status]]">{{ txn.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  /** 'light' → subtle dark lines on a light bg (default)
   *  'dark'  → subtle light lines on a dark bg */
  variant?: 'light' | 'dark'
}>(), {
  variant: 'light',
})
</script>

<template>
  <div
    class="grid-overlay"
    :class="`grid-overlay--${variant}`"
  ></div>
</template>

<style scoped>
/* ─── Shared base ─── */
.grid-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
}

/* ─── Light variant (dark lines on light bg) ─── */
.grid-overlay--light {
  background-image:
    linear-gradient(oklch(0.55 0.04 222 / 0.05) 1px, transparent 1px),
    linear-gradient(90deg, oklch(0.55 0.04 222 / 0.05) 1px, transparent 1px);
}

/* ─── Dark variant (light lines on dark bg) ─── */
.grid-overlay--dark {
  background-image:
    linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px);
}
</style>

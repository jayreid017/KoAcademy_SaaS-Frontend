<script setup lang="ts">
withDefaults(defineProps<{
  /**
   * Max-width of the inner content column.
   * 'sm'  → max-w-2xl   (672px)
   * 'md'  → max-w-4xl   (896px)
   * 'lg'  → max-w-5xl   (1024px) ← default
   * 'xl'  → max-w-7xl   (1280px)
   * 'full'→ no max-width cap
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'

  /**
   * Horizontal padding applied on both sides.
   * 'none' → no padding
   * 'sm'   → px-4
   * 'md'   → px-6       ← default
   * 'lg'   → px-10
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}>(), {
  size: 'lg',
  padding: 'md',
})
</script>

<template>
  <div
    class="w-full mx-auto"
    :class="[
      // max-width
      size === 'sm'   ? 'max-w-2xl'  :
      size === 'md'   ? 'max-w-4xl'  :
      size === 'lg'   ? 'max-w-5xl'  :
      size === 'xl'   ? 'max-w-7xl'  : '',

      // horizontal padding
      padding === 'none' ? 'px-0'  :
      padding === 'sm'   ? 'px-4'  :
      padding === 'md'   ? 'px-6'  : 'px-10',
    ]"
  >
    <slot />
  </div>
</template>

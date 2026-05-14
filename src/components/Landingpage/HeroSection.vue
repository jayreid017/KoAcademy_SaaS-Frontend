<script setup lang="ts">
import GridOverlay from '@/components/GridOverlay.vue'
import PageMargin from '@/components/PageMargin.vue'
</script>

<template>
  <!-- Hero Section -->
  <section class="relative max-h-screen flex items-start justify-start overflow-hidden bg-background py-20 ">


    <!-- Grid overlay -->
    <GridOverlay variant="light" />

    <!-- Content -->
    <PageMargin size="xl" padding="md" class="relative z-10 text-left flex flex-col items-start gap-8">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-[18px] py-[6px] bg-card/70 border border-border rounded-full backdrop-blur-md shadow-[0_2px_12px_color-mix(in_oklch,var(--color-primary)_20%,transparent)] text-foreground/80 animate-[fadeSlideDown_0.7s_ease_both]">
        <span class="w-2 h-2 rounded-full bg-accent animate-[badgePulse_2s_ease-in-out_infinite]"></span>
        <span class="font-sans text-sm font-medium tracking-wide">School Management, Reimagined</span>
      </div>

      <!-- Headline -->
      <h1 class="font-heading font-bold leading-[1.15] text-foreground tracking-[-0.02em] text-[clamp(2.4rem,6vw,3.2rem)] animate-[fadeSlideDown_0.7s_0.1s_ease_both]">
        Powering the Future of School Management
      
      </h1>

      <!-- Subheading -->
      <p class="font-sans text-[clamp(1rem,2vw,1.15rem)] text-muted-foreground leading-[1.75] max-w-[620px] animate-[fadeSlideDown_0.7s_0.2s_ease_both]">
        Modern tools for smarter schools — transform how you manage students,<br class="hidden md:block" />
        staff, and daily operations all in one powerful platform.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-4 mt-2">
        <button class="font-sans inline-flex items-center gap-2 px-[30px] py-[14px] rounded-xl text-[0.95rem] font-semibold bg-black text-white cursor-pointer shadow-[0_4px_20px_color-mix(in_oklch,var(--color-primary)_35%,transparent)] transition-[transform,box-shadow] duration-200 animate-[fadeSlideDown_0.7s_0.3s_ease_both] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_color-mix(in_oklch,var(--color-primary)_45%,transparent)] active:translate-y-0">
          Get Started Free
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <button class="font-sans inline-flex items-center gap-2 px-[30px] py-[14px] rounded-xl text-[0.95rem] font-semibold bg-card/80 text-foreground border border-border/50 cursor-pointer backdrop-blur-md shadow-[0_2px_12px_color-mix(in_oklch,var(--color-primary)_10%,transparent)] transition-[transform,box-shadow,background-color] duration-200 animate-[fadeSlideDown_0.7s_0.35s_ease_both] hover:-translate-y-0.5 hover:bg-card hover:shadow-[0_6px_20px_color-mix(in_oklch,var(--color-primary)_18%,transparent)]">
          Watch Demo
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        </button>
      </div>

    

    </PageMargin>
s
  </section>
 
</template>

<style scoped>
/* Only custom keyframes remain — everything else is Tailwind + style.css tokens */
@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50%       { transform: translateY(-28px) scale(1.04); }
}

@keyframes badgePulse {
  0%, 100% { box-shadow: 0 0 0 3px color-mix(in oklch, var(--color-accent) 25%, transparent); }
  50%       { box-shadow: 0 0 0 7px color-mix(in oklch, var(--color-accent) 10%, transparent); }
}

@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  80%       { transform: translateY(14px); opacity: 0; }
}
</style>
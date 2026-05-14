<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GridOverlay from '../GridOverlay.vue';
gsap.registerPlugin(ScrollTrigger);

const ctaRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (ctaRef.value) {
    gsap.fromTo(".cta-anim", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.value,
          start: "top 85%"
        }
      }
    );
  }
});
</script>

<template>
    <div class="bg-slate-50">

  <section ref="ctaRef" class="py-24 px-6 md:px-12 lg:px-24  relative font-sans border-t border-slate-100">
    <GridOverlay  variant="light"/>
    <div class="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
      
      <!-- Logo -->
      <div class="cta-anim w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-sm mb-2">
        <img src="/img/KoAcademy logo.png" alt="KoAcademy Logo" class="w-full h-full object-contain" />
      </div>

      <!-- Text Content -->
      <h2 class="cta-anim text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
        Ready to transform your school management?
      </h2>
      <p class="cta-anim text-base text-slate-600 leading-relaxed font-sans max-w-xl mx-auto">
        Join thousands of educators who are saving time, reducing errors, and focusing on what matters most—student success.
      </p>
      
      <!-- Actions -->
      <div class="cta-anim flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full sm:w-auto">
        <button class="w-full sm:w-auto bg-black text-white hover:opacity-85 text-sm font-medium px-6 py-2.5 rounded-full transition-opacity flex items-center justify-center space-x-2">
          <span>Get started</span>
          <Icon icon="ph:arrow-right-bold" class="w-4 h-4" />
        </button>
        <button class="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center justify-center space-x-2">
          <span>Book a demo</span>
        </button>
      </div>

    </div>
  </section>
</div>
</template>

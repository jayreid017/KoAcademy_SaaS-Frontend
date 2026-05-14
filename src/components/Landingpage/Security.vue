<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

const features = [
  {
    icon: "ph:cloud-check-duotone",
    title: "Secure Cloud Infrastructure",
    description: "Your data is hosted on reliable, enterprise-grade cloud systems designed for maximum uptime, performance, and protection."
  },
  {
    icon: "ph:users-duotone",
    title: "Role-Based Access Control",
    description: "Ensure the right people have the right access—control permissions for admins, teachers, students, and parents with ease."
  },
  {
    icon: "ph:hard-drives-duotone",
    title: "Automatic Backups",
    description: "Never worry about data loss. Your information is automatically backed up and securely stored for quick recovery anytime."
  },
  {
    icon: "ph:shield-check-duotone",
    title: "Data Privacy & Compliance",
    description: "We follow strict data protection standards to keep sensitive school information safe and compliant with privacy regulations."
  },
  {
    icon: "ph:lock-key-duotone",
    title: "End-to-End Data Protection",
    description: "From login to storage, your data is encrypted and safeguarded at every level of the platform."
  },
  {
    icon: "ph:siren-duotone",
    title: "24/7 Monitoring & Reliability",
    description: "Our systems are continuously monitored to detect and prevent threats, ensuring your platform runs smoothly at all times."
  }
];

const activeIndex = ref<number | null>(0); // Open first item by default

const togglePanel = async (index: number) => {
  // Capture current layout state
  const state = Flip.getState(".security-item");

  // Toggle active item
  activeIndex.value = activeIndex.value === index ? null : index;

  // Wait for Vue to apply the 'active' class (which changes display to block)
  await nextTick();

  // Animate the layout change smoothly
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.inOut"
  });
};

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Header and elements fade-in animation
  if (sectionRef.value) {
    gsap.fromTo(".security-header-anim",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%"
        }
      }
    );
  }
});
</script>

<template>
  <section ref="sectionRef" class="py-24 px-6 md:px-12 lg:px-24 bg-sky-800/20 relative overflow-hidden font-sans border-t border-sky-800/30">
   

    <div class="max-w-4xl mx-auto relative z-10 security-header-anim">
      
      <!-- Web Browser Mockup -->
      <div class="rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-white">
        
        <!-- Browser Header -->
        <div class="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center relative">
          <div class="flex space-x-2 absolute left-4">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-amber-400"></div>
            <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div class="mx-auto bg-white border border-slate-200 rounded-md px-6 py-1 text-xs text-slate-500 font-mono flex items-center space-x-2 shadow-sm">
            <Icon icon="ph:lock-key-fill" class="w-3 h-3 text-emerald-500" />
            <span>koacademy.com/security</span>
          </div>
        </div>

        <!-- Browser Content -->
        <div class="p-6 md:p-8 lg:p-10 bg-slate-50/50">
          
          <!-- Section Header (Inside Mockup) -->
          <div class="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-800 leading-tight">
              Your Data, <span class="text-sky-600 relative inline-block">Protected
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-sky-600/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" stroke-width="4" fill="transparent"/>
                </svg>
              </span>
            </h2>
            <p class="text-base md:text-lg text-slate-600 leading-relaxed font-sans">
              Built with security at its core—so your school’s data stays safe, private, and always accessible when you need it.
            </p>
          </div>

        <!-- Accordion Centered Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <!-- Left Column -->
  <div class="flex flex-col space-y-3 w-full">
    <div
      v-for="(feature, index) in features.slice(0, 3)"
      :key="index"
      :class="['security-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-shadow duration-300 cursor-pointer', { 'active': activeIndex === index }]"
      @click="togglePanel(index)"
    >
      <!-- Item Header -->
      <div class="p-5 flex items-center justify-between select-none">
        <div class="flex items-center space-x-4">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-100 shrink-0 transition-transform duration-300"
            :class="activeIndex === index ? 'scale-110 shadow-sm' : ''"
          >
            <Icon :icon="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg md:text-xl font-bold font-heading text-slate-800">{{ feature.title }}</h3>
        </div>
        <div
          class="text-slate-400 transition-transform duration-300 shrink-0 bg-slate-50 p-2 rounded-full border border-slate-100"
          :class="activeIndex === index ? 'rotate-180 text-sky-600 bg-sky-50 border-sky-100' : ''"
        >
          <Icon icon="ph:caret-down-bold" class="w-5 h-5" />
        </div>
      </div>

      <!-- Expandable Panel -->
      <div class="security-panel">
        <div class="security-panel-content p-5 pt-0 pb-6 text-slate-600 text-sm md:text-base leading-relaxed pl-[5.5rem] font-sans">
          {{ feature.description }}
        </div>
      </div>
    </div>
  </div>

  <!-- Right Column -->
  <div class="flex flex-col space-y-3 w-full">
    <div
      v-for="(feature, index) in features.slice(3, 6)"
      :key="index + 3"
      :class="['security-item bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-shadow duration-300 cursor-pointer', { 'active': activeIndex === index + 3 }]"
      @click="togglePanel(index + 3)"
    >
      <!-- Item Header -->
      <div class="p-5 flex items-center justify-between select-none">
        <div class="flex items-center space-x-4">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-100 shrink-0 transition-transform duration-300"
            :class="activeIndex === index + 3 ? 'scale-110 shadow-sm' : ''"
          >
            <Icon :icon="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg md:text-xl font-bold font-heading text-slate-800">{{ feature.title }}</h3>
        </div>
        <div
          class="text-slate-400 transition-transform duration-300 shrink-0 bg-slate-50 p-2 rounded-full border border-slate-100"
          :class="activeIndex === index + 3 ? 'rotate-180 text-sky-600 bg-sky-50 border-sky-100' : ''"
        >
          <Icon icon="ph:caret-down-bold" class="w-5 h-5" />
        </div>
      </div>

      <!-- Expandable Panel -->
      <div class="security-panel">
        <div class="security-panel-content p-5 pt-0 pb-6 text-slate-600 text-sm md:text-base leading-relaxed pl-[5.5rem] font-sans">
          {{ feature.description }}
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* Flip animation CSS rules */
.security-panel {
  display: none; /* Hide panels by default */
}

/* When the item has the 'active' class, show the panel and run fade-in */
.security-item.active .security-panel {
  display: block;
  animation: smoothFadeIn 0.4s ease-out forwards;
}

@keyframes smoothFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

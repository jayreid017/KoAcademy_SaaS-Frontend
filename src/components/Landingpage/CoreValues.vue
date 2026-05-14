<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick,  } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnrollmentDashboard from "./CoreValues/EnrollmentDashboard.vue";
import GradesDashboard from "./CoreValues/GradesDashboard.vue";
import SchedulingDashboard from "./CoreValues/SchedulingDashboard.vue";
import StudentPortalDashboard from "./CoreValues/StudentPortalDashboard.vue";
import RfidDashboard from "./CoreValues/RfidDashboard.vue";
import BillingDashboard from "./CoreValues/BillingDashboard.vue";
import AccountingDashboard from "./CoreValues/AccountingDashboard.vue";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(ScrollTrigger);

const activeFeature = ref(0);

const pinContainer = ref<HTMLElement | null>(null);

interface Feature {
  title: string;
  description: string;
  button: string;
  icon: string;
  color: string;
  accent: string;
  border: string;
}

const features: Feature[] = [
  {
    title: "Enrollment System",
    description: "Manage student onboarding, registrations, and approval workflows with ease.",
    button: "Start Enrollment",
    icon: "ph:clipboard-text-duotone",
    color: "bg-primary/10",
    accent: "text-primary",
    border: "border-primary/20",
    
  },
  {
    title: "Grades Monitoring",
    description: "Track student grades, performance analytics, and assignment submissions.",
    button: "View Grades",
    icon: "ph:chart-bar-duotone",
    color: "bg-secondary/10",
    accent: "text-secondary",
    border: "border-secondary/20",
  },
  {
    title: "Class Scheduling",
    description: "Organize subjects, rooms, faculty schedules, and student timetables.",
    button: "Open Schedule",
    icon: "ph:calendar-dots-duotone",
    color: "bg-accent/10",
    accent: "text-accent",
    border: "border-accent/20",
  },
  {
    title: "Student Portal",
    description: "Give students access to announcements, attendance, and documents.",
    button: "Open Portal",
    icon: "ph:graduation-cap-duotone",
    color: "bg-chart-1/10",
    accent: "text-chart-1",
    border: "border-chart-1/20",
  },
  {
    title: "RFID Attendance",
    description: "Automated tracking of student and staff entry/exit with real-time notifications.",
    button: "View Attendance",
    icon: "ph:contactless-payment-duotone",
    color: "bg-chart-2/10",
    accent: "text-chart-2",
    border: "border-chart-2/20",
  },
  {
    title: "Billing",
    description: "Manage student accounts, payment schedules, and issue digital receipts.",
    button: "Open Billing",
    icon: "ph:credit-card-duotone",
    color: "bg-chart-3/10",
    accent: "text-chart-3",
    border: "border-chart-3/20",
  },
  {
    title: "Accounting",
    description: "Comprehensive financial reporting, expenses, and budget management.",
    button: "View Finances",
    icon: "ph:chart-line-up-duotone",
    color: "bg-chart-4/10",
    accent: "text-chart-4",
    border: "border-chart-4/20",
  }
];

let mainScrollTrigger: globalThis.ScrollTrigger | null = null;

onMounted(() => {
  const container = pinContainer.value;
  if (!container) return;

  mainScrollTrigger = ScrollTrigger.create({
    trigger: container,
    pin: true,
    start: "center center",
    end: "+=3000",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      // Map progress 0-1 to index 0-3
      let newIndex = Math.floor(progress * features.length);
      if (newIndex >= features.length) newIndex = features.length - 1;
      
      if (activeFeature.value !== newIndex) {
        animateToFeature(newIndex);
      }
    }
  });
});

function animateToFeature(index: number) {
  activeFeature.value = index;

  nextTick(() => {
    const previewEl = document.querySelector(".preview-panel");
    if (previewEl) {
      gsap.fromTo(
        previewEl,
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
      );
    }

    const textEl = document.querySelector(".text-content");
    if (textEl) {
      gsap.fromTo(
        textEl,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    
    const dashItems = document.querySelectorAll(".dash-item");
    if (dashItems.length > 0) {
      gsap.fromTo(
        dashItems,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.05, delay: 0.1 }
      );
    }
  });
}

function scrollToFeature(index: number) {
  if (mainScrollTrigger) {
    const start = mainScrollTrigger.start;
    const end = mainScrollTrigger.end;
    const distance = end - start;
    // Calculate the point within the scroll distance to trigger this section
    const progress = (index + 0.5) / features.length;
    const targetY = start + (distance * progress);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
}

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<template>
  <div ref="scrollContainer" class="relative h-[4000px] bg-sky-800/20">
    <div ref="pinContainer" class="w-full h-[100dvh] flex items-center justify-center py-0 lg:py-8 overflow-hidden">
      <!-- Outer app container -->
      <div class="w-full max-w-[1440px] mx-0 lg:mx-10 overflow-hidden rounded-none lg:rounded-[2.5rem] border-none lg:border lg:border-border bg-white shadow-none lg:shadow-[0_32px_120px_rgba(0,0,0,0.06)] relative z-10 flex flex-col h-[100dvh] lg:h-auto">
        
        <!-- Browser Chrome (Hidden on mobile for native app feel) -->
        <div class="hidden lg:flex items-center justify-between px-6 py-4 border-b border-border bg-white/50 backdrop-blur-sm shrink-0">
          <div class="flex gap-2.5">
            <div class="w-3.5 h-3.5 rounded-full bg-destructive/80 shadow-sm border border-destructive/10"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm border border-amber-500/10"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm border border-emerald-500/10"></div>
          </div>
          <div class="w-[520px] max-w-full bg-muted/50 border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground flex items-center gap-2.5 shadow-sm font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] inline-block"></span>
            https://koacademy.app/dashboard
          </div>
          <div class="flex gap-2.5 opacity-40">
            <div class="w-7 h-7 rounded-md bg-muted border border-border"></div>
            <div class="w-7 h-7 rounded-md bg-muted border border-border"></div>
          </div>
        </div>

        <!-- App Layout -->
        <div class="flex flex-1 lg:h-[760px] bg-background text-foreground overflow-hidden flex-col lg:flex-row">
          
          <!-- ── Sidebar (Hidden on mobile) ────────────────────────────────── -->
          <aside class="hidden lg:flex w-[260px] border-r border-border flex-col gap-6 bg-white py-8 px-5 shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
            <!-- Logo -->
            <div class="flex items-center gap-3.5 px-3 mb-2">
              <div class="bg-black rounded-lg">

              <div class="w-11 h-11 flex items-center justify-center">
                <img src="/img/KoAcademy logo.png" alt="KoAcademy Logo" class="w-full h-full object-contain" />
              </div>
                </div>
              <div>
                <p class="text-foreground font-extrabold text-base leading-none font-heading tracking-wide">KoAcademy</p>
                <p class="text-xs text-muted-foreground mt-1 font-medium">School Management</p>
              </div>
            </div>

            <!-- Main nav links -->
            <div>
              <p class="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-3 mb-3">Overview</p>
              <nav class="flex flex-col gap-1">
                <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all">
                  <Icon icon="ph:house-duotone" width="20" height="20" /> Dashboard
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all">
                  <Icon icon="ph:users-duotone" width="20" height="20" /> Students
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all">
                  <Icon icon="ph:buildings-duotone" width="20" height="20" /> Faculty
                </a>
                <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all">
                  <Icon icon="ph:gear-duotone" width="20" height="20" /> Settings
                </a>
              </nav>
            </div>

            <!-- Feature nav — changes based on activeFeature -->
            <div class="flex-1">
              <p class="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-3 mb-3">Modules</p>
              <nav class="flex flex-col gap-1 relative">
                <!-- Highlight background pill -->
                <div 
                  class="absolute left-0 w-full h-11 bg-muted/60 rounded-xl transition-all duration-500 ease-out z-0 shadow-sm border border-border"
                  :style="{ top: `${activeFeature * 48}px` }"
                ></div>
                
                <div
                  v-for="(feature, index) in features"
                  :key="index"
                  class="relative z-10 flex items-center gap-3 px-3 h-11 rounded-xl text-sm transition-all duration-300 w-full cursor-pointer"
                  :class="activeFeature === index ? 'text-foreground font-semibold' : 'text-muted-foreground font-medium hover:text-foreground'"
                  @click="scrollToFeature(index)"
                >
                  <Icon :icon="feature.icon" width="20" height="20" class="opacity-90 shrink-0" :class="{ 'scale-110 transition-transform': activeFeature === index }" />
                  <span class="leading-tight">{{ feature.title }}</span>
                  <span
                    v-if="activeFeature === index"
                    class="ml-auto w-1.5 h-1.5 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.2)]"
                    :class="features[activeFeature].color.replace('bg-', 'bg-').replace('/10', '')"
                  ></span>
                </div>
              </nav>
            </div>

            <!-- User pill -->
            <div class="flex items-center gap-3 px-3 py-3 rounded-2xl bg-muted/30 border border-border mt-auto shadow-sm">
              <div class="w-9 h-9 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-sm font-bold shadow-sm">A</div>
              <div>
                <p class="text-xs font-bold text-foreground leading-none">Admin User</p>
                <p class="text-[10px] text-muted-foreground font-medium mt-1">admin@koacademy.app</p>
              </div>
            </div>
          </aside>

          <!-- ── Dynamic Content Section ──────────────────────────────── -->
          <main class="flex-1 relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background overflow-hidden flex flex-col justify-between">
            
            <div class="absolute inset-0 flex flex-col lg:flex-row items-center px-0 lg:px-24 h-full">
              <!-- Text Content (Crossfading) -->
              <div class="w-full lg:w-5/12 px-5 pt-8 pb-4 lg:p-0 lg:pr-12 text-content flex flex-col items-center text-center lg:items-start lg:text-left shrink-0" :key="activeFeature">
                <span :class="['text-[9px] lg:text-xs uppercase tracking-[0.25em] font-bold px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full border shadow-sm inline-block', features[activeFeature].accent, features[activeFeature].color, features[activeFeature].border]">
                  Module {{ String(activeFeature + 1).padStart(2, '0') }}
                </span>
                <h1 class="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-foreground mt-3 lg:mt-8 leading-[1.1] tracking-tight">
                  {{ features[activeFeature].title }}
                </h1>
                <p class="hidden sm:block text-muted-foreground text-sm sm:text-base lg:text-lg mt-2 lg:mt-6 max-w-md leading-relaxed font-sans font-medium">
                  {{ features[activeFeature].description }}
                </p>
                <button
                  :class="['mt-4 lg:mt-10 px-6 py-2.5 lg:px-8 lg:py-3.5 rounded-full text-[11px] lg:text-sm font-bold border transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2', features[activeFeature].border, features[activeFeature].accent, 'bg-white']"
                >
                  {{ features[activeFeature].button }} <span class="text-sm lg:text-lg leading-none">&rarr;</span>
                </button>
              </div>

              <!-- Dashboard Preview (Crossfading) -->
              <div class="w-full lg:w-7/12 px-3 pb-3 lg:p-0 lg:pl-4 relative flex-1 flex flex-col min-h-0 overflow-hidden">
                <!-- Decorative background blur -->
                <div class="absolute inset-0 bg-gradient-to-tr opacity-20 blur-3xl -z-10 rounded-full" :class="[features[activeFeature].color.replace('/10', '')]"></div>
                
                <div class="preview-panel bg-white/95 lg:bg-white/80 backdrop-blur-xl rounded-3xl lg:rounded-[2rem] p-4 lg:p-7 border border-border lg:border-white shadow-[0_-4px_32px_rgba(0,0,0,0.06)] lg:shadow-[0_8px_40px_rgba(0,0,0,0.06)] relative z-10 w-full flex-1 flex flex-col min-h-0" :key="`dash-${activeFeature}`">
                  
                  <div class="flex-1 flex flex-col min-h-0">
                    <!-- Panel Header -->
                    <div class="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6 shrink-0">
                      <div :class="['w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm border shrink-0', features[activeFeature].color, features[activeFeature].border, features[activeFeature].accent]">
                        <Icon :icon="features[activeFeature].icon" width="28" height="28" class="lg:!w-9 lg:!h-9" />
                      </div>
                      <div>
                        <p :class="['text-[8px] lg:text-[10px] font-bold uppercase tracking-widest', features[activeFeature].accent]">Live Preview</p>
                        <h2 class="text-foreground font-heading font-bold text-lg lg:text-2xl leading-tight mt-0.5 lg:mt-1">{{ features[activeFeature].title }}</h2>
                      </div>
                    </div>

                    <!-- Feature Components -->
                    <div class="flex-1 min-h-0 overflow-hidden flex flex-col justify-start">
                      <EnrollmentDashboard v-if="activeFeature === 0" />
                      <GradesDashboard v-else-if="activeFeature === 1" />
                      <SchedulingDashboard v-else-if="activeFeature === 2" />
                      <StudentPortalDashboard v-else-if="activeFeature === 3" />
                      <RfidDashboard v-else-if="activeFeature === 4" />
                      <BillingDashboard v-else-if="activeFeature === 5" />
                      <AccountingDashboard v-else-if="activeFeature === 6" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
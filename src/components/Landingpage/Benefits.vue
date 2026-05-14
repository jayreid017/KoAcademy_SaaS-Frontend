<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GridOverlay from '../GridOverlay.vue';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  const container = containerRef.value;
  const image = imageRef.value;
  if (!container || !image) return;

  const handleMouseMove = (e: MouseEvent) => {
    // Calculate relative to the stable container, not the transforming image
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5);
    const y = ((e.clientY - rect.top) / rect.height - 0.5);
    
    gsap.to(image, {
      rotationY: x * 25, 
      rotationX: -y * 25,
      duration: 0.3, 
      transformPerspective: 600,
      ease: "power1.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(image, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // Scroll Fade-In Animations
  let scrollCtx: gsap.Context;
  if (sectionRef.value) {
    scrollCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%", // Animate when the top of the section is 80% down the viewport
        }
      });

      tl.fromTo(".benefit-header-anim", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        }
      )
      .fromTo(".benefit-card", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, 
        "-=0.2"
      )
      .fromTo(container, 
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, 
        "-=0.6"
      );
    }, sectionRef.value);
  }

  onUnmounted(() => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    if (scrollCtx) scrollCtx.revert();
  });
});

const benefits = [
  {
    icon: "ph:clock-duotone",
    title: "Save Time on Administrative Work",
    description: "Automate repetitive tasks like attendance, scheduling, and reporting so your staff can focus more on teaching and less on paperwork.",
    cardClass: "bg-primary/10 border-primary/20",
    iconClass: "text-primary border-primary/20 bg-primary/20",
    hoverClass: "hover:border-primary/50 hover:bg-primary/15"
  },
  {
    icon: "ph:chat-teardrop-text-duotone",
    title: "Stronger Communication Across Your School",
    description: "Keep everyone connected—teachers, parents, and students—with real-time updates, announcements, and messaging tools.",
    cardClass: "bg-secondary/10 border-secondary/20",
    iconClass: "text-secondary border-secondary/20 bg-secondary/20",
    hoverClass: "hover:border-secondary/50 hover:bg-secondary/15"
  },
  {
    icon: "ph:robot-duotone",
    title: "Fewer Errors with Smart Automation",
    description: "Reduce manual data entry and eliminate costly mistakes with reliable, automated workflows and centralized records.",
    cardClass: "bg-accent/10 border-accent/20",
    iconClass: "text-accent border-accent/20 bg-accent/20",
    hoverClass: "hover:border-accent/50 hover:bg-accent/15"
  },
  {
    icon: "ph:chart-bar-duotone",
    title: "Make Smarter Decisions with Real-Time Data",
    description: "Access powerful insights and analytics to track performance, monitor progress, and make informed decisions instantly.",
    cardClass: "bg-chart-1/10 border-chart-1/20",
    iconClass: "text-chart-1 border-chart-1/20 bg-chart-1/20",
    hoverClass: "hover:border-chart-1/50 hover:bg-chart-1/15"
  },
  {
    icon: "ph:trend-up-duotone",
    title: "Scale Your School with Confidence",
    description: "Whether you're managing a small school or a growing institution, the platform adapts to your needs as you expand.",
    cardClass: "bg-chart-2/10 border-chart-2/20",
    iconClass: "text-chart-2 border-chart-2/20 bg-chart-2/20",
    hoverClass: "hover:border-chart-2/50 hover:bg-chart-2/15"
  },
  {
    icon: "ph:arrows-clockwise-duotone",
    title: "All-in-One, No More Switching Tools",
    description: "Replace multiple systems with one unified platform—everything you need is in one place, fully integrated.",
    cardClass: "bg-chart-3/10 border-chart-3/20",
    iconClass: "text-chart-3 border-chart-3/20 bg-chart-3/20",
    hoverClass: "hover:border-chart-3/50 hover:bg-chart-3/15"
  }
];
</script>

<template>
   
  <section ref="sectionRef" class="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden font-sans">
   <GridOverlay variant="light" />
    <!-- Decorative background blobs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 ">
      <div class="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-secondary/5 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Left: Text Content & Benefit Cards -->
        <div class="w-full lg:w-1/2 flex flex-col space-y-12">
          
          <!-- Header -->
          <div class="space-y-6">
            <h2 class="benefit-header-anim text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              Why Schools Choose <br/><span class="text-primary relative inline-block">
                Our Platform
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" stroke-width="4" fill="transparent"/>
                </svg>
              </span>
            </h2>
            <p class="benefit-header-anim text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-sans">
              Designed to simplify operations, improve efficiency, and help schools focus on what matters most—education.
            </p>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              v-for="(benefit, index) in benefits" 
              :key="index"
              :class="`benefit-card group p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default backdrop-blur-sm ${benefit.cardClass} ${benefit.hoverClass}`"
            >
              <div :class="`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border transition-all duration-300 group-hover:scale-110 ${benefit.iconClass}`">
                <Icon :icon="benefit.icon" class="w-7 h-7" />
              </div>
              <h3 class="text-lg font-bold font-sans     text-foreground mb-2 leading-snug">{{ benefit.title }}</h3>
              <p class="text-muted-foreground text-sm leading-relaxed font-sans">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Interactive GSAP Image -->
        <div 
          ref="containerRef"
          class="w-full lg:w-1/2 relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center perspective-[1000px] mt-12 lg:mt-0"
        >
          
          <!-- Decorative abstract rings behind image -->
          <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-70">
            <div class="w-[80%] h-[80%] max-h-[600px] max-w-[600px] rounded-full border-[1px] border-primary/20 animate-[spin_60s_linear_infinite]"></div>
            <div class="absolute w-[60%] h-[60%] max-h-[450px] max-w-[450px] rounded-full border-[1px] border-secondary/20 animate-[spin_40s_linear_infinite_reverse]"></div>
          </div>
          
          <img 
            ref="imageRef"
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop" 
            alt="School Management Software" 
            class="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl object-cover border-[8px] border-card z-10 cursor-crosshair"
            style="transform-style: preserve-3d; will-change: transform;"
            crossorigin="anonymous"
          />
          
          <!-- Floating UI Badges -->
          <div class="absolute top-[15%] right-0 md:-right-8 bg-card/90 backdrop-blur p-4 rounded-xl shadow-xl border border-border/50 animate-bounce z-20" style="animation-duration: 4s;">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">A+</div>
              <div>
                <p class="text-sm font-bold text-foreground">Attendance</p>
                <p class="text-xs text-muted-foreground">Updated automatically</p>
              </div>
            </div>
          </div>
          
          <div class="absolute bottom-[20%] left-0 md:-left-8 bg-card/90 backdrop-blur p-4 rounded-xl shadow-xl border border-border/50 animate-bounce z-20" style="animation-duration: 5s; animation-delay: 1s;">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">12</div>
              <div>
                <p class="text-sm font-bold text-foreground">New Messages</p>
                <p class="text-xs text-muted-foreground">From parents</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: Adding custom hover transition smoothing if needed */
.perspective-\[1000px\] {
  perspective: 1000px;
}
</style>

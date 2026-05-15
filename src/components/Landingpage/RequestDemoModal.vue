<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['update:isOpen'])

const close = () => {
  emit('update:isOpen', false)
}

const modalRef = ref<HTMLElement | null>(null)
const overlayRef = ref<HTMLElement | null>(null)

const onEnter = (el: Element, done: () => void) => {
  if (overlayRef.value) {
    gsap.fromTo(overlayRef.value, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
  }
  if (modalRef.value) {
    gsap.fromTo(modalRef.value, 
      { opacity: 0, y: 30, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.2)', onComplete: done }
    )
  } else {
    done()
  }
}

const onLeave = (el: Element, done: () => void) => {
  if (overlayRef.value) {
    gsap.to(overlayRef.value, { opacity: 0, duration: 0.3, ease: 'power2.in' })
  }
  if (modalRef.value) {
    gsap.to(modalRef.value, { opacity: 0, y: 20, scale: 0.95, duration: 0.3, ease: 'power2.in', onComplete: done })
  } else {
    done()
  }
}

</script>

<template>
  <Teleport to="body">
    <Transition
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
        <!-- Backdrop -->
        <div ref="overlayRef" class="fixed inset-0 bg-background/80 backdrop-blur-sm" @click="close"></div>
        
        <!-- Modal Content -->
        <div 
          ref="modalRef" 
          class="relative w-full max-w-lg p-8 mx-4 bg-card border border-border rounded-2xl shadow-[0_8px_32px_color-mix(in_oklch,var(--color-primary)_15%,transparent)] z-10"
        >
          <!-- Close Button -->
          <button 
            @click="close"
            class="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <Icon icon="ph:x-bold" class="w-5 h-5" />
          </button>

          <!-- Header -->
          <div class="mb-8">
            <h2 class="text-2xl font-heading font-bold text-foreground mb-2">Request a Demo</h2>
            <p class="text-muted-foreground font-sans">See how KoAcademy can transform your school management. Fill out the form below and we'll be in touch.</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="close" class="space-y-5 font-sans">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium text-foreground">Full Name</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Icon icon="ph:user" class="w-5 h-5" />
                </div>
                <input type="text" id="name" class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="John Doe" required>
              </div>
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-foreground">Work Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Icon icon="ph:envelope-simple" class="w-5 h-5" />
                </div>
                <input type="email" id="email" class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="john@school.edu" required>
              </div>
            </div>

            <div class="space-y-2">
              <label for="school" class="block text-sm font-medium text-foreground">School Name</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Icon icon="ph:buildings" class="w-5 h-5" />
                </div>
                <input type="text" id="school" class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="Springfield High" required>
              </div>
            </div>

            <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 mt-4 rounded-xl text-[0.95rem] font-semibold bg-black text-white cursor-pointer shadow-[0_4px_20px_color-mix(in_oklch,var(--color-primary)_35%,transparent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_color-mix(in_oklch,var(--color-primary)_45%,transparent)] active:translate-y-0">
              Submit Request
              <Icon icon="ph:paper-plane-right-bold" class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

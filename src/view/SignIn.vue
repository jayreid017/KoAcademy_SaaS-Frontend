<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import GridOverlay from '@/components/GridOverlay.vue'
import PageMargin from '@/components/PageMargin.vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
    <!-- Grid overlay -->
    <GridOverlay variant="light" />

    <!-- Content -->
    <PageMargin size="md" padding="md" class="relative z-10 w-full flex flex-col items-center gap-8">
      
      <!-- Card -->
      <div class="w-full max-w-md p-8 sm:p-10 bg-card/80 border border-border/50 rounded-2xl backdrop-blur-md shadow-[0_8px_32px_color-mix(in_oklch,var(--color-primary)_15%,transparent)] animate-[fadeSlideDown_0.7s_ease_both]">
        
        <div class="mb-8 text-center">
          <!-- Badge-like icon -->
          <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
            <Icon icon="ph:lock-key-fill" class="w-6 h-6" />
          </div>
          <h1 class="font-heading text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p class="font-sans text-muted-foreground">Sign in to your KoAcademy account</p>
        </div>

        <form @submit.prevent class="space-y-5 font-sans">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-foreground">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                <Icon icon="ph:envelope-simple" class="w-5 h-5" />
              </div>
              <input v-model="email" type="email" id="email" class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="name@school.edu" required>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-foreground">Password</label>
              <a href="#" class="text-sm text-primary hover:underline transition-colors">Forgot password?</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                <Icon icon="ph:password" class="w-5 h-5" />
              </div>
              <input v-model="password" type="password" id="password" class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground" placeholder="••••••••" required>
            </div>
          </div>

          <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 mt-2 rounded-xl text-[0.95rem] font-semibold bg-black text-white cursor-pointer shadow-[0_4px_20px_color-mix(in_oklch,var(--color-primary)_35%,transparent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_color-mix(in_oklch,var(--color-primary)_45%,transparent)] active:translate-y-0">
            Sign In
            <Icon icon="ph:arrow-right-bold" class="w-5 h-5" />
          </button>
        </form>

        <div class="mt-8 text-center text-sm text-muted-foreground font-sans border-t border-border/50 pt-6">
          Don't have an account? 
          <router-link to="/signup" class="font-medium text-primary hover:underline transition-colors">
            Sign up for free
          </router-link>
        </div>

      </div>

      <router-link to="/" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans animate-[fadeSlideDown_0.7s_0.2s_ease_both]">
        <Icon icon="ph:arrow-left" class="w-4 h-4" />
        Back to Home
      </router-link>

    </PageMargin>
  </section>
</template>

<style scoped>
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>

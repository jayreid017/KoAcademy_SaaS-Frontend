<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const menuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const scrollTo = (id: string) => {
  menuOpen.value = false;

  const el = document.getElementById(id);

  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Close menu when clicking outside
const handleClickOutside = (e: MouseEvent) => {
  const header = document.getElementById('main-header');

  if (header && !header.contains(e.target as Node)) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <!-- Perfect centered wrapper -->
  <header
    class="fixed left-0 right-0 flex justify-center z-[100] px-4 transition-all duration-300 font-sans"
    :class="isScrolled ? 'top-4' : 'top-6'"
  >
    <!-- Main container -->
    <div
      id="main-header"
      class="header-anim w-full max-w-xl transition-all duration-300"
    >
      <!-- Navbar -->
      <nav
        class="flex items-center justify-between bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl px-3 py-2.5 shadow-sm hover:shadow-md transition-shadow"
      >
        <!-- Left side -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Logo -->
          <div
            class="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0"
          >
            <img
              src="/img/KoAcademy logo.png"
              alt="KoAcademy Logo"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Desktop Nav -->
          <div class="hidden sm:flex items-center gap-1">
            <a
              href="#values"
              @click.prevent="scrollTo('values')"
              class="text-sm font-medium text-slate-800 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              Features
            </a>

            <a
              href="#benefits"
              @click.prevent="scrollTo('benefits')"
              class="text-sm font-medium text-slate-800 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              Benefits
            </a>

            <a
              href="#security"
              @click.prevent="scrollTo('security')"
              class="text-sm font-medium text-slate-800 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              Security
            </a>
          </div>
        </div>

        <!-- Desktop Right Side -->
        <div class="hidden sm:flex items-center gap-2">
          <div class="w-px h-5 bg-slate-200"></div>

          <RouterLink to="/signin">
            <button
              class="cursor-pointer text-sm font-medium text-slate-800 px-4 py-1.5 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Sign in
            </button>
          </RouterLink>

          <RouterLink to="/signup">
            <button
              class="cursor-pointer text-sm font-medium text-white px-4 py-1.5 rounded-2xl bg-black hover:opacity-85 transition-opacity whitespace-nowrap"
            >
            Get started
          </button>
          </RouterLink>
        </div>

        <!-- Mobile Right Side -->
        <div class="flex sm:hidden items-center gap-2">
          <!-- CTA -->
          <RouterLink to="/signup">
            <button
              class="cursor-pointer text-sm font-medium text-white px-4 py-1.5 rounded-2xl bg-black hover:opacity-85 transition-opacity whitespace-nowrap"
            >
            Get started
          </button>
          </RouterLink>

          <!-- Hamburger -->
          <button
            @click.stop="toggleMenu"
            class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          >
            <!-- Open icon -->
            <svg
              v-if="!menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>

            <!-- Close icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown -->
      <Transition name="dropdown">
        <div
          v-if="menuOpen"
          class="sm:hidden mt-2 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-md overflow-hidden"
        >
          <div class="flex flex-col p-2 gap-0.5">
            <a
              href="#values"
              @click.prevent="scrollTo('values')"
              class="text-sm font-medium text-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Features
            </a>

            <a
              href="#benefits"
              @click.prevent="scrollTo('benefits')"
              class="text-sm font-medium text-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Benefits
            </a>

            <a
              href="#security"
              @click.prevent="scrollTo('security')"
              class="text-sm font-medium text-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Security
            </a>

            <div class="h-px bg-slate-100 my-1.5 mx-2"></div>

            <a
              href="#"
              class="text-sm font-medium text-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Sign in
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
@keyframes dropIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-anim {
  animation: dropIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Dropdown animation */
.dropdown-enter-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-leave-active {
  transition: all 0.15s ease-in;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.97);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>
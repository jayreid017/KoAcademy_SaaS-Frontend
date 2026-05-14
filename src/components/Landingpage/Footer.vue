<script setup lang="ts">
import { Icon } from '@iconify/vue';

const currentYear = new Date().getFullYear();
const noiseBg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
</script>

<template>
  <footer class="relative overflow-hidden pt-20 pb-10 px-6 md:px-12 lg:px-24 font-sans" style="background:#d6eef8;">
    
    <!-- Blob -->
    <div class="absolute pointer-events-none" style="right:-80px;top:-40px;width:620px;height:420px;border-radius:50%;background:radial-gradient(ellipse at 40% 40%,#2a5a7a 0%,#3a7fa8 30%,#a8d8f0 65%,#d6eef8 85%);filter:blur(32px);opacity:0.92;transform:rotate(-15deg);z-index:0;"></div>

    <!-- Noise -->
    <div class="absolute inset-0 pointer-events-none" style="z-index:1;opacity:0.25;" :style="{ backgroundImage: noiseBg }"></div>

    <div class="max-w-7xl mx-auto relative" style="z-index:2;">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

        <!-- Brand -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center space-x-3 cursor-pointer group w-fit">
             <!-- Logo -->
      <div class="cta-anim w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-sm mb-2">
        <img src="/img/KoAcademy logo.png" alt="KoAcademy Logo" class="w-full h-full object-contain" />
      </div>
            <span class="text-2xl font-heading font-bold tracking-tight group-hover:transition-colors" style="color:#0d2e3f;">KoAcademy</span>
          </div>
          <p class="leading-relaxed max-w-sm" style="color:#3a7090;">
            Powering the future of school management with smart automation, secure data, and seamless communication.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style="background:#b8ddf0;color:#2a5a7a;" onmouseover="this.style.background='#2a5a7a';this.style.color='#fff'" onmouseout="this.style.background='#b8ddf0';this.style.color='#2a5a7a'">
              <Icon icon="ph:twitter-logo-fill" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style="background:#b8ddf0;color:#2a5a7a;" onmouseover="this.style.background='#2a5a7a';this.style.color='#fff'" onmouseout="this.style.background='#b8ddf0';this.style.color='#2a5a7a'">
              <Icon icon="ph:facebook-logo-fill" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style="background:#b8ddf0;color:#2a5a7a;" onmouseover="this.style.background='#2a5a7a';this.style.color='#fff'" onmouseout="this.style.background='#b8ddf0';this.style.color='#2a5a7a'">
              <Icon icon="ph:instagram-logo-fill" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style="background:#b8ddf0;color:#2a5a7a;" onmouseover="this.style.background='#2a5a7a';this.style.color='#fff'" onmouseout="this.style.background='#b8ddf0';this.style.color='#2a5a7a'">
              <Icon icon="ph:linkedin-logo-fill" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="font-bold mb-6 font-heading" style="color:#0d2e3f;">Product</h4>
          <ul class="space-y-4">
            <li><a href="#" class="transition-colors" style="color:#3a7090;" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#3a7090'">Features</a></li>
            <li><a href="#" class="transition-colors" style="color:#3a7090;" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#3a7090'">Pricing</a></li>
            <li><a href="#" class="transition-colors" style="color:#3a7090;" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#3a7090'">Integrations</a></li>
            <li><a href="#" class="transition-colors" style="color:#3a7090;" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#3a7090'">Changelog</a></li>
          </ul>
        </div>

    
      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm" style="border-top:1px solid #a8d8f0;color:#5a96b8;">
        <p>&copy; {{ currentYear }} KoAcademy. All rights reserved.</p>
        <div class="flex space-x-6">
          <a href="#" class="transition-colors" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#5a96b8'" style="color:#5a96b8;">Privacy Policy</a>
          <a href="#" class="transition-colors" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#5a96b8'" style="color:#5a96b8;">Terms of Service</a>
          <a href="#" class="transition-colors" onmouseover="this.style.color='#0d2e3f'" onmouseout="this.style.color='#5a96b8'" style="color:#5a96b8;">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
</template>
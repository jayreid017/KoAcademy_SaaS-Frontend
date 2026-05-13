<script setup lang="ts">
// Empty script setup
</script>

<template>
  <!-- Browser Mockup Wrapper -->
  <div
    class="max-w-[1450px] mx-auto my-12 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
  >
    <!-- Browser Top Bar -->
    <div
      class="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-zinc-900/90 backdrop-blur-xl"
    >
      <!-- MacOS Buttons -->
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <!-- Fake URL Bar -->
      <div
        class="flex items-center gap-3 w-[600px] max-w-full bg-black/40 border border-white/10 rounded-full px-4 py-2"
      >
        <div class="w-2 h-2 rounded-full bg-green-400"></div>

        <span class="text-xs text-zinc-400 truncate">
          https://koacademy.app/dashboard
        </span>
      </div>

      <!-- Right Controls -->
      <div class="flex items-center gap-2 opacity-50">
        <div class="w-8 h-8 rounded-lg bg-white/5"></div>
        <div class="w-8 h-8 rounded-lg bg-white/5"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="flex h-[800px] bg-black text-gray-400 font-sans overflow-hidden"
    >
      <!-- Sidebar Navigation -->
      <aside
        class="w-64 border-r border-white/10 p-6 flex flex-col gap-8 bg-zinc-950"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-primary/20 rounded-lg border border-primary/50 flex items-center justify-center text-primary font-bold text-xl"
          >
            K
          </div>

          <div>
            <h1 class="text-white font-bold text-sm leading-tight">
              KoAcademy
            </h1>

            <p class="text-xs opacity-50">School System</p>
          </div>
        </div>

        <nav class="flex flex-col gap-2">
          <span
            class="text-[10px] uppercase tracking-widest font-bold mb-2"
          >
            Navigation
          </span>

          <a href="#" class="nav-item active">Dashboard</a>
          <a href="#" class="nav-item">Students</a>
          <a href="#" class="nav-item">Classes</a>
          <a href="#" class="nav-item">Settings</a>
        </nav>
      </aside>

      <!-- Main Builder Canvas -->
      <main
        class="flex-1 relative bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] overflow-auto bg-zinc-900"
      >
        <div
          class="p-12 min-w-[800px] flex flex-col items-center gap-16"
        >
          <!-- Logic Node Example -->
          <div
            class="w-72 bg-zinc-950/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm shadow-2xl"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <div
                  class="p-1.5 bg-primary/20 rounded border border-primary/50"
                >
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                <span class="text-white font-semibold text-sm">
                  Enrollment Flow
                </span>
              </div>

              <span
                class="text-[10px] px-2 py-0.5 bg-zinc-800 border border-white/10 rounded text-zinc-400"
              >
                ACTIVE
              </span>
            </div>

            <p class="text-xs text-zinc-500">
              Manage student onboarding and registration.
            </p>
          </div>
        </div>
      </main>

      <!-- Right Sidebar -->
      <aside
        class="w-80 p-6 border-l border-white/10 bg-zinc-950 overflow-y-auto"
      >
        <!-- Preview Widget -->
        <div
          class="bg-white rounded-[2rem] p-8 text-black mb-6 shadow-xl"
        >
          <div class="flex items-center gap-2 mb-8">
            <div
              class="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold"
            >
              K
            </div>

            <span class="font-bold text-xs">
              Student Portal
            </span>
          </div>

          <h2 class="text-2xl font-medium leading-tight mb-8">
            Ready to check your class schedule?
          </h2>

          <button
            class="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            View Schedule <span>→</span>
          </button>

          <p class="text-[10px] text-center mt-4 text-zinc-500">
            Powered by KoAcademy
          </p>
        </div>

        <!-- Settings -->
        <div
          class="bg-zinc-900 border border-white/10 rounded-2xl p-5"
        >
          <h3 class="text-white text-sm font-semibold mb-1">
            Portal Settings
          </h3>

          <p class="text-xs text-zinc-500 mb-6">
            Customize the student experience.
          </p>

          <label
            class="text-[10px] font-bold uppercase mb-2 block text-zinc-400"
          > 
            School Logo
          </label>

          <div
            class="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-xs mb-4 flex items-center gap-2 text-zinc-300"
          >
            <span class="opacity-50">↑</span>
            koacademy-logo.svg
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>

</style>
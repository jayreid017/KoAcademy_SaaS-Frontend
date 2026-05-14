<script setup lang="ts">
import Header from '@/components/Landingpage/Header.vue';
import HeroSection from '@/components/Landingpage/HeroSection.vue';
import CoreValues from '@/components/Landingpage/CoreValues.vue';
import Benefits from '@/components/Landingpage/Benefits.vue';
import Security from '@/components/Landingpage/Security.vue';
import CallToAction from '@/components/Landingpage/CallToAction.vue';
import Footer from '@/components/Landingpage/Footer.vue';
</script>
<template>
  <Header />
  <div id="hero"><HeroSection /></div>
  <div id="values"><CoreValues /></div>
  <div id="benefits"><Benefits /></div>
  <div id="security"><Security /></div>
  <div id="cta"><CallToAction /></div>
  <Footer />
</template>
<style scoped></style>
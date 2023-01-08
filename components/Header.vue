<template>
  <nav
    class="py-8 px-12 sm:px-28 w-full bg-slate-700/[0.3] text-white backdrop-blur flex justify-between fixed top-0 z-50"
  >
    <NuxtLink to="/" class="hover:underline">Romain LAURENT</NuxtLink>
    <ul class="flex gap-x-4">
      <li>
        <NuxtLink to="/projects" class="hover:underline">Projects</NuxtLink>
      </li>
      <li><NuxtLink to="/skills" class="hover:underline">Skills</NuxtLink></li>
    </ul>
  </nav>
</template>

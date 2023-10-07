<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { Project } from '../types/project';

const projects = ref<any[]>([]);

// const { data, error } = await useFetch(`http://localhost:8000/projects`);

interface FetchProjects {
  status: number;
  data: {
    projects: Project[];
  };
}

async function init() {
  $fetch(`http://localhost:8000/projects`).then((response: any) => {
    projects.value = response.data;
  });
}

init();
</script>

<template>
  <p class="mt-60">Projects</p>
  <ul v-for="project in projects">
    <li>{{ project.name }}</li>
    <li>{{ project.description }}</li>
  </ul>
  <p>{{ projects }}</p>
</template>

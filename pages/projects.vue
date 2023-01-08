<script setup lang="ts">
import axios from 'axios';
import { Project } from '../types/project';

const projects = ref<Project[]>([]);

function init() {
  axios.get('/projects').then((response) => {
    projects.value = response.data;
  });
}

init();
</script>

<template>
  <p>Projects</p>
  <ul v-for="project in projects">
    <li>{{ project.name }}</li>
    <li>{{ project.description }}</li>
  </ul>
</template>

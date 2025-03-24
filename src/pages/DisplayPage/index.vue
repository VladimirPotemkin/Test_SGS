<template>
    <div class="display">
      <h1>Результат ввода</h1>
      <div v-if="store.submittedData">
        <p>Город: {{ store.submittedData.city.name }}</p>
        <p>Цех: {{ store.submittedData.workshop.name }}</p>
        <p>Сотрудник: {{ store.submittedData.employee.name }}</p>
        <p>Бригада: {{ store.submittedData.brigade.name }}</p>
        <p>Смена: {{ store.submittedData.shift.name }}</p>
      </div>
      <button @click="$router.push('/')">Назад</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFormStore } from '@/entities/form-data/store/useFormStore';
  
  const store = useFormStore();
  </script>
  
  <style scoped>
  .display {
    width: 800px;
    margin: 0 auto;
    padding: 20px;

    p {
      margin-bottom: 20px;
      font-size: 24px;
    }
  }
  </style>
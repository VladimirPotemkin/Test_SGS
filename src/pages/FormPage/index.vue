<template>
    <div class="form">
      <h1>Форма ввода</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Город:</label>
          <Dropdown
            :modelValue="store.selectedCityId"
            :options="store.cities"
            @update:modelValue="store.setSelectedCity"
          />
        </div>
        
        <div class="form-group">
          <label>Цех:</label>
          <Dropdown
            :modelValue="store.selectedWorkshopId"
            :options="store.filteredWorkshops"
            :disabled="!store.selectedCityId"
            @update:modelValue="store.selectedWorkshopId = $event"
          />
        </div>
  
        <div class="form-group">
          <label>Сотрудник:</label>
          <Dropdown
            :modelValue="store.selectedEmployeeId"
            :options="store.filteredEmployees"
            :disabled="!store.selectedWorkshopId"
            @update:modelValue="store.selectedEmployeeId = $event"
          />
        </div>
  
        <div class="form-group">
          <label>Бригада:</label>
          <Dropdown
            :modelValue="store.selectedBrigadeId"
            :options="store.brigades"
            @update:modelValue="store.selectedBrigadeId = $event"
          />
        </div>
  
        <div class="form-group">
          <label>Смена:</label>
          <Dropdown
            :modelValue="store.selectedShiftId"
            :options="store.shifts"
            @update:modelValue="store.selectedShiftId = $event"
          />
        </div>
  
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFormStore } from '@/entities/form-data/store/useFormStore';
  import { useRouter } from 'vue-router';
  import Dropdown from '@/widgets/dropdown/index.vue';
  
  const store = useFormStore();
  const router = useRouter();
  
  const handleSubmit = () => {
    store.submitForm();
    router.push('/display');
  };
  </script>
  
  <style scoped>
  .form {
    width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #4d4d4d;
    color: #fff;
    border-radius: 15px;


  }
  .form-group {
    margin-bottom: 15px;
  }
  
  </style>
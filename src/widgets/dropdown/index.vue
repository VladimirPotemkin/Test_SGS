<template>
    <select 
      :value="modelValue" 
      @change="$emit('update:modelValue', Number(($event.target as HTMLSelectElement).value))"
      :disabled="disabled"
    >
      <option 
        v-for="option in options" 
        :key="option.id" 
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    modelValue: number | null;
    options: Array<{ id: number; name: string }>;
    disabled?: boolean;
  }>();
  
  defineEmits(['update:modelValue']);
  </script>
import { defineStore } from 'pinia';
import type { City, Workshop, Employee, Brigade, Shift, SubmittedData } from '../types';

/**
 * Хранилище для управления данными формы
 * Использует Pinia для глобального состояния приложения
 */
export const useFormStore = defineStore('form', {
  // Состояние хранилища
  state: () => ({
    // Список доступных городов
    cities: [
      { id: 1, name: 'Москва' },
      { id: 2, name: 'Санкт-Петербург' }
    ] as City[],
    
    // Список цехов с привязкой к городам
    workshops: [
      { id: 1, cityId: 1, name: 'Цех 1' },
      { id: 2, cityId: 1, name: 'Цех 2' },
      { id: 3, cityId: 2, name: 'Цех 3' },
      { id: 4, cityId: 2, name: 'Цех 4' }
    ] as Workshop[],
    
    // Список сотрудников с привязкой к цехам
    employees: [
      { id: 1, workshopId: 1, name: 'Сотрудник 1' },
      { id: 2, workshopId: 1, name: 'Сотрудник 2' },
      { id: 3, workshopId: 2, name: 'Сотрудник 3' },
      { id: 4, workshopId: 2, name: 'Сотрудник 4' },
      { id: 5, workshopId: 3, name: 'Сотрудник 5' },
      { id: 6, workshopId: 3, name: 'Сотрудник 6' },
      { id: 7, workshopId: 4, name: 'Сотрудник 7' },
      { id: 8, workshopId: 4, name: 'Сотрудник 8' }
    ] as Employee[],
    
    // Список бригад (не зависит от других сущностей)
    brigades: [
      { id: 1, name: 'Бригада 1' },
      { id: 2, name: 'Бригада 2' }
    ] as Brigade[],
    
    // Список смен (не зависит от других сущностей)
    shifts: [
      { id: 1, name: 'Смена 1' },
      { id: 2, name: 'Смена 2' }
    ] as Shift[],
    
    // Текущие выбранные значения
    selectedCityId: null as number | null,
    selectedWorkshopId: null as number | null,
    selectedEmployeeId: null as number | null,
    selectedBrigadeId: null as number | null,
    selectedShiftId: null as number | null,
    
    // Отправленные данные формы
    submittedData: null as SubmittedData | null
  }),

  // Геттеры для вычисляемых значений
  getters: {
    /**
     * Фильтрует цехи по выбранному городу
     * @returns Список цехов, принадлежащих выбранному городу
     */
    filteredWorkshops: (state) => 
      state.workshops.filter(w => w.cityId === state.selectedCityId),
    
    /**
     * Фильтрует сотрудников по выбранному цеху
     * @returns Список сотрудников, работающих в выбранном цехе
     */
    filteredEmployees: (state) => 
      state.employees.filter(e => e.workshopId === state.selectedWorkshopId)
  },

  // Действия для изменения состояния
  actions: {
    /**
     * Устанавливает выбранный город и сбрасывает зависимые поля
     * @param id - ID выбранного города или null
     */
    setSelectedCity(id: number | null) {
      this.selectedCityId = id;
      this.selectedWorkshopId = null; // Сброс цеха при изменении города
      this.selectedEmployeeId = null; // Сброс сотрудника при изменении города
    },
    
    /**
     * Отправка формы - сохранение выбранных данных
     * и подготовка их для отображения
     */
    submitForm() {
      // Собираем все выбранные данные в один объект
      const data = {
        city: this.cities.find(c => c.id === this.selectedCityId)!,
        workshop: this.workshops.find(w => w.id === this.selectedWorkshopId)!,
        employee: this.employees.find(e => e.id === this.selectedEmployeeId)!,
        brigade: this.brigades.find(b => b.id === this.selectedBrigadeId)!,
        shift: this.shifts.find(s => s.id === this.selectedShiftId)!
      };
      
      // Сохраняем данные для отображения на другой странице
      this.submittedData = data;
    }
  }
});
export interface City {
    id: number;
    name: string;
  }
  
  export interface Workshop {
    id: number;
    cityId: number;
    name: string;
  }
  
  export interface Employee {
    id: number;
    workshopId: number;
    name: string;
  }
  
  export interface Brigade {
    id: number;
    name: string;
  }
  
  export interface Shift {
    id: number;
    name: string;
  }
  
  export interface SubmittedData {
    city: City;
    workshop: Workshop;
    employee: Employee;
    brigade: Brigade;
    shift: Shift;
  }
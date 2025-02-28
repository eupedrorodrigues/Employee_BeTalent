export interface ListEmployee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export interface TableEmployeesProps {
  employees: ListEmployee[];
}

export interface EmployeeSearchProps {
  onSearch: (term: string) => void;
}

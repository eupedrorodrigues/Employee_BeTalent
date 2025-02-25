import { useState, useEffect } from "react";

import { Header } from "@/modules/components/header";
import { EmployeeSearch } from "@/modules/components/search";
import { TableEmployees } from "@/modules/components/table-employees";

import { ListEmployee } from "@/types/employee";
import { getListEmployees } from "@/services/employee";

export const Employees = () => {
  const [employees, setEmployees] = useState<ListEmployee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<ListEmployee[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEmployees = async () => {
    try {
      const response = await getListEmployees();
      setEmployees(response);
      setFilteredEmployees(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = employees.filter((employee) => {
        return (
          employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.phone.includes(searchTerm)
        );
      });
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  }, [searchTerm, employees]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-between py-10">
          <h1 className="text-black text-xl">Funcionários</h1>
          <EmployeeSearch onSearch={setSearchTerm} />
        </div>
        <TableEmployees employees={filteredEmployees} />
      </main>
    </>
  );
};

"use client";
import { useState, useEffect } from "react";

import { EmployeeSearch } from "@/modules/components/search";
import { TableEmployees } from "@/modules/components/table-employees";

import { Logo } from "@/constants";
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
    fetchEmployees();
  }, []);

  useEffect(() => {
    const filterEmployees = () => {
      if (!searchTerm) return setFilteredEmployees(employees);

      setFilteredEmployees(
        employees.filter(({ name, job, phone }) =>
          [name, job, phone].some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    };

    filterEmployees();
  }, [searchTerm, employees]);

  return (
    <div>
      <header className="absolute top-0 left-0 w-full h-[3.75rem] bg-white flex items-center px-4 shadow-md">
        <img src={Logo.logo} alt={Logo.title} />
      </header>
      <main className="w-screen flex-col items-center justify-center pt-20 md:pt-23 pb-15 px-5 lg:px-8 xl:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-[1.5em] md:mb-[2em] gap-2 sm:gap-0">
          <h1 className="text-black mb-2 md:mb-0 mr-auto md:ml-0">
            Funcionários
          </h1>
          <EmployeeSearch onSearch={setSearchTerm} />
        </div>
        <TableEmployees employees={filteredEmployees} />
      </main>
    </div>
  );
};

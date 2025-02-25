import { useState, useEffect } from "react";

import { ListEmployee } from "@/types/employee";
import { getListEmployees } from "@/services/employee";
export const TableEmployees = () => {
  const [employees, setEmployees] = useState<ListEmployee[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await getListEmployees();
      setEmployees(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <table className="w-[60.063rem] rounded-lg">
        <thead className="border-b border-gray-400 ">
          <tr className="bg-blue-700 text-white h-[2.9375rem] rounded-3xl">
            <th className="p-3 text-left">FOTO</th>
            <th className="p-3 text-left">NOME</th>
            <th className="p-3 text-left">CARGO</th>
            <th className="p-3 text-left">DATA DE ADMISSÃO</th>
            <th className="p-3 text-left">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="border-b border-gray-400 bg-white hover:bg-gray-100"
            >
              <td className="p-3">
                <img
                  src={employee.image}
                  alt="Foto"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="p-3 text-black">{employee.name}</td>
              <td className="p-3 text-black">{employee.job}</td>
              <td className="p-3 text-black">{employee.admission_date}</td>
              <td className="p-3 text-black">{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

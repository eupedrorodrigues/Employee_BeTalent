import { formatDate, formatNumber } from "@/utils/formatters";

import { TableEmployeesProps } from "@/types/employee";

export const TableEmployees = ({ employees }: TableEmployeesProps) => {
  return (
    <>
      <table className="w-[60.063rem] rounded-lg">
        <thead className="border-b border-[#f0f0f0] shadow-md">
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
              className="border-b border-[#f0f0f0]  bg-white hover:bg-gray-100"
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
              <td className="p-3 text-black">
                {formatDate(employee.admission_date)}
              </td>
              <td className="p-3 text-black">{formatNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

import { formatDate, formatNumber } from "@/utils/formatters";
import { TableEmployeesProps } from "@/types/employee";
import { useState } from "react";

export const TableEmployees = ({ employees }: TableEmployeesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0500FF] text-white shadow-md h-[2.9375rem]">
              <th className="pl-10 rounded-tl-lg text-left">FOTO</th>
              <th className="p-3 text-left rounded-tr-lg md:rounded-none">
                NOME
              </th>
              <th className="p-3 text-left hidden md:table-cell">CARGO</th>
              <th className="pl-10 text-left hidden md:table-cell">
                DATA DE ADMISSÃO
              </th>
              <th className="p-3 rounded-tr-lg text-left hidden md:table-cell">
                TELEFONE
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <>
                <tr
                  key={index}
                  className="border-b border-[#f0f0f0] bg-white hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  <td className="py-2 pl-10">
                    <img
                      src={employee.image}
                      alt="Foto"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="pl-3 text-black text-left">{employee.name}</td>
                  <td className="text-black text-left hidden md:table-cell">
                    {employee.job}
                  </td>
                  <td className="pl-10 text-black text-left hidden md:table-cell">
                    {formatDate(employee.admission_date)}
                  </td>
                  <td className="text-black text-left hidden md:table-cell">
                    {formatNumber(employee.phone)}
                  </td>
                </tr>
                {openIndex === index && (
                  <tr className="bg-gray-50 text-black md:hidden">
                    <td colSpan={5} className="p-4">
                      <p>
                        <strong>Cargo:</strong> {employee.job}
                      </p>
                      <p>
                        <strong>Data de Admissão:</strong>{" "}
                        {formatDate(employee.admission_date)}
                      </p>
                      <p>
                        <strong>Telefone:</strong>{" "}
                        {formatNumber(employee.phone)}
                      </p>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

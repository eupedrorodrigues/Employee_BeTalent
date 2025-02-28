"use client";

import React, { useState } from "react";
import { Circle, ArrowDown } from "@/constants";
import { TableEmployeesProps } from "@/types/employee";
import { formatDate, formatNumber } from "@/utils/formatters";

export const TableEmployees = ({ employees }: TableEmployeesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full block min-h-[32em]">
      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-[#0500FF] text-white shadow-md h-[2.9375rem]">
            <th className="rounded-tl-lg pl-5 md:pl-15">FOTO</th>
            <th className="pr-5 md:pr-0  md:rounded-none rounded-tr-lg">
              <div className="flex items-center justify-between w-[13em] md:w-full">
                NOME
                <span className="md:hidden pr-2">
                  <img src={Circle.icon} alt={Circle.title} />
                </span>
              </div>
            </th>
            <th className="hidden md:table-cell">CARGO</th>
            <th className=" pr-5 hidden md:table-cell">DATA DE ADMISSÃO</th>
            <th className="rounded-tr-lg hidden md:table-cell">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <>
              <tr className="border-b border-[#cdcdcd] bg-white">
                <td colSpan={5} className="text-center py-4 text-black">
                  Usuário não encontrado
                </td>
              </tr>
            </>
          ) : (
            employees.map((employee, index) => (
              <React.Fragment key={index}>
                <tr
                  className="border-b border-[#cdcdcd] bg-white hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  <td className="py-2 pl-5 md:pl-15">
                    <img
                      src={employee.image}
                      alt="Employee Screen"
                      className="w-[2.125em] h-[2.125em] rounded-full"
                    />
                  </td>
                  <td className="text-black text-left relative">
                    <span className="align-middle">{employee.name}</span>
                    <span
                      className={`md:hidden absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-200 transform origin-center ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <img
                        src={ArrowDown.icon}
                        alt={ArrowDown.title}
                        className="align-middle"
                      />
                    </span>
                  </td>

                  <td className="text-left text-black hidden md:table-cell">
                    {employee.job}
                  </td>
                  <td className="text-left text-black hidden md:table-cell">
                    {formatDate(employee.admission_date)}
                  </td>
                  <td className="text-left text-black hidden md:table-cell">
                    {formatNumber(employee.phone)}
                  </td>
                </tr>

                <tr className="bg-white text-black md:hidden">
                  <td colSpan={5} className="p-0">
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-[500px] opacity-100 py-4"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      <p className="flex justify-between border-b border-[#dfdfdf] border-dotted px-5">
                        <span className="font-medium">Cargo</span>{" "}
                        {employee.job}
                      </p>
                      <p className="flex justify-between border-b border-[#dfdfdf] pt-3 border-dotted px-5">
                        <span className="font-medium">Data de Admissão</span>
                        {formatDate(employee.admission_date)}
                      </p>
                      <p className="flex justify-between border-b border-[#dfdfdf] pt-3 px-5">
                        <span className="font-medium">Telefone</span>{" "}
                        {formatNumber(employee.phone)}
                      </p>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

"use client";

import React from "react";
import { useState } from "react";

import { Circle, ArrowDown } from "@/constants";
import { TableEmployeesProps } from "@/types/employee";
import { formatDate, formatNumber } from "@/utils/formatters";

export const TableEmployees = ({ employees }: TableEmployeesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full block min-h-[32em]">
        <table className="w-full border-collapse shadow-md">
          <thead>
            <tr className="bg-[#0500FF] text-white shadow-md h-[2.9375rem]">
              <th className="pl-5 md:pl-10 rounded-tl-lg text-left">FOTO</th>
              <th className=" p-3 md:pr-0 text-left md:rounded-none rounded-tr-lg">
                <div className="flex items-center justify-between w-[13em] md:w-full">
                  NOME
                  <div className="md:hidden">
                    <span>
                      <img src={Circle.icon} alt={Circle.title} />
                    </span>
                  </div>
                </div>
              </th>
              <th className="text-left hidden md:table-cell">CARGO</th>
              <th className="pl-10 text-left hidden md:table-cell ">
                DATA DE ADMISSÃO
              </th>
              <th className=" rounded-tr-lg text-left hidden md:table-cell">
                TELEFONE
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr className="border-b border-[#cdcdcd] border-2 bg-white">
                <td colSpan={5} className="text-center py-4 text-black">
                  Usuário não encontrado
                </td>
              </tr>
            ) : (
              employees.map((employee, index) => (
                <React.Fragment key={index}>
                  <tr
                    className="border-b border-[#cdcdcd] bg-white hover:bg-gray-100"
                    onClick={() => toggleAccordion(index)}
                  >
                    <td className="py-2 pl-5 md:pl-10">
                      <img
                        src={employee.image}
                        alt="Foto"
                        className="w-[2.125em] h-[2.125em] rounded-full"
                      />
                    </td>
                    <td className="flex items-center justify-between pt-4 pl-3 text-black text-left">
                      {employee.name}
                      <div className="md:hidden flex items-center pr-5">
                        <span
                          className={`transition-transform duration-200 transform origin-center ${
                            openIndex === index ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <img src={ArrowDown.icon} alt={ArrowDown.title} />
                        </span>
                      </div>
                    </td>
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
                    <tr className="bg-gray-50 text-black md:hidden ">
                      <td colSpan={5} className="p-5 flex-row">
                        <p className="flex justify-between border-b border-dotted">
                          <strong>Cargo</strong> {employee.job}
                        </p>
                        <p className="flex justify-between pt-3 border-b border-dotted">
                          <strong>Data de Admissão</strong>
                          {formatDate(employee.admission_date)}
                        </p>
                        <p className="flex justify-between pt-3 border-b border-dotted">
                          <strong>Telefone</strong>{" "}
                          {formatNumber(employee.phone)}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

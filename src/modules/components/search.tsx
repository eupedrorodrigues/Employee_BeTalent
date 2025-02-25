import { useState } from "react";
import { Search } from "@/constants";
import { EmployeeSearchProps } from "@/types/employee";

export const EmployeeSearch = ({ onSearch }: EmployeeSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="bg-white border-input flex h-12 w-[287px] items-center justify-between rounded-md border border-solid p-3 text-center">
      <input
        type="text"
        className="h-full w-full text-black border-none bg-transparent p-0 outline-none"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="border-none border-0 outline-none">
        <img src={Search.icon} alt={Search.title} />
      </button>
    </div>
  );
};

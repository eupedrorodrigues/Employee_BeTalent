import { useState } from "react";
import { Search } from "@/constants";
import { EmployeeSearchProps } from "@/types/employee";

export const EmployeeSearch = ({ onSearch }: EmployeeSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      onSearch("");
    } else {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };
  return (
    <div className="bg-white flex h-12 w-[17.938em] items-center rounded-md border border-solid text-center">
      <input
        type="text"
        className="h-full w-full text-black border-none pl-5 bg-transparent outline-none"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="h-[3em]" onClick={handleSearchClick}>
        <img src={Search.icon} alt={Search.title} width={24} height={24} />
      </button>
    </div>
  );
};

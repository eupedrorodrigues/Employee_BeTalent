import { fetchAPI } from "./index";

import { ListEmployee } from "@/types/employee";

export const getListEmployees = async (): Promise<ListEmployee[]> => {
  const response = await fetchAPI({
    url: "employees",
    options: {
      method: "GET",
    },
  });

  const data: ListEmployee[] = await response.json();

  return data;
};

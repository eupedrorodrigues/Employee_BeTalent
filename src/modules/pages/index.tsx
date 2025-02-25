import { Header } from "@/modules/components/header";
import { TableEmployees } from "@/modules/components/table-employees";
export const Employees = () => {
  return (
    <>
      <Header />
      <main className="flex-col items-center justify-center">
        <TableEmployees />
      </main>
    </>
  );
};

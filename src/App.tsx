import { useMemo } from "react";
import BubgetForm from "./components/BubgetForm";
import ThemeProvider from "./components/theme/ThemeProvider";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/dialogs/ExpenseModal";

export default function App() {  
  const {state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0 ,[state.budget])
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Contenedor del encabezado */}
      <header className="w-full flex items-center justify-between p-4 pb-4 pt-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Planificador de Gastos</h1>
        <ThemeProvider /> {/* Botón de alternancia */}
      </header>

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-3xl mx-auto w-full bg-white shadow-lg rounded-lg mt-10 p-10 dark:bg-gray-800">
            {isValidBudget ? <BudgetTracker /> : <BubgetForm />}
          </div>
        <main className="max-w-3xl mx-auto py-10">
          {
            isValidBudget && (
              <ExpenseModal />
            )
          }
        </main>

      </div>


      {/* Footer */}
      <footer className="w-full flex items-center justify-between p-4 pb-4 pt-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Planificador de Gastos</h1>
      </footer>
    </div>
  );
}
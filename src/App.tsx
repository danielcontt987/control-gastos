import BubgetForm from "./components/BubgetForm";
import ThemeProvider from "./components/theme/ThemeProvider";

export default function App() {  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Contenedor del encabezado */}
      <header className="w-full flex items-center justify-between p-4 pb-4 pt-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Planificador de Gastos</h1>
        <ThemeProvider /> {/* Botón de alternancia */}
      </header>

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-3xl mx-auto w-full bg-white shadow-lg rounded-lg mt-10 p-10 dark:bg-gray-800">
          <BubgetForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex items-center justify-between p-4 pb-4 pt-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Planificador de Gastos</h1>
      </footer>
    </div>
  );
}
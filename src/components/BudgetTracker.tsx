import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
   const {state, totalExpense, avilableTotal } = useBudget();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center ">
                <img src="/grafico.jpg" alt="Gráfico de gastos" />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="w-full rounded-lg py-3 bg-red-700 text-white
                 font-normal uppercase hover:bg-pink-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Reiniciar
                </button>
                <AmountDisplay 
                  label="Presupuesto"
                  amount={state.budget}
                />
                <AmountDisplay 
                  label="Disponible"
                  amount={avilableTotal}
                  />
                <AmountDisplay 
                  label="Gastado"
                  amount={totalExpense}
                />
            </div>
        </div>
    )
}

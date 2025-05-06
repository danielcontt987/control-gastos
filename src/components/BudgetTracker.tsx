import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTracker() {
   const {state, totalExpense, avilableTotal, percentage, dispatch } = useBudget();
   const mode = localStorage.getItem('theme')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center ">
                <CircularProgressbar 
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#7367f0',
                        trailColor: '#f5f5f5',
                        textSize: 8,
                        textColor: mode == 'dark' ? '#000' : '#7367f0'
                       
                    })}
                    text={`${percentage} % gastado`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="w-full rounded-lg py-3 bg-red-700 text-white
                    font-normal uppercase hover:bg-pink-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => dispatch({type: 'reset-expenses'})}
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

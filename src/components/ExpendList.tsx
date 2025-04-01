import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails";

export default function ExpendList() {
    const { state } = useBudget()
    const isEmpty = useMemo(() => state.expense.length === 0, [state.expense]);
    return (
        <div className="pt-10">
            {isEmpty ? <p>No hay gastos por mostrar</p> :
                (
                    <>
                        <p className="text-2xl font-semibold my-5 text-start dark:text-white">
                            Listado de gastos
                        </p>
                        {state.expense.map(item => (
                            <ExpenseDetails key={item.id} expense={item} /> 
                        ))}
                    </>
                )
            }
        </div>
    )
}

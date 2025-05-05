import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpense: number,
    avilableTotal: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

//Acceso al estado o info y ponder utilizar la sintaxis de rect
export const BudgetPorvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpense = useMemo(() => state.expense.reduce(
        (total, expense) => expense.amount + total, 0), [state.expense])

    const avilableTotal = state.budget - totalExpense
    
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpense,
                avilableTotal
            }}
        >
           {children}
        </BudgetContext.Provider>
    )
} 
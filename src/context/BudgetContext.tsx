import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

//Acceso al estado o info y ponder utilizar la sintaxis de rect
export const BudgetPorvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)
    
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
           {children}
        </BudgetContext.Provider>
    )
} 
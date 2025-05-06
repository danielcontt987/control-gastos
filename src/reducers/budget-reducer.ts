import { v4 as uuidv4 } from 'uuid';

import { DraftExpense, Expense } from "../types";


export type BudgetActions = 
    {type: 'add-budget', payload: {budget: number}} |
    {type: 'show-modal'} |
    {type: 'close-modal'} |
    {type: 'show'} |
    {type: 'close'} |
    {type: 'msg', payload: {msg: string}} |
    {type: 'add-expense', payload: {expense : DraftExpense}} |
    {type: 'status-modal', payload: {status : boolean}} | 
    {type: 'remove-expense', payload: {id: Expense['id']}} |
    {type: 'get-expense-by-id', payload: {id: Expense['id']}} |
    {type: 'update-expense', payload: {expense: Expense}} |
    {type: 'reset-expenses'} 


const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
}

const localStorageExpenses = () : Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export type BudgetState = {
    budget: number,
    modal: boolean,
    modalAlert: boolean,
    msg: string,
    expense: Expense[],
    status: boolean,
    editingId: Expense['id']
}

export const initialState = {
    budget: initialBudget(),
    modal: false,
    modalAlert: false,
    msg: '',
    expense: localStorageExpenses(),
    status: false,
    editingId: '',
}

const craeteExpense = (draftExpense: DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type == 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (action.type == 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if (action.type == 'show') {
        return {
            ...state,
            modalAlert: true,
        }
    }

    if (action.type == 'close') {
        return {
            ...state,
            modalAlert: false,
            msg: ''
        }
    }

    if (action.type == 'msg') {
        return {
            ...state,
            msg: action.payload.msg
        }
    }

    if (action.type === 'add-expense') {
        const expense = craeteExpense(action.payload.expense)
        return {
            ...state,
            expense: [...state.expense, expense],
            modal: false
        }
    }

    if (action.type === 'status-modal') {
        return {
            ...state,
            status: action.payload.status
        }
    }

    if (action.type === 'remove-expense') {
        return{
            ...state,
            expense: state.expense.filter(expense => expense.id !== action.payload.id)
        }
    }
    if (action.type === 'get-expense-by-id') {
        return{
            ...state,
            editingId: action.payload.id,
            modal: true
        }
    }

    if(action.type === 'update-expense') {        
        return {
            ...state,
            expense: state.expense.map(exp =>
                exp.id === action.payload.expense.id ? action.payload.expense : exp
            ),
            modal: false,
            editingId: ''
        };
    }

    if(action.type === 'reset-expenses') {        
        return {
            ...state,
            expense: []
        };
    }

  

    return state
}
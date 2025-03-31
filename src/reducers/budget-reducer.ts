import {v4 as uuidv4} from 'uuid';

import { DraftExpense, Expense } from "../types"


export type BudgetActions = 
    {type: 'add-budget', payload: {budget: number}} |
    {type: 'show-modal'} |
    {type: 'close-modal'} |
    {type: 'show-modal-error'} |
    {type: 'close-modal-error'} |
    {type: 'msg-error', payload: {error: string}} |
    {type: 'msg-error-clear'} |
    {type: 'add-expense', payload: {expense : DraftExpense}} |
    {type: 'clear-expense'}


export type BudgetState = {
    budget: number,
    modal: boolean,
    modalError: boolean,
    errorMsg: string,
    expense: Expense[],
}

export const initialState = {
    budget: 0,
    modal: false,
    modalError: false,
    errorMsg: '',
    expense: [],
}

const craeteExpense = (draftExpense: DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    actions: BudgetActions
) => {
    if (actions.type === 'add-budget') {
        return {
            ...state,
            budget: actions.payload.budget
        }
    }

    if (actions.type == 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (actions.type == 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if (actions.type == 'show-modal-error') {
        return {
            ...state,
            modalError: true,
        }
    }

    if (actions.type == 'close-modal-error') {
        return {
            ...state,
            modalError: false,
            errorMsg: ''
        }
    }

    if (actions.type == 'msg-error') {
        return {
            ...state,
            errorMsg: actions.payload.error
        }
    }

    if (actions.type === 'add-expense') {
        const expense = craeteExpense(actions.payload.expense)
        return {
            ...state,
            expense: [...state.expense, expense]
        }
    }

    if (actions.type === 'clear-expense') {
        
    }
    return state
}
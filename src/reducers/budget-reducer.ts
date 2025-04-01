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
    {type: 'status-modal', payload: {status : boolean}}


export type BudgetState = {
    budget: number,
    modal: boolean,
    modalAlert: boolean,
    msg: string,
    expense: Expense[],
    status: boolean,
}

export const initialState = {
    budget: 0,
    modal: false,
    modalAlert: false,
    msg: '',
    expense: [],
    status: false,
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

    if (actions.type == 'show') {
        return {
            ...state,
            modalAlert: true,
        }
    }

    if (actions.type == 'close') {
        return {
            ...state,
            modalAlert: false,
            msg: ''
        }
    }

    if (actions.type == 'msg') {
        return {
            ...state,
            msg: actions.payload.msg
        }
    }

    if (actions.type === 'add-expense') {
        const expense = craeteExpense(actions.payload.expense)
        return {
            ...state,
            expense: [...state.expense, expense],
            modal: false
        }
    }

    if (actions.type === 'status-modal') {
        return {
            ...state,
            status: actions.payload.status
        }
    }

    return state
}
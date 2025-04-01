import moment from "moment";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { useMemo } from "react";
import { categories } from "../data/categories";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

moment().locale('es');

type ExpenseDetailsProps = {
    expense: Expense
}

export default function ExpenseDetails({ expense }: ExpenseDetailsProps) {

    const categoryInfo = useMemo(() => categories.filter((item) => item.id === expense.category)[0], [expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => {}}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => {}}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem 
                    maxSwipe={30} 
                    leadingActions={leadingActions()} 
                    trailingActions={trailingActions()}>
                <div className="bg-white shadow-lg p-10 text-start mb-3 dark:bg-gray-800 border-gray-200 w-full rounded-lg flex gap-5 items-center">
                    <div>
                        <img src={`/icono_${categoryInfo.icon}.svg`} className="w-20" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold uppercase">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm dark:text-white">
                            {moment(expense.date).locale('es').format('dddd, D [de] MMMM [de] YYYY')}
                        </p>
                    </div>

                    <AmountDisplay
                        amount={expense.amount}
                    />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

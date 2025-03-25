import { ChangeEvent, FormEvent, useState } from "react";
import { categories } from "../../data/categories";
import { useBudget } from "../../hooks/useBudget";
import { DraftExpense } from "../../types";
import moment from "moment";

export default function ExpenseForm() {
    const { dispatch } = useBudget();
    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: moment().toDate(),
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'close-modal' });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        const isAmountField = ['amount'].includes(name);
        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        });
    };

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpense(prevExpense => ({
            ...prevExpense,
            date: moment(event.target.value, 'YYYY-MM-DD').toDate(),
        }));
    };


    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Nombre del gasto */}
            <div className="relative">
                <input
                    type="text"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                    className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Nombre del gasto
                </label>
            </div>

            {/* Cantidad */}
            <div className="relative">
                <input
                    type="number"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                    className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Cantidad
                </label>
            </div>

            {/* Categoría */}
            <div className="relative">
                <select
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                    className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                >
                    <option value="">Seleccione la categoría</option>
                    {categories.map(category => (
                        <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Categoría
                </label>
            </div>

            {/* Fecha */}
            <div className="relative">
                <input
                    type="date"
                    value={moment(expense.date).format('YYYY-MM-DD')}
                    onChange={handleChangeDate}
                    className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                    Fecha
                </label>
            </div>

            {/* Botones */}
            <div className="flex flex-col lg:flex-row justify-between gap-3 w-full">
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'close-modal' })}
                    className="block w-full py-2 uppercase dark:text-white rounded-lg dark:bg-red-500 text-red-700 border-2"
                >
                    Cerrar
                </button>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 uppercase bg-custom-blue hover:bg-cyan-800 text-white rounded-lg"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

import { FormEvent } from "react";
import { categories } from "../../data/categories";
import { useBudget } from "../../hooks/useBudget";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
    const { dispatch } = useBudget();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que el formulario se recargue
        dispatch({ type: 'close-modal' }); // Aquí podrías manejar la lógica de envío
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <div className="relative">
                    <input
                        className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    />
                    <label className="absolute cursor-text bg-white dark:bg-gray-900 px-1 left-2.5 top-4 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Nombre del gasto
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <input
                        type="number"
                        className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    />
                    <label className="absolute cursor-text bg-white dark:bg-gray-900 px-1 left-2.5 top-4 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Cantidad
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <select
                        className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    >
                        <option value="">Seleccione la categoría</option>
                        {
                            categories.map(category => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                    <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Categoría
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <input
                        type="date"
                        className="peer w-full dark:bg-gray-900 placeholder:text-slate-400 text-sm border border-slate-200 rounded-lg px-4 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    />
                    <label className="absolute cursor-auto bg-white dark:bg-gray-900 px-1 left-2.5 -top-2 text-xs text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Fecha
                    </label>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3 w-full">
                <button
                    type="button" // Cambiado de "submit" a "button"
                    onClick={() => dispatch({ type: 'close-modal' })}
                    className="block w-full py-2 uppercase dark:text-white rounded-lg dark:bg-red-500 text-red-700 border-2"
                >
                    Cerrar
                </button>
                <button
                    type="submit" // Solo este botón envía el formulario
                    className="block w-full px-4 py-2 uppercase bg-custom-blue hover:bg-cyan-800 text-white rounded-lg"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

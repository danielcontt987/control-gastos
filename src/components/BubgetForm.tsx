import {useMemo, useState } from "react";

export default function BudgetForm() {
    const [budget, setBudget] = useState(0);
    const handleChange = (e :  React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }
    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 5
    }, [budget])
    return (
        <>
            <form className="space-y-5">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="budget" className="text-3xl font-semibold text-center">
                        Definir presupuesto
                    </label>

                    <div className="relative w-full">
                        <input type="number" id="budget" placeholder="Define el presupuesto"
                            className="appearance-none w-full 
                            px-4 py-3 border border-gray-300 
                            rounded-lg shadow-sm text-gray-700 
                            dark:bg-slate-700
                            dark:text-white
                            focus:outline-none" 
                            value={budget}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input type="submit" value='Definir presupuesto'
                    disabled={isValid}
                    className="w-full rounded-lg py-3 bg-custom-blue text-white
                    font-normal uppercase hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </form>
        </>
    );
}

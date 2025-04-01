import { ReactNode } from "react";
import { useBudget } from "../../hooks/useBudget";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

type ErrorModalProps = {
    children: ReactNode;
};

export default function ErrorModal({ children }: ErrorModalProps) {
    const { state, dispatch } = useBudget();

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out
                        ${state.msg ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`bg-white p-6 dark:bg-gray-900 rounded-lg shadow-xl w-full transform transition-all duration-500 ease-in-out
                            ${state.msg ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} 
                            max-w-xl flex flex-col items-center`}
            >
                <span
                    className={`w-20 h-20 ${state.status === false ? 'bg-red-100' : 'bg-green-100'} rounded-full flex items-center justify-center mb-4`}
                >
                    {state.status === false
                        ? <ExclamationCircleIcon className="w-14 h-14 text-red-600" />
                        : <CheckCircleIcon className="w-14 h-14 text-green-600" />
                    }
                </span>
                <h1 className="mt-4 font-bold text-2xl">{state.status === false ? 'Error' : 'Exitoso'}</h1>
                <p className="font-light text-lg">{children}</p>
                <div className="flex flex-col gap-3 w-full mt-10">
                    <button
                        type="button"
                        onClick={() => dispatch({ type: 'close' })}
                        className={`block w-full py-2 uppercase dark:text-white rounded-lg ${state.status === false ? 'dark:bg-red-500 bg-red-700' : 'dark:bg-custom-blue bg-custom-blue'} text-white`}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

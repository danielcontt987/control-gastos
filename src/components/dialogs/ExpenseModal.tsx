import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { useBudget } from '../../hooks/useBudget';
import ExpenseForm from '../form/ExpenseForm';
import AlertNormal from './AlertNormal';

export default function ExpenseModal() {
    const { state, dispatch } = useBudget();
    return (
        <div className="fixed right-5 bottom-5 flex items-center justify-center">
            <button
                type="button"
                onClick={() => dispatch({ type: 'show-modal' })}
                className="rounded-full bg-custom-blue w-16 h-16"
            >
                <Icon path={mdiPlus} size={2} className="m-auto" color={"white"}/>
            </button>

            {/* Modal siempre presente pero con clases de animación */}
            <div
                className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-out 
                ${state.modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div
                    className={`bg-white p-6 dark:bg-gray-900 rounded-lg shadow-xl w-full transform transition-all duration-500 ease-out 
                    ${state.modal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} 
                    sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl`}
                >
                    <h2 className="text-xl font-medium mb-10 text-left">
                        <span className="bg-custom-blue px-4 py-2 rounded-lg text-white">
                            {state.editingId ? 'Editar gasto' : 'Nuevo gasto'}
                        </span>
                    </h2>
                    <ExpenseForm />
                </div>
            </div>

            { state.modalAlert && <AlertNormal>{state.msg}</AlertNormal>}
        </div>
    );
}

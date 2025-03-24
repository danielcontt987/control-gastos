import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { useBudget } from '../../hooks/useBudget';
import ExpenseForm from '../form/ExpenseForm';



export default function ExpenseModal() {
    const { state, dispatch } = useBudget();
    return (
        <div className='fixed right-5 bottom-5 flex items-center justify-center'>
            <button type='button' onClick={() => dispatch({ type: 'show-modal' })} className='rounded-full bg-mango-yellow w-16 h-16'>
                <Icon path={mdiPlus} size={2} className='m-auto' />
            </button>

            {
                state.modal && (
                    <div
                        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-out ${state.modal ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}

                    >
                        <div
                            className={`bg-white p-6 dark:bg-gray-900 rounded-lg shadow-xl w-full transform transition-all duration-500 ease-out 
                                ${state.modal ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
                                sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl`}
                        >
                            <h2 className="text-xl font-medium text mb-10 text-left"><span className='bg-custom-blue px-4 py-2 rounded-lg text-white'>Nuevo gasto</span></h2>
                            <ExpenseForm />
                            {/* <div className="mt-10 flex flex-col lg:flex-row justify-between gap-3 w-full">
                                <button
                                    onClick={() => dispatch({ type: 'close-modal' })}
                                    className="block w-full py-2 uppercase text-white rounded-lg bg-red-500 hover:bg-red-900"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'close-modal' })}
                                    className="block w-full px-4 py-2 uppercase bg-custom-blue hover:bg-cyan-800 text-white rounded-lg"
                                >
                                    Agregar
                                </button>
                            </div> */}

                        </div>
                    </div>
                )
            }
        </div>
    )
}

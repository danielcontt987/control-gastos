import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { useBudget } from '../../hooks/useBudget';



export default function ExpenseModal() {
    const { state, dispatch } = useBudget();
    return (
        <div className='fixed right-5 bottom-5 flex items-center justify-center'>
            <button type='button' onClick={() => dispatch({type: 'show-modal'})} className='rounded-full bg-mango-yellow w-16 h-16'>
                <Icon path={mdiPlus} size={2} className='m-auto' />
            </button>

            {
                state.modal && (
                    <div
                        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${state.modal ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}

                    >
                        <div
                            className={`bg-white p-6 rounded-lg shadow-xl max-w-sm w-full transform transition-all duration-500 ease-out ${state.modal ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                                }`}
                        >
                            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                            <p className="text-gray-600">This is a modal window using TailwindCSS.</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => dispatch({type: 'close-modal'})}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

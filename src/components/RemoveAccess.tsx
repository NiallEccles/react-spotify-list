import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FormattedMessage } from "react-intl";
import { ExternalLink } from 'lucide-react';

export const RemoveAccess = () => {
    const [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-white block text-center underline pb-10"
                >
                    <FormattedMessage id="removeAccess" />
                </button>
            </div>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden border-black border-2 bg-red-200 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-gray-900"
                                    >
                                        <FormattedMessage id="removeAccessTitle" />
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-black">
                                            <FormattedMessage id="removeAccessDescription" />
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center border-black border-2 bg-white px-4 py-2 text-sm font-medium text-black hover:underline focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            <FormattedMessage id="removeAccessReturn" />
                                        </button>
                                        <a
                                            href='https://www.spotify.com/account/apps/'
                                            target='_blank'
                                            className="inline-flex justify-center border-black border-2 bg-white px-4 py-2 text-sm font-medium text-black hover:underline focus:outline-none"
                                        >
                                            <FormattedMessage id="removeAccessContinue" /><ExternalLink className='w-5 h-5 ml-2' />
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
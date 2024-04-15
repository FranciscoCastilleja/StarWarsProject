'use client'

import { useEffect, useState } from "react";
import { CreateDiscussion } from "./action";

export default function NewDiscussion({searchParams}:{searchParams: {message:string, event:string}}) {
    let Evento : string = (searchParams.event === undefined) ? "No event assigned" : searchParams.event;

    const [messageShow, setMessageShow] = useState<boolean>(false)

    useEffect(() => {
        if (searchParams.message !== undefined) {
            setMessageShow(true)
        }
    }, [])

    return (
        <main className="flex h-auto justify-center">
            <section className="grid w-full h-full place-items-center sm:w-[50%]">
                {
                    messageShow === true && (
                        <div className="flex absolute top-36 items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-[#333]" role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-red-800 text-red-200">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                                </svg>
                                <span className="sr-only">Error icon</span>
                            </div>
                            <div className="ms-3 text-sm font-normal">{searchParams.message}.</div>
                            <button onClick={() => setMessageShow(false)} className="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-[#222] hover:bg-[#444]" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                    )
                }
                <form action={CreateDiscussion} className="grid my-[25%] size-auto bg-white/20 rounded-xl place-items-center">
                    <h2 className="my-2 mx-5 text-white text-xl font-bold">Create a new discussion</h2>
                    <label htmlFor="name" className="text-white text-base">Discussion Name</label>
                    <input type="text" name="name" id="name" autoComplete="no" className="mb-3 pl-1 w-[90%] rounded" required/>
                    <label htmlFor="description" className="text-white text-base">Discussion Description</label>
                    <textarea name="description" id="description" className="mb-3 pl-1 w-[90%] rounded"></textarea>
                    <label htmlFor="event" className="text-white text-base">Discussion Event</label>
                    <input type="text" name="event" id="event" autoComplete="no" readOnly value={Evento} className="mb-3 pl-1 w-[90%] rounded"/>
                    <button className="my-3 py-1 px-2 bg-[#111] text-white rounded hover:bg-white hover:text-[#111]">Create</button>
                </form>
            </section>
        </main>
    );
}
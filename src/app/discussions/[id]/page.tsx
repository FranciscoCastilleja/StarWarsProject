'use client'

import Messages from "@/app/componentes/sections/Messages";
import { SendMessage } from "./action";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/app/utils/supabase/client";

export default function IdDiscussion({searchParams}:{searchParams: {message:string}}) {
    const pathname = usePathname()
    const id = pathname.split('/')[2]

    const supabase = createClient()

    const [messageShow, setMessageShow] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const GetUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (!error) {
                setUser(data.user)
            }
        }

        GetUser()
    }, [])

    useEffect(() => {
        if (searchParams.message !== undefined) {
            setMessageShow(true)
        }
    }, [])

    return (
        <main className="min-h-screen h-auto">
            <div className="grid size-full place-items-center">
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
                <Messages id={id}/>
                <section className="flex my-3 w-full h-auto justify-center sm:w-[50%]">
                    {
                        user && (
                            <form action={SendMessage} className="flex p-2 w-full h-auto bg-[#333]/80 rounded-lg justify-center">
                                <div className="grid size-full place-items-center">
                                    <label htmlFor="comment" className="my-1 text-white text-base">Comment</label>
                                    <textarea name="comment" id="comment" className="my-1 pl-1 w-[80%] rounded" required/>
                                    <input type="checkbox" value={id} name="id" className="hidden" defaultChecked={true}/>
                                </div>
                                <button className="p-3 rounded-md border border-white/30 hover:bg-[#333]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                                        <path d="M6.5 12h14.5" />
                                    </svg>
                                </button>
                            </form>
                        )
                    }
                </section>
            </div>
        </main>
    );
}
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Discussions from "../componentes/sections/Discussions";
import { User } from "@supabase/supabase-js";
import { createClient } from "../utils/supabase/client";

export default function Discusiones({searchParams}:{searchParams: {message:string}}) {
    const supabase = createClient()

    const [messageShow, setMessageShow] = useState<boolean>(false)

    useEffect(() => {
        if (searchParams.message !== undefined) {
            setMessageShow(true)
        }
    }, [])

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

    return (
        <main className="min-h-screen h-auto">
            <section className="flex w-full h-0 justify-center">
                {
                    messageShow === true && (
                        <div className="flex absolute top-36 items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-[#333]" role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-green-800 text-green-200">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="sr-only">Check icon</span>
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
            </section>
            <section className="flex mt-3 w-full h-fit justify-end">
                {
                    user && (<Link href="/discussions/new-discussion" className="mr-3 mb-3 p-2 text-white text-base bg-black/90 border border-white rounded-xl hover:bg-white hover:text-black">Create Discussion</Link>)
                }
            </section>
            <Discussions/>
        </main>
    );
}
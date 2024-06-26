'use client'

import Messages from "@/app/componentes/sections/Messages";
import { SendMessage } from "./action";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/app/utils/supabase/client";
import CloseDiscussionButton from "@/app/componentes/sections/CloseDiscussionButton";

export default function IdDiscussion() {
    const params = useParams<{id:string}>()

    const supabase = createClient()

    const [user, setUser] = useState<User | null>(null)
    const [data, setData] = useState<boolean>(false)

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
        const getData = async () => {
            const { data, error } = await supabase
            .from('Discussions')
            .select('status')
            .eq('id', params.id)

            if (!error) {
                setData(data[0].status)
            }
        }

        getData()
    })

    return (
        <main className="min-h-screen h-auto">
            <div className="grid size-full place-items-center">
                <CloseDiscussionButton id={params.id}/>
                <Messages id={params.id}/>
                <section className="flex my-3 w-full h-auto justify-center sm:w-[50%]">
                    {
                        user && data != false && (
                            <form action={SendMessage} className="flex p-2 w-full h-auto bg-[#333]/80 rounded-lg justify-center">
                                <div className="grid size-full place-items-center">
                                    <label htmlFor="comment" className="my-1 text-white text-base">Comment</label>
                                    <textarea name="comment" id="comment" className="my-1 pl-1 w-[80%] rounded" required/>
                                    <input type="checkbox" value={params.id} name="id" className="hidden" defaultChecked={true}/>
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
'use client'

import { createClient } from "@/app/utils/supabase/client";
import { useEffect, useState } from "react";
import Message from "../Message";
import { useRouter } from "next/navigation";

export default function Messages({id}:{id:string}) {
    const supabase = createClient()

    const [showMessages, setShowMessages] = useState<any>(0);

    useEffect(() => {
        const GetMessages = async () => {
            const { data: content, error } = await supabase
            .from('Discussions')
            .select('content')
            .eq('id', id)

            if (!error) {
                let messagesJson = JSON.parse(JSON.stringify(content[0].content, null, 2))
                setShowMessages(messagesJson)
            }
        }

        GetMessages()
    }, [])

    const router = useRouter()

    useEffect(() => {
        const channel = supabase.channel('realtime comments').on('postgres_changes',{
            event:'*',
            schema:'public',
            table:'Discussions'
        }, () => {
            router.refresh()
        }).subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, router])

    return (
        <section className="grid my-3 w-full h-auto place-items-center border-x border-white/50 sm:w-[50%]">
            {
                Object.keys(showMessages).length === 0 ? (
                    <h2 className="text-white text-xl">No comments</h2>
                ) : (
                    Object.keys(showMessages).map((Item:any, index:number) => {
                        let messageItem = showMessages[Item]
                        return (
                            <Message key={index} avatar={messageItem.avatar} name={messageItem.name} date={messageItem.date} message={messageItem.message}/>
                        );
                    })
                )
            }
        </section>
    );
}
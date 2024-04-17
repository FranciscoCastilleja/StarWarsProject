'use client'

import { createClient } from "@/app/utils/supabase/client";
import { UUID } from "crypto";
import Link from "next/link";
import { useDebugValue, useEffect, useState } from "react";

export default function Discussions() {
    const supabase = createClient()

    const [dataDiscussions, setDataDiscussions] = useState<any>([])

    useEffect(() => {
        const GetDiscussions = async () => {
            const { data: discussions, error } = await supabase
            .from('Discussions')
            .select('id, created_by, name, description, event')
            
            if (!error) {
                setDataDiscussions(discussions)
            }
        }

        GetDiscussions()
    }, [])

    return (
        <section className="grid mt-3 w-full h-fit place-items-center">
            {
                dataDiscussions && dataDiscussions?.map((discussion:any) => {
                    const {
                        id,
                        created_by, 
                        name: name,
                        description: description,
                        event: event
                    } = discussion
                    return (
                        <Link key={discussion.id} href={`/discussions/discussion?id=${id}`} className="w-full h-auto sm:w-[50%]">
                            <div className="my-3 p-3 w-full h-auto bg-[#444] rounded-lg hover:bg-[#555]">
                                <div className="flex w-full h-auto items-center gap-x-5">
                                    <h2 className="my-2 text-white text-3xl font-bold">{discussion.name}</h2>
                                    <p className="my-2 text-white text-base">Created by: {discussion.created_by}</p>
                                </div>
                                <p className="my-1 text-white text-lg">Event: {discussion.event}</p>
                                <p className="my-1 text-white text-base">{discussion.description}</p>
                            </div>
                        </Link>
                    );
                })
            }
        </section>
    );
} 
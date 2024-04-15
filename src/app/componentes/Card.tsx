'use client'

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function Card({name, year}:{name:string, year:string}) {
    const supabase = createClient()

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const GetUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (!error) {
                setUser(data.user)
            }
        }

        GetUser()
    }, [user])

    return(
        <div className="grid my-5 w-60 h-auto bg-[#333] rounded-3xl place-items-center hover:bg-[#444]/90">
            <h2 className="mt-3 mb-2 text-white text-center text-lg font-bold">{name}</h2>
            <p className="mb-2 text-white text-base">{year}</p>
            {
                user && (
                    <Link href={`/discussions/new-discussion?event=${name}`} className="mb-3 p-2 text-white text-base bg-black/90 border border-white rounded-xl hover:bg-white hover:text-black">Create Discussion</Link>
                )
            }
        </div>
    );
}
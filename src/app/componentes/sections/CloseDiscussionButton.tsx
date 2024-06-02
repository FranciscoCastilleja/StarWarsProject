'use client'

import { createClient } from "@/app/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function CloseDiscussionButton({id}:{id:string}) {
    const supabase = createClient()

    const [user, setUser] = useState<User | null>(null)
    const [data, setData] = useState<{ created_by: string, status: boolean }>({ created_by: '', status: false })

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
            .select('created_by, status')
            .eq('id', id)

            if (!error) {
                setData({ created_by: data[0].created_by , status: data[0].status })
            }
        }

        getData()
    })

    async function ChangeStatus() {
        const { error } = await supabase
        .from('Discussions')
        .update({ status: false })
        .eq('id', id)
    }

    return (
        <section className="flex mt-3 w-full h-auto justify-center">
            {
                user?.user_metadata.full_name === data.created_by && data.status != false && (<button onClick={ChangeStatus} className="mb-3 p-2 text-white text-base bg-black/90 border border-white rounded-xl hover:bg-red-700 hover:border-red-700">Close Discussion</button>)
            }
        </section>
    );
}
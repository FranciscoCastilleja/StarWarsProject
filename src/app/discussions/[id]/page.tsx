import Messages from "@/app/componentes/sections/Messages";
import { SendMessage } from "./action";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
//import { createClient } from "@/app/utils/supabase/client";
import { createClient } from "@/app/utils/supabase/server";
import FormMessage from "@/app/componentes/FormMessage";

export default function IdDiscussion() {
    //const params = useParams<{id:string}>()

    //const supabase = createClient()

    //const [user, setUser] = useState<User | null>(null)

    /*useEffect(() => {
        const GetUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (!error) {
                setUser(data.user)
            }
        }

        GetUser()
    }, [])*/

    return (
        <main className="min-h-screen h-auto">
            <FormMessage/>
        </main>
    );
}
'use server'

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function SendMessage(formData: FormData) {
    const supabase = createClient()

    const id = formData.get('id') as string;

    const { data, error: errorUser } = await supabase.auth.getUser()
    if (errorUser) {
        redirect(`/discussions/${id}`)
    }

    const name = data.user.user_metadata.full_name
    const avatar = data.user.user_metadata.avatar_url
    const message = formData.get('comment') as string;
    const date = new Date(Date.now()).toLocaleDateString()
    const time = new Date(Date.now()).toLocaleTimeString()
    const fullDate = date + ' ' + time

    const { data: content, error } = await supabase
    .from('Discussions')
    .select('content')
    .eq('id', id)

    if (error) {
        redirect(`/discussions/${id}`)
    } else {
        let newContent = JSON.parse(JSON.stringify(content, null, 2));

        let newObject = {
            name: name,
            avatar: avatar,
            date: fullDate,
            message: message
        }

        newContent[0].content[Object.keys(content[0].content).length + 1] = newObject

        const { data, error } = await supabase
        .from('Discussions')
        .update({
            content: newContent[0].content
        })
        .eq('id', id)

        if (error) {
            redirect(`/discussions/${id}`)
        }

        //revalidatePath(`/discussions/${id}`)
        revalidatePath('/discussions')
        redirect(`/discussions/${id}`)
    }
}
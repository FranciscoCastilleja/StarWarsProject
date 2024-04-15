'use server'

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateDiscussion(formData: FormData) {
    const supabase = createClient();

    const { data, error: errorUser } = await supabase.auth.getUser()
    if (errorUser) {
        redirect("/discussions/new-discussion?message=Error with the user")
    }

    const user = data.user.user_metadata.full_name
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const event = formData.get('event') as string;

    const { error } = await supabase
    .from('Discussions')
    .insert({ created_by: user, name: name, description: description, event: event })

    if (error) {
        revalidatePath("/discussions/new-discussion")
        redirect("/discussions/new-discussion?message=Error to create the discussion")
    } else {
        revalidatePath("/discussions")
        redirect("/discussions")
    }
}
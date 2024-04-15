'use client'

import Link from "next/link";
import StarWarsIcon from "../icons/StarWarsIcon";
import { createClient } from "@/app/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const supabase = createClient()

    const pathname = usePathname()

    const SignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:3000/auth/callback?next=${pathname}`
            }
        })
    }

    const SignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            setUser(null)
            window.location.reload();
        }
    }

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
        <header className="flex sticky py-3 w-full h-auto justify-center top-0 items-center gap-x-[8%] bg-[#111] border-b-2 border-white z-10 sm:gap-x-[20%] md:gap-x-[30%] lg:gap-x-[50%]">
            <Link href="/" className="size-auto hover:scale-105">
                <StarWarsIcon/>
            </Link>
            <nav className="flex items-center gap-x-3 sm:gap-x-5">
                <Link href="/blog" className="text-white text-xl hover:scale-105 hover:text-yellow-500">Blog</Link>
                <Link href="/discussions" className="text-white text-xl hover:scale-105 hover:text-yellow-500">Discussions</Link>
                {
                    user == null ? (
                        <button onClick={SignIn} className="text-white bg-[#333] hover:bg-[#555]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#444]/55">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                            </svg>
                            <span className="hidden sm:block">Sign in with Google</span>
                        </button>
                    ) : (
                        <button onClick={SignOut} className="text-white bg-[#333] hover:bg-[#555]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-x-3 focus:ring-[#444]/55 me-2 mb-2">
                            <img src={user.user_metadata.avatar_url} alt={`Picture of the user ${user.user_metadata.full_name}`} className="size-8 rounded-full"/>
                            <span className="hidden sm:block">Sign Out</span>
                        </button>
                    )
                }
            </nav>
        </header>
    );
}
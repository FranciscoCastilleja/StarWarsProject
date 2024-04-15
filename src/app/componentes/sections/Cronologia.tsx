'use client'

import Image from "next/image"
import Card from "../Card"
import { createClient } from "@/app/utils/supabase/client"
import { useEffect, useState } from "react"

export default function Cronologia() {
    const supabase = createClient()

    const [user, setUser] = useState<boolean>(false)

    useEffect(() => {
        const GetUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (data.user) {
                setUser(true)
            }
        }

        GetUser()
    }, [user])

    function Article1() {
        const article1 = document.getElementById('article1') as HTMLElement;
        const content1 = document.getElementById('Content1') as HTMLElement;
        if (content1.classList.contains('hidden')) {
            article1.classList.remove('h-48')
            article1.classList.add('h-auto')
            content1.classList.remove('hidden')
            content1.classList.add('grid')
        } else {
            article1.classList.remove('h-auto')
            article1.classList.add('h-48')
            content1.classList.remove('grid')
            content1.classList.add('hidden')
        }
    }

    function Article2() {
        const article2 = document.getElementById('article2') as HTMLElement;
        const content2 = document.getElementById('Content2') as HTMLElement;
        if (content2.classList.contains('hidden')) {
            article2.classList.remove('h-48')
            article2.classList.add('h-auto')
            content2.classList.remove('hidden')
            content2.classList.add('grid')
        } else {
            article2.classList.remove('h-auto')
            article2.classList.add('h-48')
            content2.classList.remove('grid')
            content2.classList.add('hidden')
        }
    }

    function Article3() {
        const article3 = document.getElementById('article3') as HTMLElement;
        const content3 = document.getElementById('Content3') as HTMLElement;
        if (content3.classList.contains('hidden')) {
            article3.classList.remove('h-48')
            article3.classList.add('h-auto')
            content3.classList.remove('hidden')
            content3.classList.add('grid')
        } else {
            article3.classList.remove('h-auto')
            article3.classList.add('h-48')
            content3.classList.remove('grid')
            content3.classList.add('hidden')
        }
    }

    function Article4() {
        const article4 = document.getElementById('article4') as HTMLElement;
        const content4 = document.getElementById('Content4') as HTMLElement;
        if (content4.classList.contains('hidden')) {
            article4.classList.remove('h-48')
            article4.classList.add('h-auto')
            content4.classList.remove('hidden')
            content4.classList.add('grid')
        } else {
            article4.classList.remove('h-auto')
            article4.classList.add('h-48')
            content4.classList.remove('grid')
            content4.classList.add('hidden')
        }
    }

    function Article5() {
        const article5 = document.getElementById('article5') as HTMLElement;
        const content5 = document.getElementById('Content5') as HTMLElement;
        if (content5.classList.contains('hidden')) {
            article5.classList.remove('h-48')
            article5.classList.add('h-auto')
            content5.classList.remove('hidden')
            content5.classList.add('grid')
        } else {
            article5.classList.remove('h-auto')
            article5.classList.add('h-48')
            content5.classList.remove('grid')
            content5.classList.add('hidden')
        }
    }

    function Article6() {
        const article6 = document.getElementById('article6') as HTMLElement;
        const content6 = document.getElementById('Content6') as HTMLElement;
        if (content6.classList.contains('hidden')) {
            article6.classList.remove('h-48')
            article6.classList.add('h-auto')
            content6.classList.remove('hidden')
            content6.classList.add('grid')
        } else {
            article6.classList.remove('h-auto')
            article6.classList.add('h-48')
            content6.classList.remove('grid')
            content6.classList.add('hidden')
        }
    }

    function Article7() {
        const article7 = document.getElementById('article7') as HTMLElement;
        const content7 = document.getElementById('Content7') as HTMLElement;
        if (content7.classList.contains('hidden')) {
            article7.classList.remove('h-48')
            article7.classList.add('h-auto')
            content7.classList.remove('hidden')
            content7.classList.add('grid')
        } else {
            article7.classList.remove('h-auto')
            article7.classList.add('h-48')
            content7.classList.remove('grid')
            content7.classList.add('hidden')
        }
    }

    function Article8() {
        const article8 = document.getElementById('article8') as HTMLElement;
        const content8 = document.getElementById('Content8') as HTMLElement;
        if (content8.classList.contains('hidden')) {
            article8.classList.remove('h-48')
            article8.classList.add('h-auto')
            content8.classList.remove('hidden')
            content8.classList.add('grid')
        } else {
            article8.classList.remove('h-auto')
            article8.classList.add('h-48')
            content8.classList.remove('grid')
            content8.classList.add('hidden')
        }
    }

    function Article9() {
        const article9 = document.getElementById('article9') as HTMLElement;
        const content9 = document.getElementById('Content9') as HTMLElement;
        if (content9.classList.contains('hidden')) {
            article9.classList.remove('h-48')
            article9.classList.add('h-auto')
            content9.classList.remove('hidden')
            content9.classList.add('grid')
        } else {
            article9.classList.remove('h-auto')
            article9.classList.add('h-48')
            content9.classList.remove('grid')
            content9.classList.add('hidden')
        }
    }

    return (
        <section className="grid w-full h-auto place-items-center md:w-[50%]">
            <h1 className="mt-5 mb-3 text-white text-3xl font-bold">Chronology</h1>
            <article id="article1" onClick={Article1} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/DawnOfTheJedi.webp" alt="Image of Dawn Of The Jedi" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Dawn of the Jedi</h2>
                <div id="Content1" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article2" onClick={Article2} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/TheOldRepublic.webp" alt="Image of The Old Republic" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">The Old Republic</h2>
                <div id="Content2" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article3" onClick={Article3} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/TheHighRepublic.webp" alt="Image of The High Republic" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">The High Republic</h2>
                <div id="Content3" className="hidden w-full h-auto place-items-center">
                    <Card name="Star Wars: Young Jedi Adventures (Serie)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Starlight: Go Together (Short Story)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Light of the Jedi (Adult Novel)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Great Jedi Rescue (Young Reader)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: A Test of Courage (Junior Novel)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 1 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Into the Dark (Young Adult Novel)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 2 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 1 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 3 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 2 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Starlight: First Duty (Short Story)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 4 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 3 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 4 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 5 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 5 (Ongoing Comic Series)" year="232 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Starlight: Hidden Danger (Short Story)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Rising Storm (Adult Novel)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Race to Crashpoint Tower (Junior Novel)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 6 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 6 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Out of the Shadows (Young Adult Novel)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 7 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 8 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures — The Monster of Temple Peak 1 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures Free Comic Book Day 2021 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 7 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tempest Runner (Audio Drama)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 9 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                </div>
            </article>
            <article id="article4" onClick={Article4} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/FallOfTheJedi.webp" alt="Image of Fall Of The Jedi" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Fall of the Jedi</h2>
                <div id="Content4" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article5" onClick={Article5} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/ReignOfTheEmpire.webp" alt="Image of Reign Of The Empire" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Reign Of The Empire</h2>
                <div id="Content5" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article6" onClick={Article6} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/AgeOfRebellion.webp" alt="Image of Age Of Rebellion" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Age Of Rebellion</h2>
                <div id="Content6" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article7" onClick={Article7} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/TheNewRepublic.webp" alt="Image of The New Republic" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">The New Republic</h2>
                <div id="Content7" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article8" onClick={Article8} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/RiseOfTheFirstOrder.webp" alt="Image of Rise Of The First Order" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Rise Of The First Order</h2>
                <div id="Content8" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
            <article id="article9" onClick={Article9} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/NewJediOrder.webp" alt="Image of New Jedi Order" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">New Jedi Order</h2>
                <div id="Content9" className="hidden w-full h-auto justify-center">
                    <p className="my-3 text-white text-base">There is currently no content</p>
                </div>
            </article>
        </section>
    );
}
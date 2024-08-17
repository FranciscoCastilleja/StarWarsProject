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
    }, [])

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
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: New Prospects (Short Story)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Path of Deceit (Young Adult Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 1 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Quest for the Hidden City (Junior Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 2 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Convergence (Adult Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 1 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: A Different Perspective (Short Story)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic — The Blade 1 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 3 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Battle of Jedha (Audio Drama)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 4 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 2 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic — The Blade 2 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: The Unusual Suspect (Short Story)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 5 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: The Nameless Terror 1 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic — The Blade 3 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 6 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: No Such Thing as a Bad Customer (Short Story)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 3 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic — The Blade 4 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 7 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Cataclysm (Adult Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Quest for Planet X (Junior Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 8 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: The Nameless Terror 2 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: Quest of the Jedi (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Path of Vengeance (Young Adult Novel)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 4 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: The Nameless Terror 3 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 9 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: The Nameless Terror 4 (Comic Miniseries)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Edge of Balance: Precedent (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 5 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: Last Orders (Short Story)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 6 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 7 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 8 (Ongoing Comic Series)" year="382 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales of Enlightenment: Missing Pieces (Short Story)" year="377 BBY" user={user}/>
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
                    <Card name="Star Wars: The High Republic Adventures 8 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Edge of Balance, Vol. 1 (Manga Volume)" year="232 - 231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures — The Monster of Temple Peak 2 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Starlight: Past Mistakes (Short Story)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Showdown at the Fair (Young Reader)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 9 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The HigThe High Republic: Trail of Shadows 1 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 10 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures — The Monster of Temple Peak 3 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 11 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 10 (Ongoing Comic Series)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures — The Monster of Temple Peak 4 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Trail of Shadows 2 (Comic Miniseries)" year="231 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 11 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Starlight: Shadows Remain (Short Story)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 12 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Trail of Shadows 3 (Comic Miniseries)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Fallen Star (Adult Novel)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Mission to Disaster (Junior Novel)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 12 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Eye of the Storm 1 (Comic Miniseries)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 13 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: Galactic Bake-Off Spectacular (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Trail of Shadows 4 (Comic Miniseries)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Midnight Horizon (Young Adult Novel)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Battle for Starlight (Young Reader)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 14 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Trail of Shadows 5 (Comic Miniseries)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Edge of Balance, Vol. 2 (Manga Volume)" year="231 - 230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 13 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 15 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Eye of the Storm 2 (Comic Miniseries)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures Free Comic Book Day 2023 (Ongoing Comic Series)" year="230 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Shadows of Starlight 1 (Comic Miniseries)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales from the Occlusion Zone: No Big Deal (Short Story)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Shadows of Starlight 2 (Comic Miniseries)" year="230 - 229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 1 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Eye of Darkness (Adult Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 1 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Shadows of Starlight 3 (Comic Miniseries)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 2 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Shadows of Starlight 4 (Comic Miniseries)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 3 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 2 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Escape from Valo (Junior Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 3 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 4 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 5 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures: Crash Landing (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 6 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales from the Occlusion Zone: Pathogen (Short Story)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 7 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic 8 (Ongoing Comic Series)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Temptation of the Force (Adult Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: The Edge of Balance, Vol. 3 (Manga Volume)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Beware the Nameless (Junior Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tears of the Nameless (Young Adult Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Trials of the Jedi (Adult Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Into the Light (Young Adult Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: A Valiant Vow (Junior Novel)" year="229 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales from the Occlusion Zone: Friend or Foe? (Short Story)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Defy the Storm (Young Adult Novel)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic: Tales from the Occlusion Zone: Survivors (Short Story)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 4 (Ongoing Comic Series)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 5 (Ongoing Comic Series)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 6 (Ongoing Comic Series)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 7 (Ongoing Comic Series)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The High Republic Adventures 8 (Ongoing Comic Series)" year="228 BBY" user={user}/>
                    <Card name="Star Wars: The Acolyte (Serie)" year="119 BBY" user={user}/>
                </div>
            </article>
            <article id="article4" onClick={Article4} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/FallOfTheJedi.webp" alt="Image of Fall Of The Jedi" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Fall of the Jedi</h2>
                <div id="Content4" className="hidden w-full h-auto justify-center">
                    <Card name="Star Wars: Tales of the Jedi (Episode 2 & 3) (Serie)" year="44 & 42 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Jedi (Episode 1) (Serie)" year="35 - 36 BBY" user={user}/>
                    <Card name="Star Wars Queen's Peril (Young Adult Novel)" year="32 BBY" user={user}/>
                    <Card name="Star Wars: Episode I The Phantom Menace (Movie)" year="32 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Jedi (Episode 4) (Serie)" year="32 BBY" user={user}/>
                    <Card name="Star Wars Queen's Shadow (Young Adult Novel)" year="28 BBY" user={user}/>
                    <Card name="Star Wars: Episode II Attack of the Clones (Movie)" year="22 BBY" user={user}/>
                    <Card name="Star Wars Queen's Hope (Young Adult Novel)" year="22 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 16, Season 2 & Episode 16, Season 1) (Serie)" year="22 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Movie)" year="22 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 1, Season 3) (Serie)" year="22 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 3, Season 3) (Serie)" year="22 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 1 - 15, Season 1) (Serie)" year="22 - 21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 17 - 21, Season 1) (Serie)" year="22 - 21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 1 - 3, Season 2) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 17 - 19, Season 2) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 4 - 14, Season 2) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 20 - 22, Season 2) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 5 - 7, Season 3) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 2, Season 3) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 4, Season 3) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 8, Season 3) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 22, Season 1) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 9 - 11, Season 3) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 15, Season 2) (Serie)" year="21 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Empire (Episode 1) (Serie)" year="20 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 12 - 22, Season 3) (Serie)" year="20 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Season 4) (Serie)" year="20 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 2 - 13, Season 5) (Serie)" year="20 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 1, Season 5) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 14 - 20, Season 5) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Season 6) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 5 - 8, Season 7) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 1 - 4, Season 7) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Episode III Revenge of the Sith (Movie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 9 - 11, Season 7) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Jedi (Episode 5) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Clone Wars (Episode 12, Season 7) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Jedi (Episode 6) (Serie)" year="19 BBY" user={user}/>
                </div>
            </article>
            <article id="article5" onClick={Article5} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/ReignOfTheEmpire.webp" alt="Image of Reign Of The Empire" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Reign Of The Empire</h2>
                <div id="Content5" className="hidden w-full h-auto justify-center">
                    <Card name="Star Wars: The Bad Batch (Season 1) (Serie)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 1 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 2 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 3 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 4 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 5 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 6 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 7 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 8 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 9 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 10 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 11 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 12 (Comic)" year="19 BBY" user={user}/>
                    <Card name="Star Wars Thrawn Ascendancy: Chaos Rising (Novel)" year="19 BBY" user={user}/>
                    <Card name="Star Wars: The Bad Batch (Season 2 & 3) (Serie)" year="19 - 18 BBY" user={user}/>
                    <Card name="Star Wars Thrawn Ascendancy: Greater Good (Novel)" year="18 BBY" user={user}/>
                    <Card name="Star Wars Thrawn Ascendancy: Lesser Evil (Novel)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 13 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 14 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 15 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 16 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 17 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader Annual 2 (Comic)" year="18 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 18 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 19 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 20 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 21 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 22 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars Jedi: Fallen Order (Video Game)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Jedi Fallen Order - Dark Temple 1 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Jedi Fallen Order - Dark Temple 2 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Jedi Fallen Order - Dark Temple 3 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Jedi Fallen Order - Dark Temple 4 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Jedi Fallen Order - Dark Temple 5 (Comic)" year="14 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 23 (Comic)" year="12 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 24 (Comic)" year="12 BBY" user={user}/>
                    <Card name="Star Wars: Darth Vader 25 (Comic)" year="12 BBY" user={user}/>
                    <Card name="Star Wars Jedi: Battle Scars (Novel)" year="12 & 11 BBY" user={user}/>
                    <Card name="Star Wars A New Dawn (Novel)" year="11 BBY" user={user}/>
                    <Card name="Solo: A Star Wars Story (Movie)" year="13 - 10 BBY" user={user}/>
                    <Card name="Star Wars: Obi-Wan Kenobi (Serie)" year="9 BBY" user={user}/>
                    <Card name="Star Wars Jedi: Survivor (Video Game)" year="9 BBY" user={user}/>
                    <Card name="Star Wars: Andor (Serie)" year="5 BBY" user={user}/>
                    <Card name="Star Wars Rebels (Season 1) (Serie)" year="5 - 4 BBY" user={user}/>
                    <Card name="Star Wars Rebels (Season 2) (Serie)" year="4 - 3 BBY" user={user}/>
                    <Card name="Star Wars Rebels (Season 3) (Serie)" year="2 BBY" user={user}/>
                    <Card name="Star Wars Thrawn (Novel)" year="15 - 2 BBY" user={user}/>
                    <Card name="Star Wars: Tales of the Empire (Episode 2) (Serie)" year="9 & 2 BBY" user={user}/>
                    <Card name="Star Wars Thrawn: Alliances (Novel)" year="2 BBY" user={user}/>
                    <Card name="Star Wars Thrawn: Treason (Novel)" year="1 BBY" user={user}/>
                    <Card name="Star Wars Rebels (Season 4) (Serie)" year="1 BBY" user={user}/>
                    <Card name="Vader Immortal: A Star Wars VR Series (Video Game)" year="1 BBY" user={user}/>
                    <Card name="Rogue One: A Star Wars Story (Movie)" year="0 BBY" user={user}/>
                </div>
            </article>
            <article id="article6" onClick={Article6} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/AgeOfRebellion.webp" alt="Image of Age Of Rebellion" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Age Of Rebellion</h2>
                <div id="Content6" className="hidden w-full h-auto justify-center">
                    <Card name="Star Wars: Episode IV A New Hope (Movie)" year="0 BBY" user={user}/>
                    <Card name="Star Wars: Episode V The Empire Strikes Back (Movie)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 1 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 2 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 3 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 4 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 5 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 6 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 7 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 8 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 9 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 10 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 11 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 12 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 13 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 14 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 15 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 16 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 17 (2020) (Comic)" year="3 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 18 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 19 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 20 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 21 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 22 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 23 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 24 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 25 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 26 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 27 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 28 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 29 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 30 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 31 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 32 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 33 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 34 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 35 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 36 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 37 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 38 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 39 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 40 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 41 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 42 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 43 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 44 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 45 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 46 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 47 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 48 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 49 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars: Darth Vader 50 (2020) (Comic)" year="3 or 4 ABY" user={user}/>
                    <Card name="Star Wars Outlaws (Video Game)" year="3 - 4 ABY" user={user}/>
                    <Card name="Star Wars: Episode VI Return of the Jedi (Movie)" year="4 ABY" user={user}/>
                    <Card name="Star Wars: Aftermath (Novel)" year="4 ABY" user={user}/>
                    <Card name="Star Wars: Aftermath: Life Debt (Novel)" year="5 ABY" user={user}/>
                    <Card name="Star Wars: Aftermath: Empire's End (Novel)" year="5 ABY" user={user}/>
                    <Card name="Star Wars Battlefront II (Video Game)" year="- - - ABY" user={user}/>
                    <Card name="Star Wars: Squadrons (Video Game)" year="- - - ABY" user={user}/>
                </div>
            </article>
            <article id="article7" onClick={Article7} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/TheNewRepublic.webp" alt="Image of The New Republic" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">The New Republic</h2>
                <div id="Content7" className="hidden w-full h-auto justify-center">
                    <Card name="Star Wars: Tales of the Empire (Episode 6) (Serie)" year="0 & 9 ABY" user={user}/>
                    <Card name="Star Wars: Tales of the Empire (Episode 3) (Serie)" year="5 & 9 ABY" user={user}/>
                    <Card name="Star Wars: Skeleton Crew (Serie)" year="9 ABY" user={user}/>
                    <Card name="Star Wars: The Mandalorian (Season 1 & 2) (Serie)" year="9 ABY" user={user}/>
                    <Card name="Star Wars: The Book of Boba Fett (Serie)" year="9 ABY" user={user}/>
                    <Card name="Star Wars: Ahsoka (Serie)" year="9 ABY" user={user}/>
                    <Card name="Star Wars: The Mandalorian (Season 3) (Serie)" year="9 ABY" user={user}/>
                </div>
            </article>
            <article id="article8" onClick={Article8} className="grid mb-5 w-full h-48 place-items-center border-2 border-white">
                <Image width={150} height={150} src="/Media/RiseOfTheFirstOrder.webp" alt="Image of Rise Of The First Order" className="hover:scale-105" priority/>
                <h2 className="text-white text-lg font-bold">Rise Of The First Order</h2>
                <div id="Content8" className="hidden w-full h-auto justify-center">
                    <Card name="Star Wars: Tales of the Empire (Episode 4) (Serie)" year="19 ABY" user={user}/>
                    <Card name="Star Wars: Tales of the Empire (Episode 5) (Serie)" year="5 & 9 ABY" user={user}/>
                    <Card name="Star Wars: Bloodline (Novel)" year="28 ABY" user={user}/>
                    <Card name="Star Wars: The Rise of Kylo Ren 1 (Comic)" year="28 ABY" user={user}/>
                    <Card name="Star Wars: The Rise of Kylo Ren 2 (Comic)" year="28 ABY" user={user}/>
                    <Card name="Star Wars: The Rise of Kylo Ren 3 (Comic)" year="28 ABY" user={user}/>
                    <Card name="Star Wars: The Rise of Kylo Ren 4 (Comic)" year="28 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Poe Dameron 1 (Comic)" year="30 & 31 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - General Hux 1 (Comic)" year="33 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Kylo Ren 1 (Comic)" year="33 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Finn 1 (Comic)" year="33 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Rey 1 (Comic)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Rose Tico 1 (Comic)" year="26 - 34 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Supreme Leader Snoke 1 (Comic)" year="28 & 34 ABY" user={user}/>
                    <Card name="Star Wars: Age of Resistance - Captain Phasma 1 (Comic)" year="29 & 34 ABY" user={user}/>
                    <Card name="Star Wars Resistance (Season 1) (Serie)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Episode VII The Force Awakens (Movie)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Episode VIII The Last Jedi (Movie)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Allegiance 1 (Comic)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Allegiance 2 (Comic)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Allegiance 3 (Comic)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Allegiance 4 (Comic)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Resistance Reborn (Novel)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Force Collector (Novel)" year="34 ABY" user={user}/>
                    <Card name="Star Wars Resistance (Season 2) (Serie)" year="34 - 35 ABY" user={user}/>
                    <Card name="Star Wars: Spark of the Resistance (Novel)" year="34 ABY" user={user}/>
                    <Card name="Star Wars: Episode IX The Rise of Skywalker (Movie)" year="35 ABY" user={user}/>
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
"use client"

import { useEffect } from "react";

export default function Stars() {
    useEffect(() => {
        const colors = ["#fff", "#fff2", "#fff4", "#fff7", "#fffc"]

        const generateSpaceLayer = (size:string, selector:string, stars:number, duration:string) => {
            const layer = []
            const totalStar = stars
        
            for (let i = 0; i < totalStar; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)]
                const x = Math.floor(Math.random() * 100)
                const y = Math.floor(Math.random() * 100)
                layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y+100}vh 0 ${color}`)
            }
        
            const space1 = document.querySelector(selector) as HTMLElement
            space1.style.setProperty("--space-layer", layer.join(","))
            space1.style.setProperty("--size", size)
            space1.style.setProperty("--duration", duration)
        }

        generateSpaceLayer("1px", ".space-1", Math.floor(Math.random() * (300 - 100) + 100), `${Math.floor(Math.random() * (50 - 15)+15)}s`)
        generateSpaceLayer("2px", ".space-2", Math.floor(Math.random() * (300 - 100) + 100), `${Math.floor(Math.random() * (50 - 15)+15)}s`)
        generateSpaceLayer("3px", ".space-3", Math.floor(Math.random() * (300 - 100) + 100), `${Math.floor(Math.random() * (50 - 15)+15)}s`)
    }, [])

    return (
        <>
            <div className="space space-1"></div>
            <div className="space space-2"></div>
            <div className="space space-3"></div>
        </>
    );
}
import Image from "next/image";
import TikTokIcon from "../icons/TikTokIcon";
import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import XIcon from "../icons/XIcon";
import FacebookIcon from "../icons/FacebookIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function Socials() {
    return (
        <section className="w-full h-auto md:w-[50%]">
            <article className="w-full h-auto">
                <h2 className="mt-5 mb-5 w-full text-white text-center text-3xl font-bold">Follow Star Wars</h2>
                <div className="flex w-full h-auto flex-wrap justify-center items-center gap-x-5 gap-y-3">
                    <Link className="hover:scale-105" href="https://www.starwars.com/" target="_blank" rel="noopener noreferrer"><Image width={100} height={50} src="/Media/WebSiteLogo.webp" alt="Star Wars Logo (Official Website)"/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.tiktok.com/@starwars" target="_blank" rel="noopener noreferrer"><TikTokIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://x.com/starwars" target="_blank" rel="noopener noreferrer"><XIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.facebook.com/StarWars" target="_blank" rel="noopener noreferrer"><FacebookIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer"><YoutubeIcon/></Link>
                    <Link className="hover:scale-105" href="https://www.starwarskids.com/" target="_blank" rel="noopener noreferrer"><Image width={60} height={40} src="/Media/StarWarsKidsLogo.webp" alt="Star Wars Kids Logo (Official Website)"/></Link>
                </div>
                <h2 className="mt-20 mb-5 w-full text-white text-center text-3xl font-bold">Star Wars Content Creators (Spanish)</h2>
                <div className="flex w-full h-auto flex-wrap justify-center items-center gap-x-5 gap-y-3">
                    <span className="group grid relative place-items-center rounded-full">
                        <Link className="rounded-full border-2 border-transparent hover:scale-105 hover:border-[#FFFF00]" title="La Guardia del Templo" href="https://www.youtube.com/@guardiadeltemplo" target="_blank" rel="noopener noreferrer"><Image width={100} height={100} className="rounded-full" src="/Media/GuardiaTemplo.webp" alt="Picture of La Guardia del Templo"/></Link>
                        <h3 className="absolute w-44 opacity-0 -bottom-10 text-white text-center font-bold -z-10 transition-opacity duration-500 ease-linear group-hover:opacity-100">La Guardia del Templo</h3>
                    </span>
                    <span className="group grid relative place-items-center rounded-full">
                        <Link className="rounded-full border-2 border-transparent hover:scale-105 hover:border-[#FF0000]" title="La Sombra del Imperio" href="https://www.youtube.com/@LaSombradelImperio" target="_blank" rel="noopener noreferrer"><Image width={100} height={100} className="rounded-full" src="/Media/SombraImperio.webp" alt="Picture of La Sombra del Imperio"/></Link>
                        <h3 className="absolute w-44 opacity-0 -bottom-10 text-white text-center font-bold -z-10 transition-opacity duration-500 ease-linear group-hover:opacity-100">La Sombra del Imperio</h3>
                    </span>
                </div>
            </article>
        </section>
    );
}
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
            <article className="w-full h-48">
                <h2 className="mt-5 mb-5 w-full text-white text-center text-3xl font-bold">Follow Star Wars</h2>
                <div className="flex w-full h-auto flex-wrap justify-center items-center gap-x-5 gap-y-3">
                    <Link className="hover:scale-105" href="https://www.starwars.com/" target="_blank"><Image width={100} height={50} src="/Media/WebSiteLogo.webp" alt="Star Wars Logo (Official Website)"/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.tiktok.com/@starwars" target="_blank"><TikTokIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.instagram.com/starwars/" target="_blank"><InstagramIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://x.com/starwars" target="_blank"><XIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.facebook.com/StarWars" target="_blank"><FacebookIcon/></Link>
                    <Link className="text-white hover:scale-105" href="https://www.youtube.com/user/starwars" target="_blank"><YoutubeIcon/></Link>
                    <Link className="hover:scale-105" href="https://www.starwarskids.com/" target="_blank"><Image width={60} height={40} src="/Media/StarWarsKidsLogo.webp" alt="Star Wars Kids Logo (Official Website)"/></Link>
                </div>
            </article>
        </section>
    );
}
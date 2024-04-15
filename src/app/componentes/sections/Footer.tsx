import Supabase from "../icons/SupabaseIcon";
import VercelIcon from "../icons/VercelIcon";
import NextjsIcon from "../icons/NextjsIcon";

export default function Footer() {
    return (
        <footer className="grid py-3 w-full h-auto place-items-center border-t-2 border-white text-white lg:flex lg:justify-center lg:items-center lg:gap-x-5">
            <p className="my-2 text-white text-base xl:my-0">Developed for the</p>
            <Supabase/>
            <p className="my-2 text-white text-base xl:my-0">Hackathon 2024 with the</p>
            <br className="block lg:hidden"/>
            <NextjsIcon/>
            <p className="my-2 text-white text-base xl:my-0">framework and deployed in</p>
            <VercelIcon/>
        </footer>
    );
}
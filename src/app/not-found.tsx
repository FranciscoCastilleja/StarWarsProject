import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex max-h-screen h-auto justify-center">
            <section id="section-404" className="grid w-full h-full place-items-center sm:w-[50%]">
                <Image src="/Media/DeathStar.avif" width={450} height={450} alt="Picture of the DeathStar, page 404" className="my-5"/>
                <h2 className="text-white text-9xl font-bold">404</h2>
                <Link href='/' className="py-3 px-5 mt-2 mb-3 text-white text-lg bg-[#111] rounded-lg hover:bg-[#ddd] hover:text-[#111]">Go Back</Link>
            </section>
        </main>
    );
}
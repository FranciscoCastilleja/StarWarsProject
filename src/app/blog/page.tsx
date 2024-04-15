import Footer from "../componentes/sections/Footer";
import Header from "../componentes/sections/Header";

export default function Blog() {
    return (
        <main className="flex min-h-screen h-auto justify-center">
            <article className="my-3 w-[90%] h-fit border-y border-white sm:w-[50%]">
                <h2 className="my-2 text-white text-xl font-bold">Creation of the Website</h2>
                <p className="my-2 text-white text-base">This Website was created for the Supabase Hackathon 2024, and I take this opportunity to provide Star Wars fans with a clear way to view Star Wars canon content.</p>
                <p className="my-2 text-white text-base">I don't know much about Star Wars, but you can participate with a discussion and participate with other fans to clear up an error in the information.</p>
                <p className="my-2 text-white text-center text-base">Attn: Francisco Castilleja (Creator)</p>
            </article>
        </main>
    );
}
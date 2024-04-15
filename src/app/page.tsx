import Cronologia from "./componentes/sections/Cronologia";
import Footer from "./componentes/sections/Footer";
import Header from "./componentes/sections/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen h-auto flex-col justify-center items-center">
      <Cronologia/>
    </main>
  );
}

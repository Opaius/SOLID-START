import { useWindowScrollPosition } from "@solid-primitives/scroll";
import Image from "@/components/Image";
import MultiCards from "@/components/MultiCards";
export default function Home() {
  return (
    <main>
      <div class="grid auto-rows-[auto_1fr_auto]">
        <Header />
      </div>
      <div>
        <section class="">
          <div class="h-[60dvh] relative">
            <MultiCards />
          </div>
        </section>
      </div>
    </main>
  );
}
function Header() {
  const scroll = useWindowScrollPosition();
  return (
    <header
      class={`h-12 w-full fixed ${
        scroll.y > 1 ? "bg-primary fade-in-top" : "bg-transparent fade-out-top"
      } transition-all`}
    ></header>
  );
}

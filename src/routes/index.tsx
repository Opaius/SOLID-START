import { useWindowScrollPosition } from "@solid-primitives/scroll";
import "./clip-test.css";
export default function Home() {
  return (
    <main>
      <div class="grid auto-rows-[auto_1fr_auto]">
        <Header />
      </div>
      <div>
        <section class="">
          <div class="h-[60dvh] relative">
            <img
              class="absolute inset-0"
              src="https://images.pexels.com/photos/28775008/pexels-photo-28775008/free-photo-of-yellow-door-with-cigars-and-tobacco-sign-in-philadelphia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <img
              class="absolute inset-0 clip-test"
              src="https://images.pexels.com/photos/28238606/pexels-photo-28238606/free-photo-of-a-woman-in-a-white-dress-taking-a-picture-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
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

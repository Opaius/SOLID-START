import FancyImageSlider from "@/components/FancyImageSlider";
import { Button } from "@/components/ui/button";
import { TbCalendarStar, TbTableDown } from "solid-icons/tb";

export default function Home() {
  return (
    <main>
      <div class="grid auto-rows-[auto_1fr_auto]">
        <Header />
      </div>
      <div>
        <section class="">
          <div class="h-screen relative overflow-hidden">
            <FancyImageSlider />
            <div class="inset-0 absolute w-full h-full bg-orange-950 opacity-30" />
          </div>
        </section>
      </div>
    </main>
  );
}
function Header() {
  return (
    <header class="w-full z-20 absolute inset-0 backdrop-blur-sm grid grid-rows-2 max-h-max">
      <div class="border-b-[1px] h-[4rem] grid grid-cols-3 place-items-center text-background *:font-normal *:text-center">
        <Button variant={"ghost"}>
          <TbTableDown size={13} class="mr-2" />
          Meniu
        </Button>
        <img
          src="https://i.imghippo.com/files/bspc21728498209.webp"
          class="w-10 h-10"
        ></img>
        <Button variant={"ghost"}>
          Rezervare
          <TbCalendarStar class="ml-2" size={13} />
        </Button>
      </div>
      <div class="flex justify-around h-min text-background *:font-light border-b-[1px] py-2">
        <Button variant={"ghost"} size={"sm"}>
          Oferte
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Wellness
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Camere
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Contact
        </Button>
      </div>
    </header>
  );
}

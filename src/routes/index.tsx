import FancyImageSlider from "@/components/FancyImageSlider";
import FancyTextEntry from "@/components/FancyTextEntry";
import FancyWavyDiv from "@/components/FancyWavyDiv";
import { Button } from "@/components/ui/button";
import { TbCalendarStar, TbTableDown } from "solid-icons/tb";

export default function Home() {
  return (
    <main>
      <div class="grid auto-rows-[1fr_auto]">
        <div>
          <section>
            <Header />
            <div class="overflow-hidden relative h-screen">
              <FancyImageSlider />
              <div class="absolute inset-0 w-full h-full opacity-30 bg-orange-950" />
              <FancyTextEntry />
            </div>
          </section>
          <section class="p-5 h-screen">
            <FancyWavyDiv>
              <div class="w-full h-full bg-primary"></div>
            </FancyWavyDiv>
          </section>
        </div>
      </div>
    </main>
  );
}
function Header() {
  return (
    <header
      class="grid absolute inset-0 z-20 grid-rows-2 w-full backdrop-blur-sm max-h-max slide-in-top"
      style={{ "animation-delay": "2s" }}
    >
      <div class="border-b-[1px] h-[4rem] grid grid-cols-3 place-items-center text-background *:font-normal *:text-center px-2">
        <Button variant={"ghost"} class="">
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

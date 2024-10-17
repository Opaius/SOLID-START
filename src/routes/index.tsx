import FancyImageSlider from "@/components/FancyImageSlider";
import FancyTextEntry from "@/components/FancyTextEntry";
import FancyWavyDiv from "@/components/FancyWavyDiv";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { TbCalendarStar, TbTableDown } from "solid-icons/tb";

const imagesFirstSection = [
  "https://i.imghippo.com/files/jrkss1728492838.webp",
  "https://i.imghippo.com/files/WZBVv1728492826.webp",
  "https://i.imghippo.com/files/E1xv61728537028.webp",
];
const imagesSecondSection = [
  "https://i.imghippo.com/files/11hJ61728997250.webp",
  "https://i.imghippo.com/files/q7Iqs1728997282.webp",
];
export default function Home() {
  return (
    <main>
      <div class="grid auto-rows-[1fr_auto]">
        <div>
          <section class="sticky inset-0">
            <Header />
            <div class="overflow-hidden relative h-screen">
              <FancyImageSlider images={imagesFirstSection} />
              <div class="absolute inset-0 w-full h-full opacity-30 bg-orange-950" />
              <FancyTextEntry />
            </div>
          </section>
          <section class="h-screen">
            <div class="relative p-5 w-full h-full bg-background">
              <FancyWavyDiv>
                <FancyImageSlider images={imagesSecondSection} />
              </FancyWavyDiv>
              <div class="flex absolute top-1/2 left-1/2 flex-col justify-between p-7 text-center shadow-md -translate-x-1/2 -translate-y-1/2 text-background bg-primary">
                <span class="mb-5 font-semibold text-md">
                  Spa pentru sănătatea ta
                </span>
                <div class="flex flex-col gap-3 text-sm *:before:mr-1 *:after:ml-1 *:before:content-['-'] *:after:content-['-']">
                  <span>Salină</span>
                  <span>Saună</span>
                  <span>Piscină</span>
                  <span>Ciubăr cu apă sărată</span>
                </div>
              </div>
            </div>
          </section>
          <section class="grid relative auto-rows-[40%_60%] *:h-full *:w-full *:object-cover *:object center h-screen bg-primary">
            <img
              class="p-5 pb-5 bg-background"
              src="https://i.imghippo.com/files/FMgnP1729175369.webp"
            />
            <img
              class="p-5"
              src="https://i.imghippo.com/files/cYGc51729175313.jpg"
            />
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

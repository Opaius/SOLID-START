import FancyCards from "@/components/FancyCards";
import FancyImageSlider from "@/components/FancyImageSlider";
import { FancyMenu } from "@/components/FancyMenu";
import FancyMovingImage from "@/components/FancyMovingImage";
import FancyTextEntry from "@/components/FancyTextEntry";
import FancyVideoPlayer from "@/components/FancyVideoPlayer";
import FancyWavyDiv from "@/components/FancyWavyDiv";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { snapToSections } from "@/lib/snapToSections";
import useScrollPosition from "@/lib/useScrollPosition";
import { TbCalendarStar, TbTableDown } from "solid-icons/tb";
import { createEffect, createSignal, onCleanup } from "solid-js";
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
  snapToSections();
  return (
    <main class="">
      <section data-index="0" class="relative section">
        <Header />
        <div class="overflow-hidden relative h-d-screen">
          <FancyImageSlider images={imagesFirstSection} />
          <div class="absolute inset-0 w-full h-full opacity-30 bg-orange-950" />
          <FancyTextEntry />
        </div>
      </section>
      <CardCraciun />
      <CardRevelion />
      <section data-index="3" class="section h-d-screen">
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
    </main>
  );
}
function Header() {
  return (
    <header
      class="grid absolute inset-0 z-20 grid-rows-2 w-full backdrop-blur-sm max-h-max slide-in-top"
      style={{ "animation-delay": "2s" }}
    >
      <FancyMenu />
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
function CardCraciun() {
  let ref: HTMLDivElement | undefined;
  const scroll = useScrollPosition(() => ref);
  function getScroll(): number {
    if (scroll() > 100) return 100;
    if (scroll() < -100) return -100;
    return scroll();
  }

  return (
    <section
      data-index="1"
      class="grid section relative auto-rows-[40%_60%] h-d-screen bg-primary"
    >
      <FancyMovingImage
        scroll={scroll()}
        src="https://i.imghippo.com/files/cYGc51729175313.jpg"
        class="bg-background"
      />
      <FancyVideoPlayer
        src="https://raw.githubusercontent.com/Opaius/5stardesk_perla_brazilor/main/IMG_1859.mp4
"
      />
      <div
        ref={ref}
        class="grid auto-rows-[40%_60%] overflow-hidden w-full h-full absolute inset-0"
      >
        <div class="flex flex-col items-center text-background">
          <span
            style={{
              transition: "1s ease-in-out",
              top: `${getScroll() + 100}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative text-2xl font-light rounded-md backdrop-blur-sm"
          >
            Ofertă Crăciun 2024
          </span>
          <span
            style={{
              "transition-delay": "1s",
              transition: "all 1.5s ease-in-out",
              top: `${getScroll() + 130}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative p-2 text-sm font-semibold rounded-md bg-primary"
          >
            De la 2600 lei / persoană
          </span>
        </div>
        <div class="flex flex-col justify-end items-center text-background">
          <span
            style={{
              transition: "1.25s ease-in-out",
              bottom: `${getScroll() + 100}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class={`relative mx-10 text-sm font-light text-center rounded-md backdrop-blur-sm`}
          >
            Sărbătorește tradiția Crăciunului din Bucovina împreună cu familia
            ta. Mâncare, băutură, activități tradiționale, tot ce ai nevoie
            pentru voie bună.
          </span>
          <Button
            style={{
              transition: "1.75s ease-in-out",
              bottom: `${getScroll() + 60}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative"
          >
            Vezi Mai Multe
          </Button>
        </div>
      </div>
    </section>
  );
}
function CardRevelion() {
  let ref: HTMLDivElement | undefined;
  const scroll = useScrollPosition(() => ref);
  function getScroll(): number {
    if (scroll() > 100) return 100;
    if (scroll() < -100) return -100;
    return scroll();
  }
  return (
    <section
      data-index="2"
      class="grid scroll section relative auto-rows-[40%_60%] h-d-screen bg-primary"
    >
      <FancyMovingImage
        scroll={scroll()}
        src="https://i.imghippo.com/files/FMgnP1729175369.webp"
        class="bg-background"
      />
      <FancyVideoPlayer
        src="https://raw.githubusercontent.com/Opaius/5stardesk_perla_brazilor/main/VID-20240705-WA0024.mp4

"
      />
      <div
        ref={ref}
        class="grid auto-rows-[40%_60%] overflow-hidden w-full h-full absolute inset-0"
      >
        <div class="flex flex-col items-center text-background">
          <span
            style={{
              transition: "1s ease-in-out",
              top: `${getScroll() + 100}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative text-2xl font-light rounded-md backdrop-blur-sm"
          >
            Ofertă Revelion 2024-2025
          </span>
          <span
            style={{
              "transition-delay": "1s",
              transition: "all 1.5s ease-in-out",
              top: `${getScroll() + 130}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative p-2 text-sm font-semibold rounded-md bg-primary"
          >
            De la 3000 lei / persoană
          </span>
        </div>
        <div class="flex flex-col justify-end items-center text-background">
          <span
            style={{
              transition: "1.25s ease-in-out",
              bottom: `${getScroll() + 100}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class={`relative mx-10 text-sm font-light text-center rounded-md backdrop-blur-sm`}
          >
            Petrece venirea anului nou împreună cu cei dragi. Bucovina te
            așteaptă cu tradiții, bucate și voie bună.
          </span>
          <Button
            style={{
              transition: "1.75s ease-in-out",
              bottom: `${getScroll() + 60}px`,
              opacity: `${getScroll() == 100 || getScroll() == -100 ? 0 : 1}`,
            }}
            class="relative"
          >
            Vezi Mai Multe
          </Button>
        </div>
      </div>
    </section>
  );
}

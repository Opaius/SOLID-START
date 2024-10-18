import useScrollPosition from "@/lib/useScrollPosition";
import { Button } from "./ui/button";

export default function FancyCardEntry() {
  let ref: HTMLDivElement | undefined;
  const scroll = useScrollPosition(() => ref);
  function getScroll(): number {
    if (scroll() > 100) return 100;
    if (scroll() < -100) return -100;
    return scroll();
  }
  return (
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
          Sărbătorește tradiția Crăciunului din Bucovina împreună cu familia ta.
          Mâncare, băutură, activități tradiționale, tot ce ai nevoie pentru
          voie bună.
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
  );
}

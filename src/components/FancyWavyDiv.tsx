import useScrollPosition from "@/lib/useScrollPosition";
import { createEffect, createSignal } from "solid-js";

export default function FancyWavyDiv(props: { children: any }) {
  let wavy: HTMLDivElement | undefined;
  const scroll = useScrollPosition(() => wavy);
  function getScroll(): number {
    const relScroll = scroll() / 10;
    if (relScroll > 30) return 30;
    if (relScroll < -30) return -30;
    return relScroll;
  }

  return (
    <div
      ref={wavy}
      class="w-full h-full"
      style={{
        transform: `rotate3d(${getScroll() / 30},${
          getScroll() / 30
        },0,${getScroll()}deg)`,
        transition: "1s ease-in-out",
        "transition-delay": "100ms",
      }}
    >
      {props.children}
    </div>
  );
}

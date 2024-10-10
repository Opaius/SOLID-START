import { createScrollPosition } from "@solid-primitives/scroll";
import { onMount } from "solid-js";
export default function FancyWavyDiv(props: { children: any }) {
  let wavy: HTMLDivElement | undefined;
  onMount(() => {
    const scroll = createScrollPosition(wavy!);
  });
  return (
    <div ref={wavy} class="w-full h-full">
      {scroll()}
      {props.children}
    </div>
  );
}

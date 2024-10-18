import { createSignal, onCleanup, onMount } from "solid-js";

function useScrollPosition(ref: () => HTMLElement | undefined) {
  const [scrollPos, setScrollPos] = createSignal(0);

  const handleScroll = () => {
    const element = ref();
    if (element) {
      const rect = element.getBoundingClientRect();
      setScrollPos(rect.top); // Distance from top of viewport
    }
  };

  onMount(() => {
    const scrollElm = document.querySelector(".main-scroll-element");
    scrollElm?.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize the position

    onCleanup(() => {
      scrollElm?.removeEventListener("scroll", handleScroll);
    });
  });

  return scrollPos;
}

export default useScrollPosition;

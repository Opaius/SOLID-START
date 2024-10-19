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
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize the position

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return scrollPos;
}

export default useScrollPosition;

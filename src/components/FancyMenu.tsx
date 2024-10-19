import { createSignal } from "solid-js";
import { Button } from "./ui/button";

function FancyMenu() {
  const [isVisible, setIsVisible] = createSignal(false);
  function toggleMenu() {
    setIsVisible((prev) => !prev);
  }
  function Menu() {
    return (
      <div
        class={`
           ${isVisible() ? "fixed" : "hidden"}
           h-d-screen w-d-screen bg-primary inset-0 z-[100]`}
      >
        asd asdasd
      </div>
    );
  }
  return { Menu, toggleMenu };
}
export { FancyMenu };

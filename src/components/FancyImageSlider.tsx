import { createSignal, onCleanup, onMount } from "solid-js";
import "./slider.css";
const images = [
  "https://i.imghippo.com/files/jrkss1728492838.webp",
  "https://i.imghippo.com/files/WZBVv1728492826.webp",
  "https://i.imghippo.com/files/E1xv61728537028.webp",
];
export default function FancyImageSlider() {
  let timer: any;
  const [isVisible, setIsVisible] = createSignal(false);
  const [currentIndex, setIndex] = createSignal<number>(0);
  function triggerAnimation(index: number) {
    const nextIndex =
      currentIndex() - 1 < 0 ? refs.length - 1 : currentIndex() - 1;
    const currentElement = refs[index].classList;
    const nextElement = refs[nextIndex].classList;

    currentElement.remove("moveInLeft");
    currentElement.remove("moveInRight");
    currentElement.toggle("cropHidden");
    currentElement.toggle(
      (index + 1) % 2 == 1 ? "cropOutLeft" : "cropOutRight"
    );
    nextElement.toggle((index + 1) % 2 == 1 ? "moveInLeft" : "moveInRight");

    nextElement.remove("cropHidden");
    nextElement.remove("cropOutLeft");
    nextElement.remove("cropOutRight");
  }
  // This function will be triggered every 3 seconds
  const triggerAction = () => {
    triggerAnimation(currentIndex());
    setIndex((prev) => {
      if (prev - 1 < 0) return refs.length - 1;
      return prev - 1;
    });
  };

  // Setting up the Intersection Observer to track if the component is in view
  let observer: IntersectionObserver;
  let componentRef: HTMLDivElement | undefined;

  onMount(() => {
    setIndex(refs.length - 1);
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        startTrigger();
      } else {
        setIsVisible(false);
        stopTrigger();
      }
    });

    if (componentRef) {
      observer.observe(componentRef);
    }

    onCleanup(() => {
      stopTrigger(); // Ensure interval is cleared if the component unmounts
      observer.disconnect();
    });
  });

  const startTrigger = () => {
    // Trigger the function every 3 seconds
    if (!timer) {
      timer = setInterval(() => {
        triggerAction();
      }, 4000);
    }
  };

  const stopTrigger = () => {
    // Stop the interval
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  const refs: HTMLImageElement[] = [];

  return (
    <div ref={componentRef} class="w-full h-full sticky">
      {images.map((src, index) => {
        return (
          <img
            class={`absolute inset-0 h-full w-full object-cover object-center`}
            ref={(el) => (refs[index] = el)}
            src={src}
          ></img>
        );
      })}
    </div>
  );
}

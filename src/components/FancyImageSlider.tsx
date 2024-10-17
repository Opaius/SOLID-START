import { createSignal, onCleanup, onMount } from "solid-js";
import "./slider.css";

export default function FancyImageSlider(props: {
  images: string[];
  class?: string;
}) {
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
    <div
      ref={componentRef}
      class={`overflow-hidden sticky w-full h-full ${props.class}`}
    >
      {props.images.map((src, index) => {
        return (
          <img
            class={`object-cover object-center absolute inset-0 w-full h-full`}
            ref={(el) => (refs[index] = el)}
            src={src}
          ></img>
        );
      })}
    </div>
  );
}

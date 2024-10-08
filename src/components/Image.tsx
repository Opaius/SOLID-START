import { createSignal, onMount, Ref } from "solid-js";
import Loader from "./Loader";

export default function Image(props: {
  src: string;
  alt: string;
  class?: string;
}) {
  let imgRef: HTMLImageElement | undefined;
  const [isImageRendered, setIsImageRendered] = createSignal(false);

  onMount(() => {
    if (imgRef && imgRef.complete) {
      setIsImageRendered(true);
    } else {
      imgRef?.addEventListener("load", () => setIsImageRendered(true));
    }
  });

  return (
    <div class={`relative h-full w-full`}>
      <img
        ref={imgRef}
        src={props.src}
        alt={props.alt}
        class={`${props.class} z-10 ${
          isImageRendered() && "fade-in-fwd"
        } opacity-0 `}
      />
      <Loader class={`scale-50 !-z-10 ${isImageRendered() && "!hidden"}`} />
    </div>
  );
}

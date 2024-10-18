import { TbMusic, TbMusicOff } from "solid-icons/tb";
import { createSignal } from "solid-js";
import { Button } from "./ui/button";

export default function FancyVideoPlayer(props: { src: string }) {
  const [isMute, setMute] = createSignal(true);
  let videoRef: HTMLVideoElement | undefined;
  return (
    <div class="relative w-full h-full">
      <video
        ref={videoRef}
        class="object-cover p-5 w-full h-full"
        autoplay
        muted={isMute()}
        loop
      >
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Button
        variant={"ghost"}
        class="absolute top-10 left-1/2 z-30 -translate-x-1/2 hover:bg-primary text-background hover:text-background"
        onclick={() => {
          setMute((prev) => !prev);
        }}
      >
        <TbMusicOff class={`${!isMute() && "hidden"} `} size={30} />
        <TbMusic class={`${isMute() && "hidden"} `} size={30} />
      </Button>
    </div>
  );
}

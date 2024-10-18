export default function FancyMovingImage(props: {
  scroll: number;
  src: string;
  class?: string;
}) {
  return (
    <div class={`p-5 ` + props.class}>
      <div class="flex overflow-hidden relative flex-col justify-center items-center w-full h-full">
        <img
          style={{
            transform: `translateY(${props.scroll / 20}px)`,
            transition: "500ms ease-in-out",
          }}
          class="absolute"
          src={props.src}
        />
      </div>
    </div>
  );
}

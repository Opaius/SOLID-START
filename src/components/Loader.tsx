import "./loader.css";
export default function Loader(props: { class?: string }) {
  return (
    <div
      class={`${props.class} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loader`}
    ></div>
  );
}

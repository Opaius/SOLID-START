import "./entry.css";
export default function FancyTextEntry() {
  const text = "Pensiunea Perla Brazilor".split("");
  let firstInfo: HTMLDivElement | undefined;
  return (
    <div class="h-full w-full flex flex-col absolute inset-0 items-center justify-center gap-10">
      <div ref={firstInfo} class="text-background font-light opacity-0">
        Tradiție - Relaxare
      </div>
      <div class="z-10 flex">
        {text.map((char, index) => {
          if (char == " ") return undefined;
          return (
            <div
              onAnimationEnd={() => {
                if (index == text.length - 1) {
                  firstInfo?.classList.add("slide-in-right");
                }
                return;
              }}
              class={`${
                isUppercase(char) && "ml-1"
              } text-background text-2xl slide-in-right }`}
              style={{ "animation-delay": `${index * 100}ms` }}
            >
              {char}
            </div>
          );
        })}
      </div>
    </div>
  );
}
function isUppercase(char: string): boolean {
  return char == char.toUpperCase() && char != char.toLowerCase();
}

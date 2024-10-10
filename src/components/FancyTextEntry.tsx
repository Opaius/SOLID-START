import "./entry.css";
export default function FancyTextEntry() {
  const text = "Pensiunea Perla Brazilor".split("");
  let firstInfo: HTMLDivElement | undefined;
  let secondInfo: HTMLDivElement | undefined;
  return (
    <div class="flex absolute inset-0 flex-col gap-10 justify-center items-center w-full h-full">
      <div
        style={{ "animation-duration": "1s" }}
        ref={firstInfo}
        class="font-light opacity-0 text-background"
      >
        Tradiție - Relaxare
      </div>
      <div class="flex z-10">
        {text.map((char, index) => {
          if (char == " ") return undefined;
          return (
            <div
              onAnimationEnd={() => {
                if (index == text.length - 1) {
                  firstInfo?.classList.add("slide-in-right");
                  secondInfo?.classList.add("slide-in-right");
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
      <div
        ref={secondInfo}
        style={{ "animation-delay": "400ms", "animation-duration": "1s" }}
        class="font-light opacity-0 text-background"
      >
        Vino în Bucovina
      </div>
    </div>
  );
}
function isUppercase(char: string): boolean {
  return char == char.toUpperCase() && char != char.toLowerCase();
}

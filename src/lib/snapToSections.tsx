import { createSignal, onCleanup, onMount, createEffect } from "solid-js";

export function snapToSections() {
  const [currentSection, setCurrentSection] = createSignal(0);

  let sections: NodeListOf<HTMLDivElement>;

  const createObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = Number(entry.target.getAttribute("data-index"));

          // Check if the section is more than 50% visible
          if (entry.intersectionRatio > 0.5) {
            setCurrentSection(sectionIndex);
          }
        });
      },
      {
        threshold: Array.from(Array(101).keys(), (n) => n / 100), // Detect from 0% to 100%
      }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    onCleanup(() => {
      sections.forEach((section) => observer.unobserve(section));
    });
  };

  const scrollToSection = (index: number) => {
    const section = sections[index];
    section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // Automatically scroll to the section whenever currentSection changes
  onMount(() => {
    sections = document.querySelectorAll(
      "section"
    ) as NodeListOf<HTMLDivElement>;
    createObserver();

    createEffect(() => {
      window.addEventListener("scrollend", () => {
        scrollToSection(currentSection());
      });
    });
  });
}

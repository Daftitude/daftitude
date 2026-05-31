import { useCallback, useState } from "react";

import {
  AskDaftFrontDoor,
  AskDaftHero,
} from "../../components/askdaft";

import { FloatingPageTools } from "../../components/home";

export default function AskDaft() {
  const [readingImpairmentMode, setReadingImpairmentMode] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className={`phase-page askdaft-page ${readingImpairmentMode ? "" : "reading-impairment-mode"}`}>
      <AskDaftHero />

      <AskDaftFrontDoor />

      <FloatingPageTools
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
        advancedHref="/askdaft/request?intent=not-sure&mode=advanced"
        basicHref="/askdaft/request?intent=not-sure&mode=simple"
      />
    </main>
  );
}

import {
  AskDaftFrontDoor,
  AskDaftHero,
} from "../../components/askdaft";

export default function AskDaft({ viewMode = "basic" }) {
  const requestMode = viewMode === "advanced" ? "advanced" : "basic";

  return (
    <main className={`phase-page askdaft-page askdaft-page--${requestMode}`}>
      <AskDaftHero />

      <AskDaftFrontDoor mode={requestMode} />
    </main>
  );
}

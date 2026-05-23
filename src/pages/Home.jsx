import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FinalStartSection, FloatingReadingTools, HomeHero, HubSelectSection, IdentitySplitSection, ModeCTASection, PricingSection, QuickContactCTA, StoryStepsSection, SystemMapSection } from "../components/home";
import { askDaftMonthlyRows, askDaftQuickRows, businessMonthlyRows, businessPricingRows } from "../components/home/pricingData";
import { daftitudeSystems, heroMessages, hubCards, modeCtas } from "../components/home/homeData";
import daftitudeBusinessHero from "../images/hero/daftitude-business-blue-object.png";
import askDaftHero from "../images/hero/askdaft-residential-green-object.png";
import daftitudeCenterHero from "../images/hero/daftitude-center-object.png";

import { storyboards } from "../components/home/storyData";




export default function Home() {
  const [activePath, setActivePath] = useState("default");
  const [storyMode, setStoryMode] = useState("daftitude");
  const [lockedStoryMode, setLockedStoryMode] = useState("daftitude");
  const [subscriptionBilling, setSubscriptionBilling] = useState("oneTime");
  const [pricingAudience, setPricingAudience] = useState("business");
  const [systemResourceView, setSystemResourceView] = useState("businessResources");
  const [readingImpairmentMode, setReadingImpairmentMode] = useState(false);
  const heroSectionRef = useRef(null);
  const heroPointerFrameRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const particleTarget = document.getElementById("particles-js");
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
    const narrowScreen = window.matchMedia?.("(max-width: 760px)")?.matches;

    if (!particleTarget || reducedMotion || coarsePointer || narrowScreen) {
      if (particleTarget) particleTarget.innerHTML = "";
      return undefined;
    }

    let attempts = 0;
    let cancelled = false;
    let retryTimer;

    const bootParticles = () => {
      if (cancelled) return;

      const particlesReady = window.particlesJS;

      if (particlesReady) {
        window.particlesJS.load("particles-js", "/particles-config.json");
        return;
      }

      attempts += 1;

      if (attempts < 20) {
        retryTimer = window.setTimeout(bootParticles, 150);
      }
    };

    const bootWhenIdle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 250));
    const idleId = bootWhenIdle(bootParticles);

    return () => {
      cancelled = true;

      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }

      if (window.cancelIdleCallback && typeof idleId === "number") {
        window.cancelIdleCallback(idleId);
      }

      particleTarget.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    return () => {
      if (heroPointerFrameRef.current) {
        window.cancelAnimationFrame(heroPointerFrameRef.current);
      }
    };
  }, []);

  const activeMessage = useMemo(() => {
    return heroMessages[activePath] || heroMessages.default;
  }, [activePath]);

  const selectedStory = storyboards[storyMode] || storyboards.daftitude;
  const selectedCta = modeCtas[storyMode] || modeCtas.daftitude;
  const selectedSystems = ["toolbox", "diy"].includes(systemResourceView)
    ? daftitudeSystems.askdaft
    : daftitudeSystems.daftitude;

  const isBusinessPricing = pricingAudience === "business";
  const isOneTimePricing = subscriptionBilling === "oneTime";

  const pricingRows = useMemo(() => {
    if (isBusinessPricing) {
      return isOneTimePricing ? businessPricingRows : businessMonthlyRows;
    }

    if (isOneTimePricing) {
      return askDaftQuickRows.map((row) => ({
        tier: row.tier,
        bestFor: row.label,
        includes: row.description,
        price: row.price,
      }));
    }

    return askDaftMonthlyRows;
  }, [isBusinessPricing, isOneTimePricing]);

  const pricingHeader = useMemo(() => {
    if (isBusinessPricing) {
      return isOneTimePricing ? "Business Solutions — One-Time" : "Business Solutions — Monthly";
    }

    return isOneTimePricing ? "Tech Help — One-Time" : "Tech Help — Monthly";
  }, [isBusinessPricing, isOneTimePricing]);

  const buildPricingActionLink = useCallback((row, action) => {
    const serviceName = row.service || row.tier;
    const audience = pricingAudience === "business" ? "business" : "askdaft";
    const pricingType = subscriptionBilling === "oneTime" ? "one-time" : "monthly";
    const target = action === "book" ? "availability" : "checkout";

    const params = new URLSearchParams({
      service: serviceName,
      audience,
      type: pricingType,
      action,
    });

    return `/askdaft?${params.toString()}#${target}`;
  }, [pricingAudience, subscriptionBilling]);

  const previewStoryMode = useCallback((mode) => {
    setActivePath(mode);
    setStoryMode(mode);
  }, []);

  const selectStoryMode = useCallback((mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
    setSubscriptionBilling("oneTime");
    setSystemResourceView(mode === "askdaft" ? "toolbox" : "businessResources");

    window.requestAnimationFrame(() => {
      document
        .getElementById("average-pricing")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const selectServiceLane = useCallback((mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
    setSubscriptionBilling("oneTime");
    setSystemResourceView(mode === "askdaft" ? "toolbox" : "businessResources");
  }, []);

  const previewServiceLane = useCallback((mode) => {
    setActivePath(mode);
    setStoryMode(mode);
    setLockedStoryMode(mode);
    setPricingAudience(mode === "askdaft" ? "askdaft" : "business");
  }, []);

  const scrollToAveragePricing = useCallback(() => {
    document
      .getElementById("average-pricing")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const resetStoryPreview = useCallback(() => {
    if (heroPointerFrameRef.current) {
      window.cancelAnimationFrame(heroPointerFrameRef.current);
      heroPointerFrameRef.current = null;
    }

    setActivePath(lockedStoryMode);
    setStoryMode(lockedStoryMode);
  }, [lockedStoryMode]);

  const handleHeroPointerMove = useCallback((event) => {
    if (event.pointerType !== "mouse" || !heroSectionRef.current) return;

    const clientX = event.clientX;

    if (heroPointerFrameRef.current) {
      window.cancelAnimationFrame(heroPointerFrameRef.current);
    }

    heroPointerFrameRef.current = window.requestAnimationFrame(() => {
      if (!heroSectionRef.current) return;

      const bounds = heroSectionRef.current.getBoundingClientRect();
      const pointerX = clientX - bounds.left;
      const nextPath = pointerX < bounds.width / 2 ? "daftitude" : "askdaft";

      if (nextPath !== activePath) {
        previewStoryMode(nextPath);
      }
    });
  }, [activePath, previewStoryMode]);

  return (
    <main className={`home-game-page ${readingImpairmentMode ? "" : "reading-impairment-mode"}`}>
      <div id="particles-js" className="home-particles" aria-hidden="true" />

      <HomeHero
        activePath={activePath}
        storyMode={storyMode}
        activeMessage={activeMessage}
        heroSectionRef={heroSectionRef}
        handleHeroPointerMove={handleHeroPointerMove}
        resetStoryPreview={resetStoryPreview}
        previewStoryMode={previewStoryMode}
        selectStoryMode={selectStoryMode}
        daftitudeBusinessHero={daftitudeBusinessHero}
        askDaftHero={askDaftHero}
        daftitudeCenterHero={daftitudeCenterHero}
      />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <ModeCTASection
        storyMode={storyMode}
        selectedCta={selectedCta}
        previewServiceLane={previewServiceLane}
        selectStoryMode={selectStoryMode}
        scrollToAveragePricing={scrollToAveragePricing}
      />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <PricingSection
        isBusinessPricing={isBusinessPricing}
        isOneTimePricing={isOneTimePricing}
        pricingAudience={pricingAudience}
        setPricingAudience={setPricingAudience}
        subscriptionBilling={subscriptionBilling}
        setSubscriptionBilling={setSubscriptionBilling}
        pricingHeader={pricingHeader}
        pricingRows={pricingRows}
        buildPricingActionLink={buildPricingActionLink}
      />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <QuickContactCTA />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <StoryStepsSection
        selectedStory={selectedStory}
        storyMode={storyMode}
        previewServiceLane={previewServiceLane}
        selectServiceLane={selectServiceLane}
      />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <SystemMapSection
        storyMode={storyMode}
        systemResourceView={systemResourceView}
        setSystemResourceView={setSystemResourceView}
        selectServiceLane={selectServiceLane}
        selectedSystems={selectedSystems}
      />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <IdentitySplitSection />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <HubSelectSection hubCards={hubCards} />

      <div className="section-flow-arrow" aria-hidden="true">
        <span>↓</span>
      </div>

      <FinalStartSection />

      <FloatingReadingTools
        readingImpairmentMode={readingImpairmentMode}
        setReadingImpairmentMode={setReadingImpairmentMode}
        scrollToTop={scrollToTop}
      />
    </main>
  );
}
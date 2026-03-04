import { useEffect, useMemo, useState } from "react";

import Hero from "../components/Hero";
import AboutSection from "../components/about/AboutSection";
import ServicesSection from "../components/services/ServicesSection";
import ServicePackages from "../components/services/ServicePackages";
import ContactCTA from "../components/contact/ContactCTA";
import CommunityImpact from "../components/CommunityImpact";
import CaseStudies from "../components/techhub/CaseStudies";
import daftLogo from "../images/logos/daftitude-logo.png";

const TASK_TYPE_STORAGE_KEY = "daftitude:taskType";

function normalizeTaskType(value) {
  return value === "advanced" ? "advanced" : "basic";
}

function getInitialTaskType() {
  // URL wins, then localStorage, else basic
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl =
      params.get("taskType") || params.get("mode") || params.get("experience");
    if (fromUrl) return normalizeTaskType(String(fromUrl).toLowerCase());
  } catch {
    // ignore
  }

  try {
    const fromStorage = window.localStorage.getItem(TASK_TYPE_STORAGE_KEY);
    if (fromStorage) return normalizeTaskType(String(fromStorage).toLowerCase());
  } catch {
    // ignore
  }

  return "basic";
}

export default function Home() {
  const [taskType, setTaskType] = useState(() => getInitialTaskType());

  useEffect(() => {
    try {
      window.localStorage.setItem(TASK_TYPE_STORAGE_KEY, taskType);
    } catch {
      // ignore
    }
  }, [taskType]);

  const isAdvanced = useMemo(() => taskType === "advanced", [taskType]);

  return (
    <>
      <Hero
        logo={daftLogo}
        taskType={taskType}
        onTaskTypeChange={setTaskType}
      />

      <ServicesSection taskType={taskType} />
      <ServicePackages taskType={taskType} />

      <ContactCTA taskType={taskType} />
      {/* Optional: you can later filter these too */}
      {!isAdvanced ? null : <CaseStudies />}
      <AboutSection />
      <CommunityImpact />
      <ContactCTA taskType={taskType} />
    </>
  );
}
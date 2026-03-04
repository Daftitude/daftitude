// src/pages/Services.jsx
import React, { useEffect, useState } from "react";

import ServicesHero from "../../components/services/ServicesHero";
import ServicesSection from "../../components/services/ServicesSection";
import ServicePackages from "../../components/services/ServicePackages";

export default function Services() {
  const [taskType, setTaskType] = useState("basic"); // "basic" | "advanced"

  // load persisted mode (if present)
  useEffect(() => {
    const saved = localStorage.getItem("daft_mode");
    if (saved === "basic" || saved === "advanced") setTaskType(saved);
  }, []);

  // persist mode + optional html hook for future theming
  useEffect(() => {
    localStorage.setItem("daft_mode", taskType);
    document.documentElement.setAttribute("data-daft-mode", taskType);
  }, [taskType]);

  return (
    <>
      <ServicesHero taskType={taskType} onTaskTypeChange={setTaskType} />

      {/* Mode-aware services grid */}
      <ServicesSection taskType={taskType} />

      {/* Mode-aware pricing/packages */}
      <ServicePackages taskType={taskType} />

      {/* Keep your existing ContactCTA component/page section if you have one.
          I’m not injecting boilerplate contact blocks here. */}
    </>
  );
}
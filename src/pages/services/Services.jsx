// src/pages/Services.jsx
import React, { useEffect, useState } from "react";

import ServicesHero from "../../components/services/ServicesHero";
import ServicesSection from "../../components/services/ServicesSection";
import ServicePackages from "../../components/services/ServicePackages";

export default function Services() {
  const [taskType, setTaskType] = useState("basic");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("daft_mode");
    if (saved === "basic" || saved === "advanced") {
      setTaskType(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("daft_mode", taskType);
    document.documentElement.setAttribute("data-daft-mode", taskType);
  }, [taskType]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);

    const pricing = document.getElementById("pricing-reality");
    if (pricing) {
      pricing.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ServicesHero
        taskType={taskType}
        onTaskTypeChange={setTaskType}
      />

      <ServicesSection
        taskType={taskType}
        onSelectService={handleServiceSelect}
        selectedService={selectedService}
      />

      <ServicePackages
        taskType={taskType}
        selectedService={selectedService}
      />
    </>
  );
}
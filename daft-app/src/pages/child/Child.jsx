import React from "react";
import { ChildPanel } from "../../components/child";
import BadgeDisplay from "../../components/child/BadgeDisplay";

export default function Child() {
  return (
    <div className="fade-in">
      <ChildPanel />
      <BadgeDisplay />
    </div>
  );
}
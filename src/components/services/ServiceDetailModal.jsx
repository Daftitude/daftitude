import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function ServiceDetailModal({ open, onClose, service, onRequest }) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal-sheet" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="modal-eyebrow">{service.category}</div>
            <h3 className="modal-title">{service.title}</h3>
            <p className="modal-subtitle">{service.longDesc || service.desc}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-block">
              <div className="modal-block-title">Best for</div>
              <div className="pill-row">
                {(service.bestFor || []).map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-block">
              <div className="modal-block-title">Typical time</div>
              <div className="modal-meta">{service.timeEstimate || "Varies by scope"}</div>
              <div className="modal-block-title" style={{ marginTop: 12 }}>Typical pricing</div>
              <div className="modal-meta">{service.priceReality || service.priceText || "Quoted after details"}</div>
            </div>
          </div>

          <div className="modal-block" style={{ marginTop: 18 }}>
            <div className="modal-block-title">What’s included</div>
            <ul className="checklist">
              {(service.included || service.bullets || []).map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.notIncluded?.length ? (
            <div className="modal-block" style={{ marginTop: 18 }}>
              <div className="modal-block-title">Not included</div>
              <ul className="muted-list">
                {service.notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {service.commonFixes?.length ? (
            <div className="modal-block" style={{ marginTop: 18 }}>
              <div className="modal-block-title">Common problems solved</div>
              <ul className="muted-list">
                {service.commonFixes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="modal-foot">
          <button className="btn-ghost" onClick={onClose}>Back</button>
          <button
            className="btn-solid"
            onClick={() => onRequest?.(service)}
          >
            Request this service
          </button>
        </div>
      </div>
    </div>
  );
}
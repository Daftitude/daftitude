import React, { useState } from 'react';

const Tabs = ({ labels, children }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="tabs">
        {labels.map((label, i) => (
          <div
            key={label}
            className={`tab ${i === active ? 'tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {label}
          </div>
        ))}
      </div>
      <div>{children[active]}</div>
    </div>
  );
};

export default Tabs;
// src/components/popouts/PopoutContainer.jsx
import { useState } from 'react';
import DBAModal from './DBAModal';
import MarketplaceModal from './MarketplaceModal';
import ReminderModal from './ReminderModal';
import TaskModal from './TaskModal';
import TokenModal from './TokenModal';

export default function PopoutContainer() {
  const [openPopouts, setOpenPopouts] = useState([]);

  const togglePopout = (type) => {
    setOpenPopouts((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const renderPopout = (type) => {
    const props = {
      onClose: () => togglePopout(type),
    };
    switch (type) {
      case 'DBA':
        return <DBAModal {...props} />;
      case 'Marketplace':
        return <MarketplaceModal {...props} />;
      case 'Reminder':
        return <ReminderModal {...props} />;
      case 'Task':
        return <TaskModal {...props} />;
      case 'Token':
        return <TokenModal {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-40">
      {openPopouts.map((type) => (
        <div key={type} className="absolute top-10 left-10 pointer-events-auto">
          {renderPopout(type)}
        </div>
      ))}

      {/* Example toggle buttons for dev/test use. Replace with Navbar dropdowns or dashboard actions later. */}
      <div className="fixed bottom-4 left-4 flex gap-2 z-50">
        {['DBA', 'Marketplace', 'Reminder', 'Task', 'Token'].map((type) => (
          <button
            key={type}
            onClick={() => togglePopout(type)}
            className="bg-indigo-600 text-white px-3 py-1 rounded shadow"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
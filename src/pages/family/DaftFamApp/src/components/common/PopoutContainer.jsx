import { useState, useRef, useEffect } from 'react';

export default function PopoutContainer({ title, children, onClose }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    ref.current.startX = e.clientX - position.x;
    ref.current.startY = e.clientY - position.y;
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - ref.current.startX;
      const newY = e.clientY - ref.current.startY;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="fixed z-50 bg-white shadow-2xl rounded-lg border border-gray-200"
      style={{ top: position.y, left: position.x, width: '360px' }}
    >
      <div
        className="cursor-move bg-blue-600 text-white p-2 rounded-t flex justify-between items-center"
        onMouseDown={handleMouseDown}
      >
        <span className="font-bold">{title}</span>
        <button onClick={onClose} className="text-white text-sm px-2 hover:text-gray-200">
          ✕
        </button>
      </div>
      <div className="p-4 max-h-[70vh] overflow-auto">{children}</div>
    </div>
  );
}
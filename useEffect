import { useRef, useEffect, useState } from "react";

function TailwindSideEffect() {
  const boxRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const el = boxRef.current;
    if (!el) return;
    el.classList.add("bg-green-500", "scale-110", "transition-all", "duration-700");
    return () => {
      el.classList.remove("bg-green-500", "scale-110", "transition-all", "duration-700");
    };
  }, [active]);

  return (
    <div className="flex flex-col items-center mt-8">
      <div
        ref={boxRef}
        className="w-32 h-32 bg-gray-300 rounded shadow mb-4 flex items-center justify-center transition-all duration-700"
      >
        Tailwind Box
      </div>
      <button
        className="px-5 py-2 rounded bg-green-700 text-white font-semibold"
        onClick={() => setActive((a) => !a)}
      >
        Toggle Effect
      </button>
    </div>
  );
}

export default TailwindSideEffect;

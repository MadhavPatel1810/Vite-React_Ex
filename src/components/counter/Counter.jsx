import { useState } from "react";
import { Minus, Plus } from "lucide-react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleAddCounter = () => {
    setCounter(counter + 1);
  };
  const handleRemoveCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="bg-sky-900 text-white w-full h-screen duration-200">
      <div className="p-8">
        <h1 className="text-lg font-medium">Vite + React</h1>
        <h2>{counter}</h2>
        <button
          onClick={handleRemoveCounter}
          type="button"
          className="mr-2 inline-flex items-center rounded-md border border-slate-500 bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          <Minus className="mr-2 h-4 w-4" />
          Remove
        </button>
        <button
          onClick={handleAddCounter}
          type="button"
          className="inline-flex items-center rounded-md border border-slate-500 bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;

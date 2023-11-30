import { useState } from "react";

const BgChanger = () => {
  const [isColor, setIsColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: isColor }}
    >
      <div className="absolute flex flex-wrap justify-center bottom-0 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setIsColor("#ba1c1c")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg bg-red-700"
          >
            Red
          </button>
          <button
            onClick={() => setIsColor("#ea580b")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg bg-orange-600"
          >
            Orange
          </button>
          <button
            onClick={() => setIsColor("#a955f7")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg bg-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => setIsColor("#4283f6")}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg bg-blue-500"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;

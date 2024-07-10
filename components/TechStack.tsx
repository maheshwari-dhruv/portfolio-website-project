import React from "react";

const TechStack = () => {
  return (
    <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
      <div className="flex flex-col gap-3 lg:gap-4">
        {["React.js", "Next.js", "TypeScript"].map((item) => (
          <span
            key={item}
            className="py-1 lg:py-3 lg:px-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
        <span className="py-3 px-2 rounded-lg text-center bg-[#10132E]" />
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <span className="py-3 px-2 rounded-lg text-center bg-[#10132E]" />
        {["AWS", "MongoDB", "Java"].map((item) => (
          <span
            key={item}
            className="py-1 lg:py-3 lg:px-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

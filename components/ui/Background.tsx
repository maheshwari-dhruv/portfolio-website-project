import React from "react";

export function Background() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.025] bg-grid-black/[0.025] flex items-center justify-center absolute left-0 top-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}

import React from "react";

export default function FlyoutExample() {
  return (
    <div>
      <div className="flex h-screen justify-center bg-black px-3 py-12">
        <FlyoutLink>Pricing</FlyoutLink>
      </div>
    </div>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setopen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setopen(true)}
      onMouseLeave={() => setopen(false)}
      className="relative h-fit w-fit"
    >
      <a className="relative text-white">
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute 
        -bottom-2 -left-2 -right-2 
        h-1 origin-left scale-x-0r 
        rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
        {/* Todo render */}
      </a>
      {/* todo render flyout contents */}
    </div>
  );
};

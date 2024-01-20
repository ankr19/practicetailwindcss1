import React from "react";

function NavLink() {
  const link = [
    { name: "Men" },
    { name: "Women" },
    { name: "Kids" },
    { name: "Footwear" },
  ];
  return (<>
  {link.map((l)=>(
    <div key={l.name}>
        <div className="px-3 text-left md:cursor-pointer">
            <h3 className="py-7 ">{l.name}</h3>
        </div>
    </div>
  ))}
  </>)
}

export default NavLink;

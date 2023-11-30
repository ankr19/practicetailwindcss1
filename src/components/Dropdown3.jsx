import React from "react";
import { AiOutlineDown } from "react-icons/ai";

let submenu = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
];

const Dropdown3 = () => {
  return (
    <div>
      <ul className="flex items-center justify-between font-semibold">
        <li className="relative group px-3 py-3">
          <button className="hover:opacity-50 flex flex-row cursor-default gap-1">
            Dropdown
            <span className="py-2">
              <AiOutlineDown size={14} />
            </span>
          </button>
          <div className="absolute top-0 -left-2 transiton group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform transform z-50 min-w-[200px]">
            <div>
              <ul>
                {submenu.map((e) => {
                  return <li key={e.id}>{e.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown3;

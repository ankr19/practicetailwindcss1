import React from "react";
let submenu = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
];
const Mega3 = () => {
  return (
    <div>
      <ul className="flex justify-between items-center font-semibold">
        <li className="relative group px-3 py-2">
          <button className="hover:opacity-50 cursor-default">Mega</button>
          <div
            className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 
                invisible group-hover:opacity-100 group-hover:visible duration-500 
                 ease-in-out group-hover:transform transform z-50 min-w-[200px]"
          >
            <div className="relative top-6 p-6 bg-black rounded-xl shahow-xl w-full">
              <div
                className="w-10 h-10 bg-black transform rotate-45 
                            absolute top-0 z-0 -translate-x-4 
                            transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"
              ></div>
              <div className="relative z-10">
                <ul className="text-[15px]">
                  {/* <li className='text-white hover:text-gray-400 py-1 block font-normal cursor-pointer'>1st Option</li>
                                    <li className='text-white hover:text-gray-400 py-1 block font-normal cursor-pointer'>2nd Option</li>
                                    <li className='text-white hover:text-gray-400 py-1 block font-normal cursor-pointer'>3rd Option</li>
                                    <li className='text-white hover:text-gray-400 py-1 block font-normal cursor-pointer'>4th Option</li> */}
                  {submenu.map((e) => {
                    return (
                      <li
                        key={e.id}
                        className="text-white hover:text-gray-400 py-1 block font-normal cursor-pointer"
                      >
                        {e.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Mega3;

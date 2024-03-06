import React from "react";

function NavLink() {
  const link = [
    {
      name: "Men",
      submenu: true,
      sublink: 
      [
        { head: "Topwear", 
        sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
        ]}
    ],
    },
    { name: "Women" },
    { name: "Kids" },
    { name: "Footwear" },
  ];
  return (
    <>
      {link.map((l) => (
        <div key={l.name}>
          <div className="px-3 text-left md:cursor-pointer">
            <h3 className="py-7 ">{l.name}</h3>
            {l.sublink && (
                <div>
                    <div>
                        <div>
                            {
                                l.sublink.map((li)=>(
                                    <div key={li}>
                                        <h2>{li.head}</h2>
                                        {li.sublink.map(slink=>(
                                            <li key={slink}>
                                                {slink.name}
                                            </li>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLink;

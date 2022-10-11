import React from "react";

const username = "HiChon";

const Header = () => {
  return (
    <div className="bg-green flex items-center px-3 justify-between h-[50px]">
      <div></div>
      <div className="rounded px-5 py-1 bg-grey font-bold text-sm">
        {username}
      </div>
    </div>
  );
};

export default Header;

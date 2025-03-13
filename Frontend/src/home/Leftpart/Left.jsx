import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full bg-black text-gray-300 h-screen flex flex-col">
      <Search />
      <div
        className="flex-1 overflow-hidden custom-scrollbar"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
}

export default Left;

import React, { useContext } from "react";
import { ContextValue } from "../context/Context";

export default function Header() {
  const { setSearchValue } = useContext(ContextValue);
  return (
    <header>
      <div className="container mx-auto">
        <input
          className="border-[#3051f4] border-[1px] w-[375px] p-2"
          placeholder="Найти товар"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </header>
  );
}

import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "../SearcgBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const Navigate = useNavigate();
  const onLogout = () => {
    Navigate("/login");
  };
  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="bg-white justify-between flex items-center py-2 px-6 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;

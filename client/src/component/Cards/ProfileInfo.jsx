import React from "react";
import { getInitials } from "../../Pages/utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Aman")}
      </div>
      <div>
        <p className="test-sm font-medium">aman</p>
        <button
          className="text-sm text-slate-700 underline cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;

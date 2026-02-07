import React from "react";
import { ShieldAlert } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

const UnauthenticatedView = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center border-2 ">
      <div className="w-[600px] h-30 border-1 border-slate-500 rounded-sm px-4 py-0 flex gap-4 items-center justify-between">
        <div className="flex  items-center gap-4">
          <ShieldAlert className="w-12 h-12 border-1 rounded-sm p-2" />
          <div className="flex flex-col">
            <p className="text-xl">Unauthorized</p>
            <p>You do not have access to this resource </p>
          </div>
        </div>

        <div className="border-2 px-4 py-1 rounded-sm flex items-center justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedView;

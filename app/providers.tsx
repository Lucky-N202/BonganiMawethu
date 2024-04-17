"use client";

import React from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode}) => {
  return (
    <div>
        {children}
        <Toaster position="top-right" richColors closeButton  />
    </div>
  )
}

export default Providers
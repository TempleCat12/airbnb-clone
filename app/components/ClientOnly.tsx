"use client";
import React, { useEffect, useState } from "react";

interface ClientOnlyProp {
  children: React.ReactNode;
}
// Just for fix the bug when you refresh the page and click meanwhile
const ClientOnly: React.FC<ClientOnlyProp> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;

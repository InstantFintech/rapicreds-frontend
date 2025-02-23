import React from "react";


export default function MainPage({children}: { children: React.ReactNode }) {
  return (
    <div className="main-page">
      {children}
    </div>
  );
}

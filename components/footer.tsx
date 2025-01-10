import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        <span className="font-bold">Aurang Zaib - </span>
        &copy; Copyright {currentYear}. All rights reserved.
      </small>
    </footer>
  );
}

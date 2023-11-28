import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex container items-center justify-between p-6 lg:px-8 [&>*]:font-semibold [&>*]:leading-6 [&>*]:text-gray-900 [&>*]:dark:text-white">
        <Link className="text-xl tracking-widest" href="/">
          Cine Crib
        </Link>
        <div className="flex gap-4 items-center justify-end"></div>
      </nav>
    </header>
  );
};

export default Navbar;

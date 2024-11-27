import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectButton from "../ConnectWallet";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <aside className="flex items-center justify-between px-5 py-6 md:p-10 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} className="cursor-pointer" />
          <h1 className="text-2xl md:text-3xl font-medium hidden sm:block uppercase font-inter">GreenDot</h1>
        </Link>
        <ConnectButton />
      </aside>
    </nav>
  );
}

export default Navbar;

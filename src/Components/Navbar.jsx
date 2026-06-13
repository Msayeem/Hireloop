"use client"
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import React from 'react';
import Image from "next/image";
import { authClient } from "@/app/lib/auth-client";


const Navbar = () => {

  const {data:session, isPending}=authClient.useSession();
  const user=session?.user;

 const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
             <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href="/"><Image src={'/logo.png'} alt="logo" width={100} height={100}></Image></Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/browseJobs">Browse Jobs</Link>
          </li>
          <li>
            <Link href={`/${user?.role}/companies`}>Company</Link>
          </li>
          <li>
            <Link href="/plans">Pricing</Link>
          </li>
         {
          user && 
           <li>
            <Link href={`/dashboard/${user?.role}`}>Dashboard</Link>
          </li>
         }
          <li>
            {user ? <div className="flex items-center gap-3"><button onClick={async()=>await authClient.signOut()}>Log Out</button>  <h1>{user?.name}</h1>
        <Avatar className="rounded-lg">
        <Avatar.Image
          alt="Square Avatar"
          src={user?.image}
        />
        <Avatar.Fallback className="rounded-lg">SQ</Avatar.Fallback>
      </Avatar></div>
:
<Link href="/signIn">Login</Link>

}
          </li>
          <li>
            <Link href="#">Get Started</Link>
          </li>
         
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
                   <li>
            <Link href="jobs">Browse Jobs</Link>
          </li>
          <li>
            <Link href="company">Company</Link>
          </li>
          <li>
            <Link href="/plans">Pricing</Link>
          </li>
         {
          user && 
           <li>
            <Link href={`/dashboard/${user?.role}`}>Dashboard</Link>
          </li>
         }
          <li>
            <Link href="/signIn">Login</Link>
          </li>
          <li>
            <Link href="#">Get Started</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/images/logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
  const user = true;
  const navItems = (
    <>
      <li>
        <Link className="py-2 px-4 max-sm:text-base font-bold hover:text-primary transition-all" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="py-2 px-4 max-sm:text-base font-bold hover:text-primary transition-all" href="/about">
          About
        </Link>
      </li>
      {user?.email ? (
        <>
          <li className="hover:text-primary font-bold transition-all">
            <Link href="/my-bookings">My Bookings</Link>
          </li>
          <li className="hover:text-primary font-bold transition-all">
            <button>Log out</button>
          </li>
        </>
      ) : (
        <li className="hover:text-primary font-bold transition-all">
          <Link href="/login">Login</Link>
        </li>
      )}
    </>
  );

  const links = [
    {
      sn: 1,
      title: 'Home',
      href: '/',
    },
    {
      sn: 2,
      title: 'Login',
      href: '/login',
    },
  ];
  return (
    <div className="navbar bg-base-100 h-28 container mx-auto font-[family-name:var(--font-geist-mono)]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral-700 text-lg font-semibold z-20">
            {/* {navItems} */}
            {links.map((link) => (
              <li key={link.sn}>
                <Link className={`${pathName === link.href && 'text-primary'} py-2 px-4 max-sm:text-base font-bold hover:text-primary transition-all`} href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="normal-case text-xl font-[family-name:var(--font-geist-sans)]">
          <Image src={logo} alt="logo" className="h-[85px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-4 menu-horizontal text-neutral-700 text-lg ">
          {links.map((link) => (
            <li key={link.sn}>
              <Link className={`${pathName === link.href && 'text-primary'} py-2 px-4 max-sm:text-base font-bold hover:text-primary transition-all`} href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary px-7 h-14 text-lg font-bold">Appointment</button>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COLORS, FONTS } from '@/constants/constants';

export default function Navbar() {
  // Track the mobile menu’s open/closed state
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Title */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logo_red_cup.png"
            alt="No Sweat logo"
            width={40}
            height={40}
          />
          <span
            className={`${FONTS.heading} text-xl`}
            style={{ color: COLORS.jetBlack }}
          >
            No Sweat<sup className="text-xs align-top">®</sup>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link
              href="/"
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Product
            </Link>
          </li>
          {/* Removed Technology link */}
          <li>
            <Link
              href="/wholesale"
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Wholesale
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Terms
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger / X animation lines */}
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 my-1.5 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              onClick={handleLinkClick}
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/wholesale"
              onClick={handleLinkClick}
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Wholesale
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              onClick={handleLinkClick}
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              onClick={handleLinkClick}
              className={`${FONTS.body} text-sm`}
              style={{ color: COLORS.jetBlack }}
            >
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

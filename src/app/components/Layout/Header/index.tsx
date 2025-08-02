// components/Layout/Header/index.tsx
'use client';

import { Key, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '@/app/types/menu';
import Logo from '@/app/components/Layout/Header/Logo';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeaderLink from './Navigation/MobileHeaderLink';
import Signin from '@/app/components/Auth/SignIn';
import SignUp from '@/app/components/Auth/SignUp';
import { Icon } from '@iconify/react';
import { useI18n } from '@/utils/i18n';
import LanguageSwitcher from '@/app/components/Common/LanguageSwitcher';

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { t, locale } = useI18n();

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Sticky header
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close overlays on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (signInRef.current && !signInRef.current.contains(e.target as Node)) setIsSignInOpen(false);
      if (signUpRef.current && !signUpRef.current.contains(e.target as Node)) setIsSignUpOpen(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node) && navbarOpen) setNavbarOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navbarOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isSignInOpen || isSignUpOpen || navbarOpen ? 'hidden' : '';
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  // Fetch header data
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/data?lang=${locale}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const { headerData } = await res.json();
        setHeaderData(headerData);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [locale]);

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/10 ${sticky ? 'shadow-lg bg-white' : 'shadow-none'
      }`}>
      <div className='lg:py-0 py-2'>
        <div className='container mx-auto max-w-screen-xl flex items-center justify-between px-4'>
          <div className={`${sticky ? 'py-3' : 'py-7'} pr-16 lg:border-r border-black/10 duration-300`}>
            <Logo />
          </div>

          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            {headerData.map((item, idx) => (
              <HeaderLink key={idx} item={item} />
            ))}
          </nav>

          <div className={`${sticky ? 'py-3' : 'py-7'} flex items-center gap-4 pl-16 lg:border-l border-black/10 duration-300`}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

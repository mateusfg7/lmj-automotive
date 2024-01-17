"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export function Header() {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollValue, setMaxScrollValue] = useState(0);

  function handleScroll() {
    if (window) {
      setScrollPosition(window.scrollY);
    }
    if (document) {
      setMaxScrollValue(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );
    }
  }

  useEffect(() => {
    handleScroll();

    if (window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
  }, []);

  useEffect(() => {
    setPercentScrollPosition(
      Math.round((scrollPosition / maxScrollValue) * 100)
    );
  }, [scrollPosition, maxScrollValue]);

  const isOnTop = percentScrollPosition === 0;

  const Item = ({ title, href }: { title: string; href: string }) => (
    <li>
      <a className="cursor-pointer hover:text-white" href={href}>
        {title}
      </a>
    </li>
  );

  return (
    <header
      className={`md:fixed w-full duration-200 z-50 ${
        isOnTop
          ? "py-3"
          : "py-1 md:bg-[rgba(5,7,12,0.9)] md:backdrop-blur-sm md:border-b md:border-b-[rgba(172,178,186,0.1)]"
      }`}
    >
      <div className="content-w flex flex-col items-center font-normal text-xl text-[#acb2ba] lg:flex-row lg:justify-between">
        <div className="flex items-center gap-24 min-gap-5">
          <div className="flex items-center justify-center w-44">
            <div>
              <Image
                src="/img/logo.png"
                width={95.44}
                height={100}
                alt="LMJ Automotive"
                title="Logo"
                className="object-contain"
              />
            </div>
            <div>
              <Image
                src="/img/tipografia.png"
                width={147.82}
                height={54.77}
                alt="LMJ Automotive"
                title="Logo"
                className="object-contain"
              />
            </div>
          </div>
          <nav className="hidden items-center lg:flex">
            <ul className="flex gap-7 min-gap-2">
              <Item title="Início" href="#home" />
              <Item title="Sobre nós" href="#about-us" />
              <Item title="Serviços" href="#services" />
              <Item title="Preços" href="#prices" />
            </ul>
          </nav>
        </div>
        <div className="hidden text-2xl items-center justify-center gap-6 lg:flex">
          <a
            href="https://www.instagram.com/lmj_automotive/"
            className="menu-item"
          >
            <BsInstagram />
          </a>
          <a href="https://wa.me/+5537998440073" className="menu-item">
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}

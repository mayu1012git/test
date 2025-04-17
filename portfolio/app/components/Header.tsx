"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 w-full bg-[#ff8ca7] flex items-center justify-between px-4">
      {/* 左側ロゴ */}
      <Image
        src="/DecocoLogo.PNG"
        alt="logo"
        width={120}
        height={38}
        priority
      />

      {/* 右側ナビゲーション */}
      <nav className="flex space-x-4 text-white font-bold">
        <Link href="/">TOP</Link>
        <Link href="/profile">PROFILE</Link>
        <Link href="/timeline">TIMELINE</Link>
        <Link href="/skills">SKILLS</Link>
      </nav>
    </header>
  );
}

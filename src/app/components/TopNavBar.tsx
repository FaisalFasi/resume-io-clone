"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";
import { useState } from "react";
import Login from "login/page";

export const TopNavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isHomePage = pathName === "/";
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  if (!loggedIn) {
    // router.push("/login");
    // return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">OpenResume</span>
          <h1 className="text-xl font-bold">WIVRO RESUME</h1>
          {/* <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-8 w-full"
            priority
          /> */}
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
            ["/login", "LogIn"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
          <div className="ml-1 mt-1">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

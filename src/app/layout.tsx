"use client";

import React, { useState, useEffect } from "react";
import { BackToTop, Footer, Header, TopBar } from "@/components";
import "./styles/globals.css";
import { ToastContainer } from "react-toastify";
import { ReactElement, createRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../redux";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollPos(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="A unique and unforgettable dining experience"
          />
          <title>Epicurean</title>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        <body id="top" className="">
          <TopBar />

          <Header
            visible={isHeaderVisible}
            active={
              typeof window !== "undefined" ? window.scrollY >= 50 : false
            }
          />

          {children}

          <BackToTop
            classes={
              typeof window !== "undefined"
                ? window?.scrollY >= 50
                  ? "active"
                  : ""
                : ""
            }
          />

          <Footer />

          <ToastContainer position="top-center" theme="colored" />
        </body>
      </html>
    </Provider>
  );
}

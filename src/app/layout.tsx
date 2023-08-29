"use client";

import React, { useState, useEffect } from "react";
import { BackToTop, Footer, Header, TopBar } from "@/components";
import "./styles/globals.css";
import { ToastContainer } from "react-toastify";
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

  useEffect(() => {

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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [window]);

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

          {/* Add conditional check for Header */}
          {typeof window !== "undefined" && (
            <Header
              visible={isHeaderVisible}
              active={window.scrollY >= 50}
            />
          )}

          {children}

          {/* Add conditional check for BackToTop */}
          {typeof window !== "undefined" && (
            <BackToTop
              classes={window.scrollY >= 50 ? "active" : ""}
            />
          )}

          <Footer />

          <ToastContainer position="top-center" theme="colored" />
        </body>
      </html>
    </Provider>
  );
}

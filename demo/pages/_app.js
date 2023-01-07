/** @format */

import "@/styles/global.css";
import NavBar from "@/components/navBar/NavBar";
import "../components/navBar/Navbar.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps}) {
  return (
    <SessionProvider >
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

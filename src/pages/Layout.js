import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <main className="max-w-6xl mx-auto">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

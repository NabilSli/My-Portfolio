import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="pageContainer">
      <Header />
      <section className="bodyContainer">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;

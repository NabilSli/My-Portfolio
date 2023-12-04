import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <section className="bodyContainer">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;

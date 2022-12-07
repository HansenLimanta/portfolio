import React from "react";
import Cursor from "./Cursor";
import Loading from "./Loading";
import Meta from "./Meta";
import Nav from "./Nav";
import TransitionEffect from "./TransitionEffect";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      />
      {/* <Cursor> */}
      <main>
        {/* <Loading /> */}
        <Nav />
        <TransitionEffect>{children}</TransitionEffect>
      </main>
      {/* </Cursor> */}
    </>
  );
}

export default Layout;

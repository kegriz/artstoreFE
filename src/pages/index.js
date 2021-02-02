import * as React from "react";
import Navigation from "../components/Navigation";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <Navigation />

      <h1 className="title title--red">Home Page</h1>

      <p>test paragraph</p>
    </main>
  );
};

export default IndexPage;

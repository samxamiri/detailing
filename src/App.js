import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <MainContent /> // This now contains all the main sections
    </>
  );
}

export default App;

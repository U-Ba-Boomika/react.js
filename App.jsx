import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
  <div className="note">
    <Header />
    <Footer />
    <Note />
    <Note />
    <Note />
  </div>
  );
}

export default App;

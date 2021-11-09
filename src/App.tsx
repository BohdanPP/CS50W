import React from "react";
import "./App.css";
import Technologies from "./Technologies";

import Accordion from "./components/Accordion/Accodrdion";
import { Rating } from "./components/Rating/Rating";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;

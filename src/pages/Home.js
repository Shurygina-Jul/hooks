import React, { Fragment } from "react";
import Card from "../components/Card/Card";
import { Search } from "../components/Search/Search";

export const Home = () => {
  const cards = new Array(15).fill("").map((_, i) => i);

  return (
    <Fragment>
      <Search />
      <div className="row">
        {cards.map((card) => {
          return (
            <div className=" col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

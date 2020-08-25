import React from "react";
import "./styles.css";
import { navigation } from "./navigation";

export default function App() {
  console.log(navigation);
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      {/*<div className="search">
        <form
          action="https://www.google.com/search"
          class="searchform"
          method="get"
          name="searchform"
          target="_blank"
        >
          <input
            autocomplete="on"
            class="form-control search"
            name="q"
            placeholder="Search in google.com"
            required="required"
            type="text"
          />
        </form>
  </div>*/}
      <div className="navigation">
        {navigation.map((category) => (
          <CategoryList category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryList({ category }) {
  return (
    <div>
      <ul>
        <li>{category.title}</li>
        {category.links.map((x) => {
          return (
            <li>
              <a href={x.url}>{x.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

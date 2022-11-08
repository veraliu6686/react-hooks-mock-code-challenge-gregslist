import React from "react";
import Search from "./Search";

function Header( {setSearchQuery}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchQuery={setSearchQuery}/>
    </header>
  );
}

export default Header;

import React,{useState} from "react";

function Search( {setSearchQuery}) {
  // ❓search 4a. give the value a state to be tracked on
  const [text, setText] = useState ("")
  // ❓search 2. preventDefault on the form
  function handleSubmit(e) {
    e.preventDefault();
    // ❓search 6. passed from APP to match the value of the searched value
    setSearchQuery(text);
  }

  const handleInput = (e) => {
    // ❓search 3b. console.log (e.target.value)
    // ❓search 4c. update the value which being typed , connect to the App
    setText(e.target.value)

  }


  return (                // ❓ search 1.give a submit event
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // ❓seach 4b. name the value user typed
        value={text}
        // ❓search 3a. grab the typed info value assign a function
        onChange={handleInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}


export default Search;

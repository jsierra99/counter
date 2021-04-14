import React, { useState } from "react";
import Counter from "./components/Counter.js";

export const ThemeContext = React.createContext();

function App() 
{
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ color: theme}}>
      <button onClick={() => setTheme(x => x === "red" ? "blue" : "red")}>Click Me</button>
      <Counter />
    </ThemeContext.Provider>  
  );
}

export default App;

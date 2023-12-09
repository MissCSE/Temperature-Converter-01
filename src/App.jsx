import { useState } from "react";
import "./App.css";

export default function App() {

  const [value, setValue] = useState('');
  const [updated, setUpdated] = useState(value);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    //  "value" stores input field value
    setUpdated(Math.round(((value-32)*5)/9));
  };
  
        
  return (
    <>
      <a
        href="#"
        class="block max-w-none p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Temperature
          </span>{" "}
          Converter
        </h1>

        <form class="max-w-sm mx-auto">
          <input
          onKeyDown={(e) => {
            if (e.key === "Enter")
             handleClick()
            }}
            type="number"
            onChange={handleChange}
            id="number-input"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the Temperature in Fahrenheit "
            required
          />
        </form>
        <br />
        <button
          type="button" onClick={handleClick}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Convert
        </button>
        <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {updated}
          </span>{" "}
          °C{" "}
        </h2>

        <h1 class="mb-4 text-md font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">Convert Temperature from <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Fahrenheit</mark> to Celsius</h1>

      </a>
    </>
  );
}

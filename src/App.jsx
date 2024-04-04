import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <div
          className={`bg-green-700 h-screen p-5 pt-8 ${
            open ? "w-16" : "w-60"
          } relative duration-300 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 bg-white text-green-700 absolute -right-3 top-9 rounded-full text-3xl border cursor-pointer ${
              open && "rotate-180"
            } `}
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
          <div className="inline-flex">
           {/* Logo here  */}  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${ open && "scale-0"}`}>
              Computer Engineer
            </h1>
          </div>
         <div className= {`flex items-center rounded-md bg-gray-200 mt-6 ${ 
          open ? "px-2.5" : "px-4"
         }`}>

          <TbSearch className={`text-black text-lg block float-left cursor-pointer ${ 
            !open && "mr-2" }`}/>
          <input type="search" placeholder="Search" className={`w-11/12 bg-gray-200 text-black text-lg outline-none ${open && "hidden"} `}/>
         </div>

        </div>
        <div className="p-7">
          <h1 className="text-2xl"> Home Page </h1>
        </div>
      </div>
    </>
  );
}

export default App;

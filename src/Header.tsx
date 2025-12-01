import { useState } from "react"
import { NavLink } from "react-router-dom"
function Header(){
      const [count, setCount] = useState(0)

    return(
        <>
        <div className='"w-full h-16 bg-blend-overlay flex items-center justify-between px-8 shadow-md"'>
        <nav className="">
            <NavLink
            to="/"
            className={({ isActive}) =>
                isActive
                ? "text-white text-3xl font-bold border-b-2 border-white"
                : "hover:text-white text-3xl"
            }
            >
            Charles Chen Portfolio
            </NavLink>
        </nav>
        <button onClick={() => setCount((count) => count + 1)}>
          visitor count is {count}
        </button>
        <nav className="space-x-6">
            <NavLink
            to="/Work"
            className={({ isActive}) =>
                isActive
                ? "text-white text-3xl font-bold border-b-2 border-white"
                : "hover:text-white text-3xl"
            }
            >
            Work  
            </NavLink>
            <NavLink
            to="/About"
            className={({ isActive}) =>
                isActive
                ? "text-white text-3xl font-bold border-b-2 border-white"
                : "hover:text-white text-3xl"
            }
            >
            About
            </NavLink>
        </nav>
        
        </div>
        </>
    )
}
export default Header
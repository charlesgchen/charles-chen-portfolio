import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
function Header(){
    const [count, setCount] = useState(0)
    useEffect(() =>{
        fetch("https://8hiwdq6ggf.execute-api.us-east-1.amazonaws.com/visitor", {
            method: "POST"
        })
        .then((response) => response.json())
        .then((response) => setCount(response.count))
        .catch((error) => console.log(error));
    },[]);
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
        <h1>
            visitor count is {count}
        </h1>
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
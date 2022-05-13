import { Link, BrowserRouter as Router } from "react-router-dom";

import { FaBars } from 'react-icons/fa';



export function Nav() {
    return(
        <nav className="bg-zinc-900 h-20 flex text-white items-center justify-between py-2 px-[cacl((100vh-1000px)/2)] z-10 " >
            
                <Link className=" flex items-center decoration-none py-0 px-4 h-[100%] cursor-pointer active:text-slate-500"  to={"/"} >
                    <h1 className="">Logo</h1>
                </Link>
                <div>
                </div>
                <div className="m-2 p-2 rounded-md bg-blue-600 hover:bg-blue-400">
                    <Link to={"/login"}> Sing in </Link>
                </div>
            
        </nav>
    )
}
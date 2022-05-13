import { Nav } from "../components/Nav";
import { Options } from "../components/Options";


export default function Home() {
    return(
        <div className="">
            <Nav/>
            <div className="flex">
                <Options/>
                <div className="flex justify-center items-center w-[100%]">

                    <img src="" alt="Logo da Eco" className="" />
                    
                </div>
            </div>
        </div>
    )
};

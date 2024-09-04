import { Nav } from "../components/Nav";
import { Options } from "../components/Options";


export default function Pag1() {
    return(
        <div className="">
        <Nav/>
        <div className="flex">
            <Options/>
            <div className="m-4 ">
                <h1>Pagina1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque reprehenderit optio.
                    Hic rerum distinctio vitae, 
                </p>
            </div>
        </div>
    </div>
    )
};

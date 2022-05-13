
import { BrowserRouter, Link } from "react-router-dom";


export function Options() {

    
    return(
        <div className="flex flex-col bg-slate-700 w-48 p-4 text-white h-[91.3vh] justify-center items-center" >             
            <Link   className="py-2  flex items-center justify-center hi hover:rounded-md hover:bg-slate-50 hover:text-slate-700 transition-all hover:border-1 hover:border-slate-700 w-[100%]" to={"/Cadastro"} >
                <button>Cadastros</button> 
            </Link>
            <Link className="py-2 flex items-center justify-center  hover:rounded-md hover:bg-slate-50 hover:text-slate-700 transition-all hover:border-1 hover:border-slate-700 w-[100%]" to={"/Equipamentos"} >
                <button>Modulos</button>
            </Link>
            <Link className="py-2 flex items-center justify-center  hover:rounded-md hover:bg-slate-50 hover:text-slate-700 transition-all hover:border-1 hover:border-slate-700 w-[100%]"to={"/page3"} >
                <button>Ordem de Serviços</button>
            </Link>
            <Link  className="py-2 flex items-center justify-center  hover:rounded-md hover:bg-slate-50 hover:text-slate-700 transition-all hover:border-1 hover:border-slate-700 w-[100%]"to={"/page3"} >
                <button>Configurações</button>
            </Link>         
        </div>
    )
};

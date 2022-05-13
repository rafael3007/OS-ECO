

import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { FaBook, FaTruck,FaWrench,FaEdit } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { MdHomeRepairService } from 'react-icons/md'
import { Options } from '../../components/Options';
import { Nav } from '../../components/Nav';
import { useState } from 'react';
import Clientes from './Clientes';


export default function Cadastro() {

    const[optionSelected,setOptionSelected] = useState('');

    return(
        <div className="">
            <Nav/>
            <div className="flex">
                <Options/>
                <div className='flex flex-col'>
                    <div className="m-4 h-10 ">
                        <ul className="flex ">
                            <li>
                                <button onClick={()=>setOptionSelected('cliente')} style={{background: `${optionSelected ==='cliente'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='cliente'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <HiOutlineUserGroup className="m-2"/> Clientes </button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelected('equip')} style={{background: `${optionSelected ==='equip'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='equip'?'#FFF' : ''}` }}  className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <AiFillCar className="m-2"/>Equipamentos</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelected('contact')} style={{background: `${optionSelected ==='contact'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='contact'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <FaBook className="m-2"/>Contatos</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelected('fornecedores')} style={{background: `${optionSelected ==='fornecedores'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='fornecedores'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <FaTruck className="m-2"/>Fornecedores</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelected('tecnicos')} style={{background: `${optionSelected ==='tecnicos'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='tecnicos'?'#FFF' : ''}` }}  className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <FaWrench className="m-2"/>Técnicos</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelected('services')} style={{background: `${optionSelected ==='services'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelected ==='services'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> <MdHomeRepairService className="m-2"/>Serviços</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {
                            optionSelected === 'cliente'?(
                            <Clientes/>    
                            ):('')
                        }
                        {
                            optionSelected === 'equip'?(
                            <div>Equipamentos</div>    
                            ):('')
                        }
                        {
                            optionSelected === 'contact'?(
                            <div>Contatos</div>    
                            ):('')
                        }
                        {
                            optionSelected === 'fornecedores'?(
                            <div>Fornecedores</div>    
                            ):('')
                        }
                        {
                            optionSelected === 'tecnicos'?(
                            <div>Tecnicos</div>    
                            ):('')
                        }
                        {
                            optionSelected === 'services'?(
                            <div>Serviços</div>    
                            ):('')
                        }
                    </div>
                    <footer>
                        <div className='flex p-2 justify-end'>
                            <button className='flex p-2 items-center'><IoIosPaper/> Novo</button>
                            <button className='flex p-2 items-center'><AiOutlineClose/> Excluir</button>
                            <button className='flex p-2 items-center'><FaEdit/> Alterar</button>
                        </div>
                </footer>
                </div>
                
            </div>
        </div>
    )
};

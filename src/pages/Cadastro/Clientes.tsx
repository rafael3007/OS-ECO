import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Clientes() {

    const [optionSelectedClient, setOptionSelectedClient] = useState('')

    return(
        <div className='p-2 flex-1 '>
            <div className='mb-2'>
                <label>Razão Social/Nome</label>
                <div className='flex items-center flex-1'>
                    <input className='border-solid border-2 border-b-black rounded-md'/><AiOutlineSearch className='mr-2'/>
                </div>
            </div>
            <div>
                <label>Nome Fantasia</label>
                <div className='flex items-center'>
                    <input className='border-solid border-2 border-b-black rounded-md'/><AiOutlineSearch className='mr-2'/>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <label>Contato </label>
                    <div className='flex items-center'>
                        <input className='border-solid border-2 border-b-black rounded-md mr-2'/>
                    </div>
                </div>
                <div>
                    <label>Telefone </label>
                    <div className='flex items-center'>
                        <input className='border-solid border-2 border-b-black rounded-md'/><AiOutlineSearch className='mr-2'/>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <label>CNPJ/CPF</label>
                    <div className='flex items-center'>
                        <input className='border-solid border-2 border-b-black rounded-md '/><AiOutlineSearch className='mr-2'/>
                    </div>
                </div>
                <div>
                    <label>Inst. Est./RG </label>
                    <div className='flex items-center '>
                        <input className='border-solid border-2 border-b-black rounded-md mr-2'/>
                    </div>
                </div>
                <div>
                    <label>Ins. Mun </label>
                    <div className='flex items-center'>
                        <input className='border-solid border-2 border-b-black rounded-md mr-2'/>
                    </div>
                </div>
                <div>
                    <label>Pessoa </label>
                    <div className='flex items-center'>
                        <select name='pessoa'>
                            <option value={"Física"}>Física</option>
                            <option value={"Jurídica"}>Jurídica</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex items-baseline'>
                <div className='flex flex-col'>
                    <label >Grupo</label>
                    <select name="grupo" id="">
                        <option value={"value1"}>value1</option>
                        <option value={"Value2"}>Value2</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label >Site</label>
                    <input className='border-solid border-2 border-b-black rounded-md mr-2' type="text" name="" id="" />
                </div>
                <div className='flex flex-col'>
                    <label >Email para NF-e</label>
                    <input className='border-solid border-2 border-b-black rounded-md mr-2' type="email" name="" id="" />
                </div>
            </div>
            <div className='flex flex-col'>
                <label>Observações:</label>
                <textarea className='resize-none h-16 border-solid border-2 border-black rounded-md' ></textarea>
            </div>
            <footer>
            <div className='flex flex-col mt-2 border-solid border-2 border-t-black border-l-transparent border-r-transparent '>
                    <div className="m-4 h-10 ">
                        <ul className="flex ">
                            <li>
                                <button onClick={()=>setOptionSelectedClient('adress')} style={{background: `${optionSelectedClient ==='adress'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='adress'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> Endereços/Observações </button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelectedClient('info')} style={{background: `${optionSelectedClient ==='info'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='info'?'#FFF' : ''}` }}  className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all">Info. de Cobrança</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelectedClient('sales')} style={{background: `${optionSelectedClient ==='sales'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='sales'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all">Vendas/Ordens de Serviço</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelectedClient('other')} style={{background: `${optionSelectedClient ==='other'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='other'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all">Outros</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelectedClient('vcard')} style={{background: `${optionSelectedClient ==='vcard'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='vcard'?'#FFF' : ''}` }}  className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all">Vcard</button>
                            </li>
                            <li>
                                <button onClick={()=>setOptionSelectedClient('virtualcard')} style={{background: `${optionSelectedClient ==='virtualcard'?'#1e40af' : ''}`, borderRadius: '0.375rem', color: `${optionSelectedClient ==='virtualcard'?'#FFF' : ''}` }} className="flex p-1 mx-2 items-center hover:rounded-md hover:bg-blue-400 hover:text-white transition-all"> Carteiras Vituais</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {
                            optionSelectedClient === 'adress'?(
                            <>
                                <div className='flex flex-1'>
                                    <div className='flex flex-col flex-2'>
                                        <label className=''>CEP</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2' type="text" name="" id="" />
                                    </div>
                                    <div className='grid grid-cols-2 flex-1'>
                                        <label>Endereço</label>
                                        <label>Numero</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2 flex-4' type="text" name="" id="" />
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2 flex-1' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex flex-1 w-[100%] mt-2'>
                                    <div className='flex flex-1 flex-col mb-4 '>
                                        <label>Complemento</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col '>
                                        <label>Bairro</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Cidade</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col '>
                                        <label>UF</label>
                                        <input className='border-solid border-2 border-b-black rounded-md mr-2 w-10' type="text" name="" id="" max={2} />
                                    </div>
                                </div> 
                            </>  
                            ):('')
                        }
                        {
                            optionSelectedClient === 'info'?(
                            <>
                                <div className='flex'>
                                    <div className='flex flex-col w-[100%] mb-2 '>
                                        <label>Observação de cobrança</label>
                                        <textarea name="" id="" className='h-28 resize-none'></textarea>
                                    </div>
                                </div>
                            </> 
                            ):('')
                        }
                        {
                            optionSelectedClient === 'sales'?(
                            <div>Contatos</div>    
                            ):('')
                        }
                        {
                            optionSelectedClient === 'other'?(
                            <div>Fornecedores</div>    
                            ):('')
                        }
                        {
                            optionSelectedClient === 'vcard'?(
                            <div>Tecnicos</div>    
                            ):('')
                        }
                        {
                            optionSelectedClient === 'virtualcard'?(
                            <div>Serviços</div>    
                            ):('')
                        }
                    </div>
                </div>

            </footer>

        </div>
    )
};

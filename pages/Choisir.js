const Choisir = () => {
    return ( <div>
        <hr className=" border-[1px] border-[#D0CFCE]"/>
        <div className=" flex justify-center mt-14">
            <h3 className=" font-extrabold text-[40px]">Pourquoi choisir Cpefed ?</h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 mt-14">
            <div className="row-span-2  ">
                <div className=" rounded-[20px] pt-10 p-8 border-[1px] border-[#74b5ff] bg-white w-[490px] h-[334px] hover:drop-shadow-2xl ">
                <h3 className=" text-[25px] font-extrabold">Des formations conçues par des<br/>
                     experts de la pédagogie</h3>
                <div>
                    <ul className=" list-disc p-5" >
                        <li className=" text-[18px] font-light">Formats variés : vidéos, cours, QCM, fiches <br/>
                            synthèses, exercices.</li>
                        <li className=" text-[18px] font-light">Large place à la pratique : projets tutorés, mises <br/>
                            en situation professionnelle…</li>
                    </ul>
                </div>
                <div className=" grid place-items-end">
                    <div className=" border-[2px] border-[#1AD079] bg-white w-[199px] h-[48px] rounded-xl flex float-end mt-3">
                        <button type="submit" className="  w-[159px] h-[40px] m-0.5 rounded-[10px] bg-[#1AD079] text-white transition-width duration-1000 hover:w-[165px]">Candidater</button>
                        <div className="flex items-center pl-3 " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
                            <path fill="#1AD079" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div >
                <div className=" rounded-[20px] pt-8 p-8 border-[1px] border-[#74b5ff] bg-white w-[490px] h-[190px] hover:drop-shadow-2xl ">
                <div>
                <h3 className="text-[25px] font-extrabold">Une formation qui s'adapte à vos <br/>
                besoins... c'est vous qui décidez !</h3>
                </div>
                <div className=" border-[2px] border-[#0073F5] bg-white w-[199px] h-[48px] rounded-xl flex float-end mt-3">
                    <button type="submit" className="  w-[159px] h-[40px] m-0.5 rounded-[10px] bg-[#0073F5] text-white transition-width duration-1000 hover:w-[165px]">Candidater</button>
                    <div className="flex items-center pl-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
                        <path fill="#0073F5" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
                        </svg>
                    </div>
                </div>
                </div>
            </div>
            <div className="row-span-2 col-start-2">
                <div className="rounded-[20px] pt-8 p-8 border-[1px] border-[#74b5ff] bg-white w-[490px] mt-[46px] h-[334px] hover:drop-shadow-2xl ">
                <div>
                    <h3 className="text-[25px] font-extrabold">Un apprentissage avec <br/>
                    des (vrais) humains</h3>
                </div>
                <div>
                    <ul className="list-disc p-5">
                        <li className=" text-[18px] font-light">Suivi par notre équipe de tuteurs : email, <br/>
                            téléphone, chat et visioconférence.</li>
                        <li className=" text-[18px] font-light">Tutorat par des professeurs : correction de <br/>
                            devoirs, coaching, simulation d'oraux...</li>
                    </ul>
                </div>
                <div className=" border-[2px] border-[#1AD079] bg-white w-[199px] h-[48px] rounded-xl flex float-end mt-3">
                    <button type="submit" className="  w-[159px] h-[40px] m-0.5 rounded-[10px] bg-[#1AD079] text-white transition-width duration-1000 hover:w-[165px]">Candidater</button>
                    <div className="flex items-center pl-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
                        <path fill="#1AD079" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
                        </svg>
                    </div>
                </div>
                </div>
            </div>
            <div className="row-start-3 ">
                <div className="rounded-[20px] pt-8 p-8 border-[1px] border-[#74b5ff] bg-white w-[490px] h-[190px] hover:drop-shadow-2xl hover:shadow-[#74b5ff] ">
                <div>
                    <h3 className="text-[25px] font-extrabold">Une formation qui s'adapte à vos <br/>
                    besoins... c'est vous qui décidez !</h3>
                </div>
                <div className=" border-[2px] border-[#0073F5] bg-white w-[199px] h-[48px] rounded-xl flex float-end mt-3">
                    <button type="submit" className="  w-[159px] h-[40px] m-0.5 rounded-[10px] bg-[#0073F5] text-white transition-width duration-1000 hover:w-[165px]">Candidater</button>
                    <div className="flex items-center pl-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
                        <path fill="#0073F5" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
                        </svg>
                    </div>
                </div>
                </div>
            </div>
        </div>
            
    </div> );
}
 
export default Choisir;
const Inscriver = () => {
    return ( <div className=" flex justify-center">
        <div className="flex justify-center border-[1px] rounded-[30px] border-[#0072f581] px-36 py-10 my-20">
            <div className="text-center">
                <h4 className=" font-extrabold text-[35px]">Inscrivez vous dès maintenant chez Cpefed</h4>
                <p className=" text-[15px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    <div className="flex justify-center">
                        <div className=" border-[2px] border-[#1AD079] bg-white w-[199px] h-[48px] rounded-xl flex  mt-3">
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
    </div> );
}
 
export default Inscriver;
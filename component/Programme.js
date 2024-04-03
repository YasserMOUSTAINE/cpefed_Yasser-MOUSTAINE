const Programme = () => {
    return ( 
        <>
        <div className=" grid grid-cols-2">
            <div className=" col-span-1">
                <div className=" w-[548px] h-[40px] ">
                    <h3 className=" text-7xl font-extrabold ">Le programme</h3>
                </div>
                <div>
                    <h5>Résumé</h5>
                </div>
                <div>
                    <p>Le programme prépare à toutes les épreuves<br/>
                        du concours. Vous disposez d’une remise à<br/>
                        niveau, de cours, d’exercices pratiques, de<br/>
                        QCM, de sujets blancs et de simulations<br/>
                        d'oraux blancs avec des professeurs jury du<br/>
                         concours.</p>
                </div>
                <div className=" bg-white w-[203.7px] h-[45.04px] rounded-xl flex  mt-3">
                  <button type="submit" className="  w-[162.76px] h-[40.95px] m-0.5 rounded-[10px] bg-[#0073F5] text-white transition-width duration-1000 hover:w-[170px]">Candidater</button>
                  <div className="flex items-center pl-3 " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
                      <path fill="#0073F5" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
                    </svg>
                  </div>
               </div>
            </div>
            <div className="col-span-1">
                <div>
                    <h5>Compétences et acquis</h5>
                </div>
                <div>
                    <ul>
                        <li>Connaissance du système éducatif</li>
                        <li>Mathématiques</li>
                        <li>Français : étude de la langue et composition écrite</li>
                        <li>Épreuve d'application</li>
                        <li>Épreuve de leçon</li>
                        <li>Entretien de motivation</li>
                        <li>EPS</li>
                        <li>Langues (anglais)</li>
                    </ul>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Programme;
const Programme2 = () => {
    return ( <div className=" grid grid-cols-2  pt-1 w-[1007px] h-[370px] mb-44">
    <div className=" col-span-1 inline-grid ">
        <div className=" w-[548px] h-[40px] mt-20 ">
            <h3 className=" text-[45px] font-extrabold ">Le programme</h3>
        </div>
        <div className=" w-[428px] h-[40px] mt-16 ">
            <h5 className=" text-[20px] font-extrabold ">Résumé</h5>
        </div>
        <div className=" w-[428px] h-[145px]   ">
            <p className="text-[20px] font-light">Le programme prépare à toutes les épreuves<br/>
                du concours. Vous disposez d’une remise à<br/>
                niveau, de cours, d’exercices pratiques, de<br/>
                QCM, de sujets blancs et de simulations<br/>
                d'oraux blancs avec des professeurs jury du<br/>
                 concours.</p>
        </div>
        <div className="mt-12">
        <div className=" bg-white w-[199px] h-[44px] rounded-xl flex  mt-3 border-[#1AD079] border-2">
          <button type="submit" className="  w-[159px] h-[36px] m-0.5 rounded-[10px] bg-[#1AD079] text-white transition-width duration-1000 hover:w-[165px]">Candidater</button>
          <div className="flex items-center pl-3 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" fill="none" viewBox="0 0 8 13" className="grid content-center">
              <path fill="#0073F5" d="m1.226 10.506 3.972-3.972-3.972-3.972A1.02 1.02 0 1 1 2.669 1.12l4.699 4.699a1.02 1.02 0 0 1 0 1.443L2.669 11.96c-.399.4-1.044.4-1.443 0a1.039 1.039 0 0 1 0-1.453Z"/>
            </svg>
          </div>
       </div>
        </div>
    </div>
    <div className="col-span-1 ml-10">
        <div className="w-[428px] h-[40px] mt-[188px]">
            <h5 className="text-[20px] font-extrabold">Compétences et acquis</h5>
        </div>
        <div className=" w-[462px] h-[250px] ml-8 ">
            <ul className="list-disc ">
                <li className="li-programme">Connaissance du système éducatif</li>
                <li className="li-programme">Mathématiques</li>
                <li className="li-programme">Français : étude de la langue et composition écrite</li>
                <li className="li-programme">Épreuve d'application</li>
                <li className="li-programme">Épreuve de leçon</li>
                <li className="li-programme">Entretien de motivation</li>
                <li className="li-programme">EPS</li>
                <li className="li-programme">Langues (anglais)</li>
            </ul>
        </div>
    </div>

</div> );
}
 
export default Programme2;
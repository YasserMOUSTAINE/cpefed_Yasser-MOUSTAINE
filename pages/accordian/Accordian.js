import AccordianList from "./AccordianList";
//import Data from "./Data";
import { useState } from "react";

const Accordian = () => {
    
    const Data=[
        {
            id:1,
            question:"amet, consectetur adipiscing elit, sed do eiusmod te",
            reponse: "The Institute is a top institution in the Middle East and North Africa forto international students and professionals. It offers tailored courses and cultural immersion programs, introducing participants to and Moroccan culture."
        },
        {
            id:2,
            question:"amet, consectetur adipiscing elit, sed do eiusmod te",
            reponse: "The Institute is a top institution in the Middle East and North Africa forto international students and professionals. It offers tailored courses and cultural immersion programs, introducing participants to and Moroccan culture."
        },
        {
            id:3,
            question:"amet, consectetur adipiscing elit, sed do eiusmod te",
            reponse: "The Institute is a top institution in the Middle East and North Africa forto international students and professionals. It offers tailored courses and cultural immersion programs, introducing participants to and Moroccan culture."
        }
    ]

    const [touch,setTouch]=useState(null);
    let handleTouch=(id)=>{
        if(touch===id){
            setTouch(null);
            return false
        }
        setTouch(id)
    }


    return ( 
        <div className=" container mx-auto">
            <div className=" grid grid-cols-1 md:col-span-1">
                <h3 className=" text-center text-[45px] text-white font-extrabold mb-5 mt-7">Questions fréquentes</h3>
                <AccordianList Data={Data} handleTouch={handleTouch} touch={touch}/>
            </div>
        </div>
     );
}
 
export default Accordian;
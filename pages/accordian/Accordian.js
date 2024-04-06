import AccordianList from "./AccordianList";
import Data from "../../component/Data";
import { useState } from "react";

const Accordian = () => {
    
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
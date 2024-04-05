import Accordian from "./accordian/Accordian";

const Questions = () => {
    return ( 
    <div >
        <div>
            
            <div className=" flex justify-center pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="relative top-3" width="1176" height="102" fill="none" viewBox="0 0 1176 102">
                    <path fill="#1D1B31" d="M153 .5 0 64.5v27L1165 102l10.5-26.5-36.5-43L941.5.5 773 64.5l-34-23L542.5.5l-178 64L153 .5Z"/>
                </svg>
            </div>

           <div className=" h-[736px] bg-[#1D1B31]">
                <Accordian/>
           </div>

        </div>
    </div> );
}
 
export default Questions;
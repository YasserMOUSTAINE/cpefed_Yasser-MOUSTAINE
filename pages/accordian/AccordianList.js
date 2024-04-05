const AccordianList = ({Data,handleTouch,touch}) => {

    return ( 
        Data.map((value)=>{
            const{id,question,reponse}=value;
            return(
                <div className=" bg-white border border-gray-200 rounded-[30px] shadow-md w-[934px] p-3  my-1 " key={id}>
                    <div className=" cursor-pointer bg-white  px-4 py-2 flex justify-between items-center  text-[20px] font-bold " onClick={()=>handleTouch(id)}>
                        <p>  {question} </p>
                        <div className=" float-end "><span className="text-[30px] flex "> {(id===touch)?"-":"+"}</span></div>
                    </div>
                    {(id===touch)&& <div className="px-5 pt-5 pb-16 text-[20px] font-light "> {reponse}</div>}
                </div>
            )
        })
    );
}
 
export default AccordianList;
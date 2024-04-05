
import Login2 from "./Login2";
import Formation from "./Formation";
import Programme2 from "./Programme2";
import Login1 from "./Login1";
import Choisir from "./Choisir";
import Questions from "./Questions";
import Inscriver from "./inscrivez";


export default function Home() {
  return (
    <>
    
    <div className=" " >
      <div className=" h-[850px] ">
        <div className=" bg-[#1D1B31] h-[670px] rounded-bl-[150px] " >
          <Login1/>
        </div>
      </div>
      </div>
      <Programme2/>
      <Formation/>
      <Login2/>
      <Choisir/>
      <Questions/>
      <Inscriver/>
    
    
    </>
  );
}

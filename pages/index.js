import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Programme from "@/component/Programme";
import Yasser from "../compos/Yasser";
import Login2 from "./Login2";
import Formation from "./Formation";
import Programme2 from "./Programme2";
import Login1 from "./Login1";
import Choisir from "./Choisir";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
    <div className=" bg-[#1D1B31] h-[670px] rounded-bl-[150px] flex justify-center ">
      <div>
      <Login1/>
      <Programme2/>
      <Formation/>
      <Login2/>
      <Choisir/>
      </div>
      
    </div>
            
        
       
      


    </>
  );
}

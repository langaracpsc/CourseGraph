"use client"
import UserDefault from "@/../assets/profiledefaultimg";
import { UseProfilePage } from "../../../support/zustand";






export default function PageTopProfile(){
  
    return(<>

      
            <div className="flex flex-row justify-center align-center w-screen h-max gap-5 p-5 border-b-2 border-orange-600">

                <div className=" flex  flex-row justify-baseline">
                
                <UserDefault/>
               
                <div  className="flex flex-col  justify-center items-baseline">
                    <h1 className="  text-white w-fit text-lg stroke-white">Serhii Cs Studentdnwjnqjwndjn</h1>
                    <p className="text-white text-[12px]">Computer Science</p>
                </div>
                </div>

            </div>
            <div></div>


  
    
    </>)

}
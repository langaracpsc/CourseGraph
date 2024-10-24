"use client"
import { UseProfilePage } from "../../../support/zustand";
import { CardWithForm } from "./cardaddtest";
import TestScores from "./testscores";
import PageTopProfile from "./topProfile";




export default function PageComponent(){
    const StateTester = UseProfilePage((state)=>state.openBanner)
    
    return(<>
        <div className="flex flex-col justify-top  items-center w-screen h-screen">

            {StateTester? <div className="flex flex-col justify-center z-20 absolute items-center w-screen h-screen">
                <CardWithForm/>
            </div>: <></>}
            <PageTopProfile/>
            <TestScores/>
            
        </div>
    </>)

}
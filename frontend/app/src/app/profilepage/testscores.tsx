

  import  TestScore  from "@/app/profilepage/testscorecard"
import { ButtonWithPlusIcon } from "@/components/ui/buttonWithPlus"


interface testObj{
    score:string
    name:string
}
const arr:Array<testObj> = [{
    score:"10",
    name:"TOELF",
},{
    score:"10",
    name:"TOELF",
},{
    score:"10",
    name:"TOELF",
},{
    score:"10",
    name:"TOELF",
},{
    score:"10",
    name:"TOELF",
}]


export default function TestScores(){


    return(<>
    
    <div className="w-screen h-screen p-5  flex gap-5 flex-col">
        <h1 className="text-white text-lg">Test Scores:</h1>

        <div className=" w-full h-max flex flex-row justify-center gap-5 items-center">
            <div className=" w-auto h-fit flex flex-wrap flex-row justify-center max-[758px]:justify-start gap-5 items-center">
            {
                arr.map((_obj:testObj, _index:number)=> (<TestScore key={ _index} score={ _obj.score} name={ _obj.name}/>))
            }
            </div>
        
        </div>
       

        <div className=" w-12/12 h-12/12 flex justify-center items-end">
            <ButtonWithPlusIcon    title={"Add Test Score"}/>
        </div>


    </div>
    
    </>)
}
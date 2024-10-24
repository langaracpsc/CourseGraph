

interface testObj{
    score:string
    name:string
    key:number
}


export default function TestScore(prop:testObj){

    return(<>

        <div key={prop.key} className="border w-32  flex justify-center items-center  h-20 rounded-md bg-white ">

            <h1 className="text-orange-600  font-bold" >{prop.name} : {prop.score}</h1>

        </div>


    
    
    </>)


}
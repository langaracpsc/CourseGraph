
import { NumberValue } from 'd3'
import { create } from 'zustand'

type Store = {
  openBanner: boolean
  openTheBanner: () => void
}


type Graph ={
  
    data: NumberValue[],
    width:number,
    height:number,
    marginTop:number,
    marginRight:number,
    marginBottom : number,
    marginLeft :number
  
}

//Add test section with backend this will be processed in the backend
const UseProfilePage = create<Store>()((set) => ({
  openBanner: false,
  openTheBanner: () => set((state) => ({ openBanner: !state.openBanner })),

}))


const UseGraph = create<Graph>()(()=> ({
  
  data:[12,1],
  width: typeof global.innerWidth === undefined ? 1000 : global.innerWidth,
  height:typeof global.innerHeight === undefined ? 1000 : global.innerHeight,
  marginTop:20,
  marginRight:20,
  marginBottom : 20,
  marginLeft :20

}))



export {
  UseProfilePage,
  UseGraph
}
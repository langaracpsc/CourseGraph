
import { create } from 'zustand'

type Store = {
  openBanner: boolean
  openTheBanner: () => void
}

type Graph ={
  
    data: [undefined, undefined] | [string, string],
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

const UseGraph = create<Graph>()((set)=> ({

  data:["12","1","400","100","300"],
  width:window.innerWidth,
  height:window.innerHeight,
  marginTop:20,
  marginRight:20,
  marginBottom : 20,
  marginLeft :20

}))



export {
  UseProfilePage,
  UseGraph
}
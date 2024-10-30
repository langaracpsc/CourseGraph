"use client"
import { CirclePlus } from "lucide-react"



import { Button } from "@/components/ui/button"
import { UseProfilePage } from "../../../support/zustand"

interface Props{
    title:string
}

export function ButtonWithPlusIcon(propsDown:Props) {
  const ShowBanner = UseProfilePage((state) => state.openTheBanner)
  return (
    <>
    <div >
    <Button onClick={(_e)=>ShowBanner()} className="hover:bg-orange-600 hover:text-white"  >
      <CirclePlus className="mr-2 h-4 w-4 " /> {propsDown.title}
    </Button>
    </div>
    </>
  )
}

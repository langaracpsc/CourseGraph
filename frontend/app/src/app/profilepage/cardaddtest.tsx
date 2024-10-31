import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UseProfilePage } from "../../../support/zustand"


export function CardWithForm() {
  const ShowBanner = UseProfilePage((state) => state.openTheBanner)

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>What Exam did you take?</CardTitle>
        <CardDescription>Here you can choose the accepted tests at Langara College that will open new classes for you</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <Label htmlFor="name">Score</Label>
          <Input id="name" placeholder="Name of your project" />

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Test Options</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                {/** Integrate this with tests coming from the backend */}
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button className=" hover:bg-orange-600  bg-black text-white hover:text-black" onClick={()=>ShowBanner()} variant="outline">Cancel</Button>
        <Button className=" hover:bg-orange-600  bg-black text-white hover:text-black" >Add +</Button>
      </CardFooter>
    </Card>
  )
}

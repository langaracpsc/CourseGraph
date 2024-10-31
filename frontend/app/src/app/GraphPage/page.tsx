"use client"

import * as d3 from "d3";
import { UseGraph } from "../../../support/zustand";




export default function MainAttraction() {
    const UseInfoAboutTheGraph = UseGraph((state) => state)
    const x = d3.scaleLinear([0, UseInfoAboutTheGraph.data.length - 1], [UseInfoAboutTheGraph.marginLeft, UseInfoAboutTheGraph.width - UseInfoAboutTheGraph.marginRight]);
    const y = d3.scaleLinear(d3.extent(UseInfoAboutTheGraph.data ) as Iterable<d3.NumberValue>  , [UseInfoAboutTheGraph.height - UseInfoAboutTheGraph.marginBottom, UseInfoAboutTheGraph.marginTop]);
    const line = d3.line((d, i) => x(i), y);
    return (<>
        <div className=" flex justify-center items-center w-screen h-screen">
        <svg fill="white" className=" fill-white text-orange-400" width={UseInfoAboutTheGraph.width} height={UseInfoAboutTheGraph.height}>
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(UseInfoAboutTheGraph.data) as string | undefined} />
            <g fill="white" stroke="currentColor" strokeWidth="1.5">
                {UseInfoAboutTheGraph.data.map((d: d3.NumberValue, i:  string | number | bigint | null | undefined) => (<circle key={i} cx={x(i as d3.NumberValue )} cy={y(d)} r="28" />))}
            </g>
        </svg>
        </div>
        </>
    );

}
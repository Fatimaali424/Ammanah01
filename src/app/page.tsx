import OurAims from "@/components/aims";
import CoreValues from "@/components/coreValues";
import Hero from "@/components/hero";
import Summary from "@/components/summary";
import React from "react";

export default function Page(){
  return(
    <div>
      <Hero/>
      <hr className="h-2 "/>
      <Summary/>
      <hr className="h-2 "/>
      <OurAims/>
      <hr className="h-2 "/>
      <CoreValues/>
    </div>
  )
}
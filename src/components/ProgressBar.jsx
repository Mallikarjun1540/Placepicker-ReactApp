import { useState, useEffect } from "react";

export default function ProgressBar({timer}){
    const [remainingTime,setRemainingTime]=useState(timer);

    useEffect(()=>{
        const interval=setInterval(()=>{
          setRemainingTime((prevTime)=>
            prevTime-20
          )
        },20)
        return ()=>{
          clearInterval(interval);
        }
      },[]);
 return (<progress max={timer} value={remainingTime}/>);
}
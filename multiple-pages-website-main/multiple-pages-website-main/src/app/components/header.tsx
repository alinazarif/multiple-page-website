import Link from "next/link";
import React from "react";

export default function Header(){
    return(
        <div>
            <div className="h-[10px] text-2xl text-white">Coffee</div>
            <ul className="flex justify-end items-center gap-10 text-white ">
                <li className="h-[160px] w-[60px]"><Link href={"/"}>Home</Link></li>
                <li className="h-[160px] w-[60px]"><Link href={"/about"}>About</Link></li>
                <li className="h-[160px] w-[60px]"><Link href={"/menu"}>Menu</Link></li>
                <li className="h-[160px] w-[60px]"><Link href={"/contact"}>contact</Link></li>
                 </ul>
        </div>
    )
}
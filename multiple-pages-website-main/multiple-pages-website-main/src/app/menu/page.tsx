import React from "react";

export default function Menu(){
    return(
        <div>
            <h1 className="text-4xl text-white mt-2 font-bold mx-[600px]">MENU</h1>
            <ul className="grid grid-cols-2 mt-8">
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">Black</li>
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">espresso</li>
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">cuppucino</li>
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">latte</li>
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">mocha</li>
                <li className="text-2xl text-white mt-10 font-bold mx-[300px]">americano</li>
            </ul>
           </div>
    )
}
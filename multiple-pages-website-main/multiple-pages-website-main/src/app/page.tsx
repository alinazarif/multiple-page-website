import Image from "next/image";
import React from "react";

export default function Home(){
    return(
        <div>
                 {/* Title*/}
            <h1 className="text-yellow-700 text-2xl font-semibold ml-10">
              Best Coffee  
              </h1>

              <br />
                   {/*Heading*/}
              <h2 className="font-bold">
              <pre className="text-white text-5xl ml-10 text-pretty">
                Make Your Day Great With Our 
                <br/>
                Special Coffee!
              </pre>
            </h2>
                 
            <br/>
               {/*Paragraph*/}
               <div className="text-white ml-10">
                <h2>
                  <p> coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee 
                    <br />
                    plants of African origin. Coffee is one of the three most popular beverages in the world 
                    <br />
                    (alongside water and tea) and one of the most profitable international commodities.
                  </p>
                </h2>
               </div>

                  {/*Image*/}
            <div className="imageContainer ml-96 ">
            <Image
            src="coffee-dark-table-red-wall-minimalism-high-resolution_599292-983.jpg "
            alt="image"
            width={700}
            height={700}
            className="ml-96 rounded-full flex justify-end "/>
            </div>

                  {/*Button*/}
            <button className="text-white hover:text-white hover:bg-yellow-600 rounded-full border h-[50px] w-[150px] ml-10 ">
                 <a href="#!"> Explore Now </a>
            </button>
            
            <button className="text-white hover:text-white hover:bg-yellow-600 rounded-full border h-[50px] w-[150px] ml-10 ">
                <a href="#!"> Contact Us </a>
            </button>
        </div>
    ) 
}
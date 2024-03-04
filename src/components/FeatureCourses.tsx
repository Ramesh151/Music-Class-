"use client";

import Link from "next/link"
import coursedata from "../data/music_course.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface course{
  
    id: number ,
    title: string,
    slug: string,
    description: string,
    price:number,
    instructor: string,
    isFeatured: boolean,
    
  }


function FeatureCourses() {
 const featureCourse= coursedata.courses.filter((cour:course)=>cour.isFeatured)
  return (

    <div className=" py-12 bg-gray-800">
      <div>
        <div className=" text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSE</h2>
           <p  className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Learn With Best books</p> 
         </div>
       </div> 

        <div className="mt-10 mx-8 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
   {/* map feature product */}
          {featureCourse.map((cou:course)=>(
            <div className="flex justify-center" key={cou.id}>
               <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
     
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {cou.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-3">{cou.description}</p>
        <Link href={`/courses/${cou.slug}`}>
            Learn More
             </Link>
      </BackgroundGradient>
            </div>
          ))}

        </div>
        </div>

        <div className="mt-20 text-center">
        <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  )
}

export default FeatureCourses

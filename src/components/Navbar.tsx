"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>

    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
         
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className=" flex flex-col space-y-3 text-sm">
        <HoveredLink href="/courses">All courses</HoveredLink>
        <HoveredLink href="/courses">Advance Composition</HoveredLink>
        <HoveredLink href="/courses">Basic Music</HoveredLink>
        <HoveredLink href="/courses">Song Writing</HoveredLink>
        <HoveredLink href="/courses">Music Introduction</HoveredLink>
          </div>
       
        </MenuItem>

       <Link href={'/contacts'}>
       <MenuItem setActive={setActive} active={active} item="Contacts">
         
         </MenuItem>
       </Link>

      </Menu>
    
    </div>

    </>
  )
}

export default Navbar

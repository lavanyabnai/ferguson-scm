"use client";

import Image from "next/image";
import Link from "next/link";

import { MobileSidebar } from "@/components/mobile-sidebar";
// import { GlobalSearch } from "@/components/global-search";


import {
  ShieldAlert,
  Activity,
  Network,
  ClipboardList,
  Map,
  Radio,
} from "lucide-react"

import { MegaDropdownCategories } from "@/components/mega-dropdown-categories";
import { UserButton, useUser } from "@clerk/nextjs";


export const HeaderBlue = () => {
  const { user } = useUser();

  const categories = [
    {
      category: "Digital Twin",
      items: [
        {
          name: "Digital Twin",
          description: "A end to end simulation model of your Network",
          to: "/risk/analysis",
          icon: ShieldAlert,
          highlight: true,
          iconBackground: "bg-blue-100",
          iconForeground: "text-blue-700",
        },

        {
          name: "Simulation",
          description: "Manage your simulation",
          to: "/simulation/supplyChain",
          icon: Activity,
          iconBackground: "bg-red-100",
          iconForeground: "text-red-700",
        },
        {
          name: "Network Optimization",
          description: "Manage your Network",
          to: "/net-optimize/map",
          icon: Network,
          iconBackground: "bg-yellow-100",
          iconForeground: "text-yellow-700",
        },
        {
          name: "Supply Chain Planning",
          description: "Manage your Supply Chain",
          to: "/planning/prodPlan",
          icon: ClipboardList,
          iconBackground: "bg-purple-100",
          iconForeground: "text-purple-700",
        },
        {
          name: "Logistics Analyzer",
          description: "Manage your Transportation and Warehousing costs",
          to: "/others/leadMap",
          icon: Map,
          iconBackground: "bg-emerald-100",
          iconForeground: "text-emerald-700",
        },
        {
          name: "Control Tower",
          description: "Monitor and manage your end-to-end supply chain",
          to: "/control-tower",
          icon: Radio,
          iconBackground: "bg-orange-100",
          iconForeground: "text-orange-700",
        },
      ],
    },

  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
    <nav className="py-2 px-6 flex items-center justify-between bg-blue-900">
      <div className="flex items-center gap-x-2">
        <MobileSidebar />
       <Link href="/" className="flex items-center gap-2">
       <Image className="block lg:hidden" src="/assets/logo.png" alt="logo" width={60} height={60} />
        <Image className="hidden lg:block" src="/assets/logo.png" alt="logo" width={40} height={40} />
        <Image className="hidden lg:block" src="/assets/white-logo.png" alt="logo" width={180} height={60} />
        {/* <h1 className="hidden lg:block font-sans text-2xl font-bold text-[#05022d]">BlueNorth AI</h1> */}
      </Link>
      {/* <div className="ml-6">
        <h1 className="text-2xl font-semibold">
          {title}
        </h1>
        <p className="hidden lg:block text-muted-foreground">
          {description}
        </p>
      </div> */}
      </div>
      {/* <GlobalSearch /> */}
      <div className="flex items-center gap-x-4">
     
    
   
      {user && (
        <span className="text-sm font-medium text-white font-sans">
          {user.firstName}{user.lastName ? ` ${user.lastName}` : ""}
        </span>
      )}
      <UserButton appearance={{
        elements: {
          avatarBox: "size-10",
        },
      }} />

      {/* <MegaDropdown dropdown={dropdownItems} /> */}
      {/* <MegaDropdownCard dropdown={dropdownItems} /> */}

      <MegaDropdownCategories categories={categories} />
      </div>
    </nav>
    </header>
  );
};

"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Map,
  BarChart3,
  Warehouse,
  Truck,
  Globe,
  Flag,
  LayoutDashboard,
  Package
} from "lucide-react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const sidebarMenu = [
  {
    id: 1,
    name: "Distribution Network",
    icon: Map,
    to: "/others/leadMap",
  },
  {
    id: 2,
    name: "Route Costs",
    icon: BarChart3,
    to: "/others/ptpk",
  },
  {
    id: 3,
    name: "DC Costing",
    icon: Warehouse,
    to: "/others/kpi",
  },
  {
    id: 4,
    name: "Logistics Dashboard",
    icon: LayoutDashboard,
    to: "/others/logi",
  },
  {
    id: 5,
    name: "Domestic Freight",
    icon: Truck,
    to: "/others/transportCost",
  },
  {
    id: 6,
    name: "China Import",
    icon: Globe,
    to: "/others/chinavr",
  },
  {
    id: 7,
    name: "Fleet Analysis",
    icon: Flag,
    to: "/others/transAnalysis",
  },
  {
    id: 8,
    name: "DC Operations",
    icon: Package,
    to: "/others/warehouseAnalysis",
  }
]

export default function Layout({children}:{children:React.ReactNode}) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/others"

  if (isLandingPage) {
    return <>{children}</>
  }

  return (
    <div>
      <div className="fixed w-[90px] border-r">
        <nav aria-label="Sidebar" className="h-screen py-2">
          <div className="flex flex-col space-y-1 px-2">
            {sidebarMenu.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.to
              return (
                <Link
                  key={item.id}
                  href={item.to}
                  prefetch={true}
                  className={classNames(
                    isActive ? "text-sky-500" : "text-slate-600 hover:text-slate-900",
                    "group flex flex-col items-center rounded-md p-2 overflow-x-hidden"
                  )}
                >
                  <div
                    className={classNames(
                      "flex h-12 w-12 items-center justify-center rounded-md",
                      isActive ? "bg-sky-50 text-sky-500" : "text-slate-600 group-hover:text-slate-900"
                    )}
                  >
                    <Icon className="size-7" />
                  </div>
                  <span className="mt-1 text-center text-[12px] font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>

      <div className="pl-[90px] mx-4">
        {children}
      </div>
    </div>
  );
}

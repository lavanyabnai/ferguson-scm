"use client"

import {
  Sparkles,
  Map,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Truck,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const sidebarMenu = [
  {
    id: 1,
    name: "AI",
    icon: Sparkles,
    to: "/net-optimize/ai",
  },
  {
    id: 2,
    name: "Network View",
    icon: Map,
    to: "/net-optimize/map",
  },
  {
    id: 3,
    name: "Cost to Serve",
    icon: DollarSign,
    to: "/net-optimize/cost-to-serve",
  },
  {
    id: 4,
    name: "Sensitivity Analysis",
    icon: BarChart3,
    to: "/net-optimize/sensitivity-analysis",
  },
  {
    id: 5,
    name: "Risk Mitigation",
    icon: ShieldCheck,
    to: "/net-optimize/risk-mitigation",
  },
  {
    id: 6,
    name: "Transport",
    icon: Truck,
    to: "/net-optimize/transportation",
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

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
  )
}

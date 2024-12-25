"use client"
import { Book, BookCheck,   Home,   Settings,  UserX2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items with active state handling
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Book,
  },
  {
    title: "Task",
    url: "/tasks",
    icon: BookCheck,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: UserX2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar className="fixed left-0 top-0">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-semibold">Project Management</span>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className=" flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <item.icon className="h-4 w-4 transition-colors  dark:group-hover:text-blue-400" />
                      <span className="transition-colors  dark:group-hover:text-blue-400">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
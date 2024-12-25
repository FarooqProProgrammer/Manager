"use client"
import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import AppSidebar from '../AppSidebar'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";







const SidebarComponentProvider = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default SidebarComponentProvider

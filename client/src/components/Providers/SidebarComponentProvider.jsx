"use client"
import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import AppSidebar from '../AppSidebar'



import '@syncfusion/ej2-base/styles/material.css';  
import '@syncfusion/ej2-buttons/styles/material.css';  
import '@syncfusion/ej2-calendars/styles/material.css';  
import '@syncfusion/ej2-dropdowns/styles/material.css';  
import '@syncfusion/ej2-inputs/styles/material.css';  
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import "@syncfusion/ej2-react-grids/styles/material.css";


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

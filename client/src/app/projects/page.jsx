"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const Page = () => {
    const [filterText, setFilterText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const data = [
        {
            id: 1,
            title: "Website Redesign",
            year: "2023",
            status: "In Progress",
            team: "Design Team",
            budget: "$15,000",
        },
        {
            id: 2,
            title: "Mobile App Development",
            year: "2022",
            status: "Completed",
            team: "Development Team",
            budget: "$50,000",
        },
        {
            id: 3,
            title: "Cloud Migration",
            year: "2024",
            status: "Planned",
            team: "IT Team",
            budget: "$30,000",
        },
        {
            id: 4,
            title: "Marketing Campaign",
            year: "2023",
            status: "In Progress",
            team: "Marketing Team",
            budget: "$20,000",
        },
    ];

    // Columns definition
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Year",
            selector: (row) => row.year,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
        {
            name: "Team",
            selector: (row) => row.team,
            sortable: true,
        },
        {
            name: "Budget",
            selector: (row) => row.budget,
            sortable: true,
        },
    ];

    // Filter logic
    useEffect(() => {
        const filtered = data.filter(
            (item) =>
                item.title.toLowerCase().includes(filterText.toLowerCase()) ||
                item.year.includes(filterText) ||
                item.status.toLowerCase().includes(filterText.toLowerCase()) ||
                item.team.toLowerCase().includes(filterText.toLowerCase()) ||
                item.budget.includes(filterText)
        );
        setFilteredData(filtered);
    }, [filterText]);

    const router = useRouter();

    return (
        <div className="md:px-10">
            <div className="p-4 space-y-3 border border-gray-300 shadow rounded-lg">

                <Button onClick={()=>router.push("/projects/create-projects")} className="float-right">Create Projects</Button>

                {/* Filter Input */}
                <input
                    type="text"
                    placeholder="Filter by any field"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    style={{ width: "100%" }}
                />

                {/* DataTable Component */}
                <DataTable
                    columns={columns}
                    data={filteredData.length > 0 ? filteredData : data}
                    pagination // Adds pagination
                    highlightOnHover // Highlights rows on hover
                    selectableRows // Adds selectable rows feature
                    selectableRowsHighlight // Highlights selected rows
                    fixedHeader // Fixes header for scrollable tables
                    fixedHeaderScrollHeight="400px" // Scroll height for fixed header
                />
            </div>
        </div>
    );
};

export default Page;

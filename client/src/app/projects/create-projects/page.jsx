"use client";
import { Button } from '@/components/ui/button';
import { DatePickerDemo } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';
import { EditorState } from 'draft-js'; // Import EditorState
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import styles for the editor

const CreateProjects = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state

    const onHandleDescription = (state) => {
        setEditorState(state); // Update editor state
    };

    return (
        <div className="grid md:px-10 px-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
            {/* PROJECT NAME */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Project Name</Label>
                <Input type="text" id="name" placeholder="Enter Project Name:" />
            </div>

            {/* PROJECT STATUS */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="status">Project Status</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* PROJECT PRIORITY */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="priority">Project Priority</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* PROJECT ASSIGNEE */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="assignee">Project Assignee</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Assignee" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                        <SelectItem value="user3">User 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* PROJECT START DATE */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="start-date">Project Start Date</Label>
                <DatePickerDemo />
            </div>

            {/* PROJECT END DATE */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="end-date">Project End Date</Label>
                <DatePickerDemo />
            </div>

            {/* PROJECT BUDGET */}
            <div className="grid w-full items-center gap-1.5 md:col-span-1 lg:col-span-1">
                <Label htmlFor="budget">Project Budget</Label>
                <Input type="number" id="budget" placeholder="Enter Budget ($)" />
            </div>

            {/* PROJECT CLIENT */}
            <div className="grid w-full items-center gap-1.5 md:col-span-1 lg:col-span-1">
                <Label htmlFor="client">Client Name</Label>
                <Input type="text" id="client" placeholder="Enter Client Name" />
            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="grid w-full max-w-full items-center gap-1.5 lg:col-span-3">
                <Label htmlFor="description">Project Description</Label>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName h-[200px] shadow overflow-hidden"
                    editorClassName="editorClassName"
                    onEditorStateChange={onHandleDescription}
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Button>Add Projects</Button>
            </div>
        </div>
    );
};

export default CreateProjects;

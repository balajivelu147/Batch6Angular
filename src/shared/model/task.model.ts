export interface task{
    due_date: string;
    message: string;
    priority: string;
    id: string;
    assigned_name: string;
    created_on: string; 
    remove: any;
    edit: any;
}

export interface taskResult {
    status: string;
    tasks: task[];
}

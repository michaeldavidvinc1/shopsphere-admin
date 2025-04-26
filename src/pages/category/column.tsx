// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Category } from "@/interface";
import { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown, Ban, Check, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { data, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constant";
// import { useChangeStatusCategoryMutation, useDeleteCategoryMutation } from "@/services/category.service";
import Swal from "sweetalert2"

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "no",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    No
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<Category> }) => row.index + 1,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Category
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<Category> }) => {
            const name = row.getValue<string>("name");
            const image = row.original.image?.url || "images/category-default.png";

            return (
                <div className="flex items-center space-x-2 ">
                    <img src={image} alt={name} className="w-10 h-10 rounded-md object-cover" />
                    <span>{name}</span>
                </div>
            );
        }
    },
    // {
    //     accessorKey: "status",
    //     header: "Status",
    //     cell: ({ row }: { row: Row<Category> }) => {
    //         const status = row.getValue<string>("status");

    //         return <Badge variant={status === 'ACTIVE' ? 'active' : 'destructive'} className="capitalize">{status.toLowerCase()}</Badge>
    //     }
    // },
    {
        id: "actions",
        cell: ({ row }: { row: Row<Category> }) => {
            const navigate = useNavigate();
            const dataRow = row.original;
            // const [deleteCategory] = useDeleteCategoryMutation();
            // const [changeStatusCategory] = useChangeStatusCategoryMutation();

            const handleEdit = (slug: string) => {
                navigate(ROUTES.UPDATE_CATEGORY(slug))
            }

            const handleDelete = (slug: string) => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You cannot undo this data again!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete",
                    cancelButtonText: "Cancel",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        console.log(result)
                        // const res = await deleteCategory(slug).unwrap();
                        // if (res.success) {
                        //     toast.success(res.message);
                        // }
                    }
                });
            };

            // const changeStatus = (slug: string) => {
            //     Swal.fire({
            //         title: "Change status this data?",
            //         // text: "You cannot undo this data again!",
            //         icon: "warning",
            //         showCancelButton: true,
            //         confirmButtonColor: "#3085d6",
            //         cancelButtonColor: "#d33",
            //         confirmButtonText: "Yes",
            //         cancelButtonText: "Cancel",
            //     }).then(async (result) => {
            //         if (result.isConfirmed) {
            //             const res = await changeStatusCategory(slug).unwrap();
            //             if (res.success) {
            //                 toast.success(res.message);
            //             }
            //         }
            //     });
            // };
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <span
                                className=" flex gap-2 items-center cursor-pointer"
                                onClick={() => handleEdit(dataRow.slug)}
                            >
                                <Edit className="w-4" /> Edit
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span
                                className=" flex gap-2 items-center cursor-pointer text-red-500"
                                onClick={() => handleDelete(dataRow.slug)}
                            >
                                <Trash2 className="w-4 text-red-500" /> Delete
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

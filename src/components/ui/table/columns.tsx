"use client"

import { ColumnDef } from "@tanstack/react-table"


export type Tablo = {
    id: string
    name: string
    yanıtlar: number
    durum: "Bitti" | "Taslak"
    email: string
}

export const columns: ColumnDef<Tablo>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Form Adı",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "yanıtlar",
        header: "Yanıtlar",
    },
    {
        accessorKey: "durum",
        header: "Durum",
    },

]

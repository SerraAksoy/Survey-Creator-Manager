'use client';  // Bu bileşenin istemci tarafında çalıştığını belirtir
import Link from "next/link";
import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
    userName: string;
};

const DropdownUserMenu = ({ userName }: Props) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={"text-gray-600 "} onClick={toggleDropdown}>{userName}
            </DropdownMenuTrigger>
            {isDropdownOpen && (
                <DropdownMenuContent>
                    <DropdownMenuLabel>Menü</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem> <Link href="/forms">Formlarım</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/settings">Ayarlar</Link></DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
};

export default DropdownUserMenu;

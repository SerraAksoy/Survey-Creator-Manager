import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import {Library, Home, Plus, ChartColumn, Settings} from "lucide-react"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import FormGenerator from "@/form-generator";

export function AppSidebar() {

    return (
        <Sidebar collapsible="icon" variant={"floating"} >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Seçenekler</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuButton asChild isActive={false}>
                                <a href="./">
                                    <Home />
                                    <span>Ana Sayfa</span>
                                </a>
                            </SidebarMenuButton>
                            <SidebarMenuButton asChild isActive={false}>
                                <a href="./forms">
                                    <Library/>
                                    <span>Formlarım</span>
                                </a>
                            </SidebarMenuButton>
                            <SidebarMenuButton asChild isActive={false}>
                                <a href="./reports">
                                    <ChartColumn/>
                                    <span>Raporlar</span>
                                </a>
                            </SidebarMenuButton>
                            <SidebarMenuButton asChild isActive={false}>
                                <a href="./settings">
                                    <Settings />
                                    <span>Ayarlar</span>
                                </a>
                            </SidebarMenuButton>
                            <SidebarMenuButton  className={" bg-gradient-to-r from-[#DD65B3] to-[#FF914F] rounded-md"} isActive={false} >
                                <Plus className={"text-white"} href={"./"}/>
                                <FormGenerator/>
                            </SidebarMenuButton>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

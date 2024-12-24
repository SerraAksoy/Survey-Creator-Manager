import Header from "@/components/ui/header";
import {SessionProvider} from "next-auth/react";
import Layout from "@/components/ui/mySideBar";

export default function Forms() {
    return (
        <SessionProvider>

            <Header/>
            {/* eslint-disable-next-line react/no-children-prop */}
            <Layout children={undefined}/>

        </SessionProvider>
    );
}

import Header from "@/components/ui/header";
import {SessionProvider} from "next-auth/react";
import Layout from "@/components/ui/mySideBar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

import { Tablo, columns } from "@/components/ui/table/columns"
import { DataTable } from "@/components/ui/table/data-table"
import { auth} from "@/auth";
async function getData(): Promise<Tablo[]> {
    // Fetch data from your API here.
    const session = await auth();
    if (!session || !session.user?.email) {
        throw new Error("Kullanıcı oturumu bulunamadı.");
    }
    return [
        {
            id: "1",
            name:"Öğrencilere Anket",
            yanıtlar:50 ,
            durum: "Taslak",
            email: session.user.email,
        },
        {
            id: "2",
            name:"Okul Memnuniyet",
            yanıtlar:2039 ,
            durum: "Taslak",
            email: session.user.email,
        },
        {
            id: "3",
            name:"Derse Katılım Yoklaması",
            yanıtlar:89 ,
            durum: "Bitti",
            email: session.user.email,
        },
        {
            id: "4",
            name:"Öğrencilere Anket",
            yanıtlar:10900 ,
            durum: "Bitti",
            email: session.user.email,
        },

    ]
}

export default async function Forms() {
    const data = await getData()
    return (
        <SessionProvider>

            <Header/>
            {/* eslint-disable-next-line react/no-children-prop */}
            <Layout children={undefined}/>
            <div className={"border-2 w-4/5 justify-self-center rounded-md "}>
                <CardTitle className={"text-gray-600 text-center m-4 font-sans"}>Son Formlarım</CardTitle>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="m-auto  w-4/5"
                >
                    <CarouselContent className={"relative "}>
                        {Array.from({length: 10}).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl ">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <Separator className="mt-3" />
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data}/>
                </div>

            </div>
        </SessionProvider>
    );
}

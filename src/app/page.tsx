//import Image from "next/image";
import FormGenerator from "@/app/form-generator";
//import {Button} from "@/components/ui/button";
import Header from "@/components/ui/header";
import  {SessionProvider} from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
        <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <FormGenerator/>
      </main>
    </SessionProvider>
  );
}

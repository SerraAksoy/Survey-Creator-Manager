import HeroSection from "@/components/ui/herosection";
import Header from "@/components/ui/header";
import  {SessionProvider} from 'next-auth/react';
import FormGenerator from "@/form-generator";

export default function Home() {
  return (
      <SessionProvider>
          <Header/>

          <HeroSection/>
          <main className="flex flex-col gap-8 row-start-2 items-center ">
              <FormGenerator/>
          </main>
      </SessionProvider>
  );
}

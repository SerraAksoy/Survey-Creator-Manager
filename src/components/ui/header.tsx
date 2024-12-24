import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import DropdownUserMenu from "./DropdownMenu";  // İstemci bileşenini dahil ettik


function SignOut() {
    return (
        <form action={async () => {
            'use server';
            await signOut();
        }}>
                <Button className="bg-gradient-to-r from-[#DD65B3] to-[#FF914F] py-3 px-4 mx-3 rounded-md text-white" type="submit">
                    Çıkış Yap
                </Button>

        </form>
    );
}

const Header = async () => {
    const session = await auth();
    console.log(session);
    return (
        <header className='border-b-1'>
            <nav className='bg-white border-gray-200 px-4 py-4'>
                <div className='flex justify-between items-center mx-auto max-w-screen-xl '>
                  <Link href={"./"}>
                    <Image
                        src="/logo.png" // Logo dosyasının yolu
                        alt="Formify Logo"
                        width={80} // Logo genişliği
                        height={80} // Logo yüksekliği
                    />
                  </Link>
                    {session?.user ? (
                        <div className="flex items-center gap-4">
                            {session.user.name && session.user.image && (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    width={32}
                                    height={32}
                                    className='rounded-full'
                                />
                            )}
                            <DropdownUserMenu userName={session.user.name ?? "Misafir"} />
                            <SignOut />
                        </div>
                    ) : (
                        <Link href="/api/auth/signin">
                            <Button className="bg-gradient-to-r from-[#DD65B3] to-[#FF914F] py-3 px-4 mx-3 rounded-md text-white" variant="link">
                                Giriş Yap
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Header;

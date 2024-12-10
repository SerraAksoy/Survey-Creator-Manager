import React from "react";
import { auth,signIn,signOut } from "@/auth";
import {Button} from "./button";
import Image from 'next/image';
import Link from 'next/link';
import {useSession} from "next-auth/react";

type Props = {}
function SignOut() {
    return (
        <form action={async ()=> {
            'use server';
            await signOut()
        }}>
            <Button type="submit"> Sign out </Button>
        </form>
    )
}

const Header = async (props:Props) => {
    const session = await auth();
    console.log(session);
    return (
        <header className='border-b-1'>
            <nav className='bg-white border-gray-200 px-4 py-4'>
                <div className='flex justify-between items-center mx-auto max-w-screen-xl'><h1>Yapay Zeka Destekli Form
                    Oluşturucu</h1> {session?.user ? (
                    <div className="flex items-center gap-4"> {session.user.name && session.user.image && (
                        <Image src={session.user.image} alt={session.user.name} width={32} height={32}
                               className='rounded-full'/>)} <SignOut/></div>) : (
                    <Link href="/api/auth/signin"><Button variant="link">Giriş Yap</Button></Link>)} </div>
            </nav>
        </header>

    )
}
export default Header;
"use client"

import React, {useState, useEffect} from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

import {generateForm} from "@/actions/generateForm";
import{useFormState,useFormStatus} from "react-dom";
import {useSession,signIn} from "next-auth/react";


const initialState:{
    message:string;
    data?:any;
}={
    message:"",
}

type Props = {}
export function SubmitButton(){
    const {pending}=useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending? "Generating.." : "Bırak AI Yapsın"}
        </Button>
    );
}
const FormGenerator=(props:Props) => {
    const [state,formAction]=useFormState(generateForm,initialState);
    const [open, setOpen] = useState(false);
    const session=useSession();
    console.log(session);

    useEffect(()=>{
      if (state.message==="success"){
          setOpen(false);
      }
      console.log(state.data)
    }, [state.message])

    const onFormCreate=()=> {
        if (session.data?.user) {
            setOpen(true);
        }else{
           signIn();
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button  onClick={onFormCreate}>Form Oluştur</Button>
            <DialogContent className={"sm:max-w-[425px]"} >
                <DialogHeader>
                    <DialogTitle>Yeni Form Oluştur</DialogTitle>
                </DialogHeader>
                <form action={formAction}>
                    <div className={'grid-gap-4'}>
                        <Textarea id={"description"} name={"description"} required placeholder={"Formunun ne hakkında olduğunu ve kimlere hitap ettiğini bizlere açıklayan bir metin yazmanı rica ediyoruz.✨"}></Textarea>
                    </div>

                <DialogFooter>
                    <SubmitButton/>
                    <Button variant={"link"}>El İle Oluştur</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default FormGenerator
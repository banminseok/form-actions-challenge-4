"use client"

import { useFormStatus } from "react-dom";


interface ButtonProps{
    text:string;
}

export default function Button({ text}:ButtonProps) {
    const {pending} = useFormStatus();   //const { pending, data, method, action } = useFormStatus();

    console.log(pending);
    return(
        <button
            disabled = {pending}
            className="primary-btn h-10 flex justify-center gap-2 py-2
            disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
        >
            {pending ? "로딩 중" : text}
        </button>
    );
}
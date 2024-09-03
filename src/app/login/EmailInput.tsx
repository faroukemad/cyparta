import React from 'react'
interface EmailInputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    id: string;
}
export default function EmailInput({ label, type, value, onChange, placeholder, id }: EmailInputProps) {
    return (
        <>
            <label htmlFor={id} className='cairo'>{label}</label>
            <input type={type} name={id} id={id} value={value} placeholder={placeholder} onChange={onChange} className='p-2 gap-2 rounded-lg w-full  border border-[#333333] bg-transparent' />
        </>
    )
}

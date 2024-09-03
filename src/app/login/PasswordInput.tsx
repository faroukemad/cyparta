import React from 'react'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isVisible: boolean;
    toggleVisibility: () => void;
    id: string;
}
export default function PasswordInput({ value, onChange, isVisible, toggleVisibility ,id}: PasswordInputProps) {
    return (
        <>    <label htmlFor={id} className=' cairo mt-4'>Password</label>
            <Input
                label={null}
                id="profile-pass"
                variant="bordered"
                name={id}
                placeholder="Enter your password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? <EyeSlashFilledIcon className="icon" /> : <EyeFilledIcon className="icon" />}
                    </button>
                }
                value={value}
                onChange={onChange}
                type={isVisible ? "text" : "password"}
                className="custom-input-border"
            />
        </>

    )
}

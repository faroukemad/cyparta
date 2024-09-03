'use client'

import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import ProfileSide from "./ProfileSide";
import { fetchProfile } from './ProfileService';
import ProfileHead from "./ProfileHead";
import ProfileTab from "./ProfileTab";
import './profile.scss'

interface ProfileData {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    date_joined: string;
    bio: string;
    name: string;
    image: string;
}

export default function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const handleToggle = () => {setIsOpen(!isOpen);};
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const accessToken = searchParams.get('access');
        if (accessToken) {
            const fetchProfileData = async () => {
                try {
                    const data = await fetchProfile(accessToken);
                    setProfileData(data);
                } catch (error) {
                    setError('Failed to fetch profile data.');
                }
            };

            fetchProfileData();
        } else {
            setError('No access token found.');
        }
    }, [searchParams]);
    return (
        <div className='w-screen overflow-auto bg-[#F8F8F8] h-screen'>

            <div className="flex overflow-hidden p-8">

                <ProfileSide isOpen={isOpen} onToggle={handleToggle} />
                <div className="w-[70%] flex flex-col px-8">

                    <ProfileHead
                        image={profileData?.image}
                        name={profileData?.name}
                        bio={profileData?.bio}
                        email={profileData?.email} />

                    <div className="bg-[#A2A1A833] w-full h-[1px] mt-[25px]"></div>

                    <div className="w-4/5 mt-3">

                        <div className="flex w-full flex-col">
                            <ProfileTab profileData={profileData} />
                        </div>

                        
                    </div>
                </div>
            </div>

            {error && (<div className="text-red-500 text-center absolute top-0">{error}</div>)}
        </div >
    )
}

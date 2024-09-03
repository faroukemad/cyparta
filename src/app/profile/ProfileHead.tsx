import React from 'react'

interface ProfileHeaderProps {
    image: string | undefined;
    name: string | undefined;
    bio: string | undefined;
    email: string | undefined;
}
const ProfileHead: React.FC<ProfileHeaderProps> = ({ image, name, bio, email }) => {
    return (
        <>
            <div className="flex self-end gap-5 items-center">
                <img src="./bell.png" alt="" className='w-[40px] h-[40px] object-contain cursor-pointer' />
                <img src={image || ''} alt="" className='w-[50px] h-[50px] object-contain rounded-full' />
            </div>
            <div className="flex items-center gap-2">
                <div className="lexend text-[13px] font-medium text-left">Employees </div>
                <img src="./right.png" alt="" className="w-[20px] h-[20px] object-contain" />
                <div className="lexend text-[13px] font-medium text-left">Profile</div>
            </div>
            <div className="flex w-full content-between mt-5">
                <div className="flex gap-5 items-center">
                    <img src={image || ''} alt="" className="w-[80px] h-[80px] object-contain" />
                    <div className="flex flex-col gap-1">
                        <div className="text-[20px] font-semibold leading-[36px] text-left lexend">{name || ''}</div>
                        <div className="flex gap-2 text-[13px] font-light leading-[24px] text-left lexend">
                            <img src="./briefcase.png" alt="" className="w-[20px] h-[20px] object-contain" /> {bio || ''}
                        </div>
                        <div className="flex gap-2 text-[13px] font-light leading-[24px] text-left lexend">
                            <img src="./gmail.png" alt="" className="w-[20px] h-[20px] object-contain" /> {email || ''}
                        </div>
                    </div>
                </div>
                <div className="text-[12px] font-light leading-[24px] text-left bg-[#242223] px-[20px] py-[10px] rounded-[10px] ml-auto text-white h-fit mt-auto mr-[80px] lexend flex items-center gap-2 cursor-pointer">
                    <img src="./pen.png" alt="" className="w-[15px] h-[15px] object-contain " /> Edit Profile
                </div>
            </div>
        </>

    );
};

export default ProfileHead;
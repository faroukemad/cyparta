import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface ProfileSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
}

const ProfileSide: React.FC<ProfileSidebarProps> = ({ isOpen, onToggle }) => {
    return (
        <div className="w-[300px] h-[90vh] rounded-[40px] shadow-[1px_1px_3px_0px_#CACACA26] border border-[#A2A1A833] flex flex-col items-center">
            <img src="./cypartal-logo.png" alt="" className='w-[120px] h-[158px] object-contain' />

            <div className="flex flex-col ml-12">
                <div className="flex gap-3 items-center py-4 px-2 cursor-pointer">
                    <img src="./Vector.png" alt="" className='w-[25px] h-[25px] object-contain z-9' />
                    <div className="text-[14px] font-medium leading-[20px] text-left z-9 lexend">
                        Dashboard
                        </div>
                </div>

                <Accordion className="relative z-10">
                    <AccordionItem
                        key="1"
                        aria-label="Employees"
                        indicator={<img src="./right-arrow.png" className="w-[10px] h-[10px] object-contain z-9 relative" />}
                        title={
                            <div style={{ zIndex: 10 }}
                                className={`flex items-center gap-2 p-2  z-10`}

                            >

                                <img src="./group.png" alt="Icon" className='w-[25px] h-[25px] object-contain z-9' />
                                <span className={`text-[14px] font-medium leading-[20px] text-left z-9 lexend ${isOpen ? 'text-[#EE232F]' : ''}`}>
                                    Employees
                                    </span>
                            </div>
                        }
                        onClick={onToggle}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex gap-2 items-center text-[#7B7B7B] text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-user.png" alt="" className="w-[20px] h-[20px] object-contain" />Profile
                            </div>
                            <div className="flex gap-2 items-center text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-calendar.png" alt="" className="w-[20px] h-[20px] object-contain" />Attendance
                            </div>
                            <div className="flex gap-2 items-center text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-Vector.png" alt="" className="w-[20px] h-[20px] object-contain" />Tasks
                            </div>
                        </div>
                        {isOpen && (
                            <div className="absolute  w-[300px] bg-[#F9EAEB] left-[-80px] top-[20px] h-[40px] z-[-1] border-l-[5px] border-[#EC232B] rounded-r-[15px]"></div>
                        )}
                    </AccordionItem>
                </Accordion>

                <div className="flex gap-3 items-center py-4 px-2 cursor-pointer">
                    <img src="./coin-dollar.png" alt="" className='w-[25px] h-[25px] object-contain z-9' />
                    <div className="text-[14px] font-medium leading-[20px] text-left z-9 lexend">
                        Payroll
                        </div>
                </div>
                <Accordion>
                    <AccordionItem key="1" aria-label="Employees" indicator={<img src="./right-arrow.png" className="w-[10px] h-[10px] object-contain z-9 relative" />} 
                    title={
                        <div className="flex items-center gap-2">
                            <img src="./carbon_task.png" alt="Icon" className='w-[25px] h-[25px] object-contain z-9' />
                            <span className="text-[14px] font-medium leading-[20px] text-left z-9 lexend">
                                Holidays
                                </span>
                        </div>
                    }>
                        <div className="flex flex-col items-center gap-2 ">
                            <div className="flex gap-2 items-center text-[#7B7B7B] text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-user.png" alt="" className="w-[20px] h-[20px] object-contain" />
                                Profile
                            </div>
                            <div className="flex gap-2 items-center text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-calendar.png" alt="" className="w-[20px] h-[20px] object-contain" />
                                Attendance
                            </div>
                            <div className="flex gap-2 items-center text-[13px] font-light leading-[24px] text-left lexend w-3/4">
                                <img src="./ac-Vector.png" alt="" className="w-[20px] h-[20px] object-contain" />
                                Tasks
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>

                <div className="flex gap-3 items-center py-4 px-2 cursor-pointer">
                    <img src="./icon-wallet.png" alt="" className='w-[25px] h-[25px] object-contain z-9' />
                    <div className="text-[14px] font-medium leading-[20px] text-left z-9 lexend">
                        Advanced Payment
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileSide;

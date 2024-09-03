import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

interface PersonalInformationTabProps {
    profileData: any;
}
const ProfileTab: React.FC<PersonalInformationTabProps> = ({ profileData }) => {
    return (

        <Tabs aria-label="Options" id="profile-tab" color="danger"
            variant="underlined">
            <Tab key="Personal Information"
                title={
                    <span className='flex items-center'>
                        <span className='mr-2 w-[20px] h-[20px]'
                            style={{
                                backgroundImage: 'url(user3.png)',
                                backgroundSize: '20px 20px',
                                backgroundRepeat: 'no-repeat'
                                
                            }}
                        />
                        Personal Information
                    </span>
                } >
                <Card
                    className='bg-transparent shadow-none'>
                    <CardBody >
                        <div className="flex ">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5" >
                                First Name
                            </label>
                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                Last Name
                            </label>
                        </div>
                        <div className="flex">

                            <input type="text" name="" value={profileData?.first_name || ''} id="First-Name"
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="Mariam" />


                            <input type="text" name="" id="last-Name" value={profileData?.last_name || ''}
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="Aly" />
                        </div>

                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5">
                                Mobile Number
                            </label>
                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                Email Address
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" value={profileData?.phone || ''}
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="010567240256" />

                            <input type="text" name="" id="last-Name" value={profileData?.email || ''}
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="mariam@gmail.com " />
                        </div>
                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5">
                                Date of Birth
                            </label>
                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                Marital Status
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" value={profileData?.date_joined || ''}
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="July 14, 1995" />

                            <input type="text" name="" id="last-Name"
                                className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="Single" />
                        </div>
                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5">
                                Gender
                            </label>
                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                Nationality
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="Female" />

                            <input type="text" name="" id="last-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="Egypt" />
                        </div>
                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5"
                            >Address
                            </label>

                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                City
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="Maadi" />

                            <input type="text" name="" id="last-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="Cairo" />
                        </div>
                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5">
                                State
                            </label>
                            <label htmlFor="last-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend">
                                Zip Code
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="Cairo" />

                            <input type="text" name="" id="last-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="35624" />
                        </div>
                        <div className="flex mt-5">
                            <label htmlFor="First-Name" className="w-2/4 text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend mr-5">
                                Work’s hours
                            </label>
                            <label htmlFor="last-Name" className="text-[#A2A1A8] text-[14px] font-light leading-[22px] text-left lexend w-1/4 mr-5" >
                                Salary/hour
                            </label>
                            <label htmlFor="last-Name" className="w-1/4 text-[14px] font-light leading-[22px] text-left text-[#EE232F] lexend">
                                Total Salary
                            </label>
                        </div>
                        <div className="flex">
                            <input type="text" name="" id="First-Name" className="w-2/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="180 hour" />

                            <input type="text" name="" id="last-Name" className="w-1/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal mr-5" placeholder="300 EGP" />

                            <input type="text" name="" id="last-Name" className="w-1/4 bg-transparent border-b-2 border-[#A2A1A81A] placeholder:text-[#16151C] placeholder:text-[14px] placeholder:font-normal" placeholder="54000 EGP" />
                        </div>
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="Professional Information"
                title={
                    <span className='flex items-center'>
                        <span className='mr-2 w-[20px] h-[20px]'
                            style={{
                                backgroundImage: 'url(briefcase.png)',
                                backgroundSize: '20px 20px',
                                backgroundRepeat: 'no-repeat'
                                
                            }}
                        />
                        Professional Information
                    </span>
                }
            >
                <Card
                    className='bg-transparent shadow-none'>
                    <CardBody>
                        There is no additional info about this tab.
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="Documents"
                title={
                    <span className='flex items-center'>
                        <span className='mr-2 w-[20px] h-[20px]'
                            style={{
                                backgroundImage: 'url(document.png)',
                                backgroundSize: '20px 20px',
                                backgroundRepeat: 'no-repeat'
                                
                            }}
                        />
                        Document
                    </span>
                }
            >
                <Card style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}>
                    <CardBody>
                        There is no additional info about this tab.
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="Account Access"
                title={
                    <span className='flex items-center'>
                        <span className='mr-2 w-[20px] h-[20px]'
                            style={{
                                backgroundImage: 'url(lock.png)',
                                backgroundSize: '20px 20px',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                        Account Access
                    </span>
                }>
                <Card className='bg-transparent shadow-none'>
                    <CardBody>
                        There is no additional info about this tab.
                    </CardBody>
                </Card>
            </Tab>
        </Tabs>

    )
}
export default ProfileTab;

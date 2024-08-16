'use client'
// import { LogoIcon } from '@/components/atoms/common/Icon';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const UserDropdown = () => {
    // State to control the visibility of the dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Refs for dropdown elements
    const btnDropdownRef = useRef<HTMLAnchorElement>(null);
    const popoverDropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown visibility
    const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <a
                href="#pablo"
                ref={btnDropdownRef}
                onClick={toggleDropdown}
                className="text-blueGray-500 block"
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                        {/* <img
                            alt="User Avatar"
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={LogoIcon}
                        /> */}
                        {/* <Image
                            src={LogoIcon}
                            alt="Logo"
                            width={52}
                            height={50}
                            className="w-full rounded-full align-middle border-none shadow-lg"
                        /> */}
                    </span>
                </div>
            </a>

            {/* Dropdown menu */}
            <div
                ref={popoverDropdownRef}
                className={`${dropdownOpen ? 'block' : 'hidden'
                    } bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute right-0 mt-2`}
            >
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    onClick={(e) => e.preventDefault()}
                >
                    Action
                </a>
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    onClick={(e) => e.preventDefault()}
                >
                    Another action
                </a>
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    onClick={(e) => e.preventDefault()}
                >
                    Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-blueGray-100" />
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    onClick={(e) => e.preventDefault()}
                >
                    Separated link
                </a>
            </div>
        </div>
    );
};

export default UserDropdown;

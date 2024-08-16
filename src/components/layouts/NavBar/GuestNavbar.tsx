'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/atoms/common/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const GuestNavbar = () => {
    const route = useRouter();
    const [auth, setAuth] = useState<boolean>(false);
    return (
        <div className="sticky top-0 z-10 bg-shades-0">
            <nav className="flex flex-col xl:flex-row items-center justify-between max-width px-4 md:px-12 py-6">
                <Link href="/" className="flex items-center gap-3 cursor-pointer">
                    <span className="text-neutral-500 paragraph-1">E-commerce</span>
                </Link>
                {!auth ? (
                    <div className='flex gap-1'>
                        <Button variant="solid" size="sm" colorschema="primary">Login</Button>
                        <Button variant="solid" size="sm" colorschema="primary">Register</Button>
                    </div>
                ) : (
                    <div className="dropdown inline-block relative">
                        <button className="mt-1">
                            {/* <Image
                                className="cursor-pointer"
                                src={user}
                                alt="User Icon"
                                width={32}
                                height={32}
                            /> */}
                        </button>
                        <ul className="dropdown-menu absolute hidden right-0 w-max text-gray-700 pt-1">
                            <li className="">
                                <Link
                                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="/order"
                                >
                                    My orders
                                </Link>
                            </li>
                            <li className="">
                                <span
                                    className="cursor-pointer rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                >
                                    Logout
                                </span>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    )
}
export default GuestNavbar;
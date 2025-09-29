'use client'

import { Nav_Items } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavItems = () => {
    const pathname = usePathname();

    const isActive = (path : string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    }

  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
        {Nav_Items.map((item) => (
            <li key={item.href} className='nav-item'>
                <Link href={item.href} className={`hover:text-yellow-500 transition-colors ${ isActive(item.href) ? 'text-gray-100' : ""}`}>{item.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems
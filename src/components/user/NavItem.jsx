'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import HomeIcon from '@/components/icons/HomeIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import MarketIcon from '@/components/icons/Market';

const NavItem = ({ link }) => {
  let pathname = usePathname();
  pathname = pathname.split('/').pop();

  pathname === 'user' && pathname === '/';

  const href = link === 'user' ? '/' : link;

  const color = pathname === link ? '#3b82f6' : '#8c8c8c';
  const size = 30;

  return (
    <Link href={`/user/${href}`}>
      <li
        className={`border-2 border-transparent p-2 rounded-sm hover:border-b-blue-600
        ${pathname === link && 'border-b-blue-600'}
      `}
        style={{
          transition: 'all 0.3s ease',
        }}
      >
        {link === 'user' && <HomeIcon color={color} size={size} />}
        {link === 'videos' && <PlayIcon color={color} size={size} />}
        {link === 'market' && <MarketIcon color={color} size={size} />}
      </li>
    </Link>
  );
};

export default NavItem;

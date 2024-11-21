import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-20'>
      {/* logo */}
      <Link
        href='/user'
        className='w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center text-2xl text-white'
      >
        <span>CB</span>
      </Link>

      {/* nav */}
      <Nav />

      {/* user */}
      <div>User</div>
    </div>
  );
};

export default Header;

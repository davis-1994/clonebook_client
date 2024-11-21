import NavItem from './NavItem';

const links = ['user', 'videos', 'market'];

const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-center items-center md:gap-8 gap-4'>
        {links.map((link) => {
          return <NavItem key={link} link={link} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;

import NavItem from './NavItem';

const links = ['user', 'videos', 'market'];

const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-center items-center xs:gap-6 gap-0'>
        {links.map((link) => {
          return <NavItem key={link} link={link} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;

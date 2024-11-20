import { logout } from '@/actions/auth-actions';

const Home = async () => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

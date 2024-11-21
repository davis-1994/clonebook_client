import Header from '@/components/user/Header';

export const metadata = {
  title: 'Clonebook | User',
  description: 'This is full stack Next.js practice project',
};

export default async function UserLayout({ children }) {
  return (
    <>
      <Header />
      <div className='mt-5'>{children}</div>
    </>
  );
}

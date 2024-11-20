import './globals.css';

export const metadata = {
  title: 'Clonebook | Home',
  description: 'This is full stack Next.js practice project',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='winter' className='bg-base-100'>
      <body>{children}</body>
    </html>
  );
}

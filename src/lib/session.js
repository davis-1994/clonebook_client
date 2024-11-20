'use server';

import { cookies } from 'next/headers';

export const createSession = async (token) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  try {
    const cookieStore = await cookies();
    cookieStore.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: expiresAt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('session');
};

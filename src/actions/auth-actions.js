'use server';

import axios from 'axios';

import { redirect } from 'next/navigation';

import { createSession, deleteSession } from '@/lib/session';

export const login = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
      {
        email,
        password,
      }
    );

    const { token } = response.data;
    await createSession(token);

    return { success: true };
  } catch (error) {
    return { ...error?.response?.data, fieldData: { email } };
  }
};

export const register = async (prevState, formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
      {
        name,
        email,
        password,
        confirmPassword,
      }
    );

    const { token } = response.data;
    await createSession(token);

    return { success: true };
  } catch (error) {
    return { ...error?.response?.data, fieldData: { name, email } };
  }
};

export const logout = async () => {
  await deleteSession();
  redirect('/');
};

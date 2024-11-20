'use server';

import axios from 'axios';

import { redirect } from 'next/navigation';

import { createSession, deleteSession } from '@/lib/session';

export const login = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await axios.post('http://localhost:3001/api/auth/login', {
      email,
      password,
    });

    const { token } = response.data;
    await createSession(token);

    return { success: true };
  } catch (error) {
    return { ...error?.response?.data, fieldData: { email } };
  }
};

export const logout = async () => {
  await deleteSession();
  redirect('/');
};

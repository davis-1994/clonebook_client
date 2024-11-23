'use server';

import axios from 'axios';

import { redirect } from 'next/navigation';

import { createSession, deleteSession } from '@/lib/session';

const handleServerError = (error, fieldData = {}) => {
  // Check for network or server-down errors
  if (
    error.code === 'ECONNABORTED' ||
    error.message.includes('Network Error')
  ) {
    return {
      success: false,
      message: 'Internal server error. Please try again later.',
      fieldData,
    };
  }

  // For response errors (status codes 4xx or 5xx)
  if (error.response) {
    return {
      success: false,
      ...error.response.data, // Keep original server response data
      fieldData,
    };
  }

  // Catch-all for unexpected errors
  return {
    success: false,
    message: 'An unexpected error occurred. Please try again.',
    fieldData,
  };
};

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
    // return { ...error?.response?.data, fieldData: { email } };
    return handleServerError(error, { email });
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
    // return { ...error?.response?.data, fieldData: { name, email } };
    return handleServerError(error, { name, email });
  }
};

export const logout = async () => {
  await deleteSession();
  redirect('/');
};

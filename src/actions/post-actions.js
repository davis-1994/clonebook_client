'use server';

import axios from 'axios';

import { handleServerError } from '@/lib/server';
import { cookies, headers } from 'next/headers';

export const createPost = async (prevState, formData) => {
  const title = formData.get('title');
  const body = formData.get('body');

  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}posts/create`,
      {
        title,
        body,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { success: true };
  } catch (error) {
    return handleServerError(error, { title, body });
  }
};

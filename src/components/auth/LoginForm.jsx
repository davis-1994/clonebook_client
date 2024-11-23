'use client';

import { useActionState } from 'react';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { login } from '@/actions/auth-actions';

import Alert from '@/components/general/Alert';

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(login, {});

  console.log(state);

  if (state.success) {
    redirect('/user');
  }

  return (
    <form
      className='flex justify-center items-center flex-col md:gap-4 gap-2 rounded-md md:min-w-[400px] bg-base-200 md:p-10 p-4 shadow-md border border-neutral-300'
      action={formAction}
    >
      <Alert message={state?.message} error={state?.error} />
      <input
        type='text'
        placeholder='Email'
        className={`input input-bordered w-full max-w-xs ${
          state?.error?.email && 'input-error'
        }`}
        defaultValue={state?.fieldData?.email}
        name='email'
      />
      <input
        type='password'
        placeholder='Password'
        className={`input input-bordered w-full max-w-xs ${
          state?.error?.password && 'input-error'
        }`}
        name='password'
      />
      <button
        className='btn btn-primary w-full text-white'
        disabled={isPending}
      >
        Log In
      </button>
      <div className='divider m-0' />
      <Link href='/register' className='w-full'>
        <button className='btn btn-secondary w-full text-white'>
          Create new account
        </button>
      </Link>
    </form>
  );
};

export default LoginForm;

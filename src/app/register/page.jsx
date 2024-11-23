'use client';

import { useActionState } from 'react';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { register } from '@/actions/auth-actions';

import Alert from '@/components/general/Alert';

const Register = () => {
  const [state, formAction, isPending] = useActionState(register, {});

  if (state.success) {
    redirect('/user');
  }

  return (
    <div className='min-h-screen flex items-center justify-center gap-5 flex-col md:flex-row text-center md:text-left'>
      <form
        className='flex justify-center items-center flex-col md:gap-4 gap-2 rounded-md md:min-w-[400px] bg-base-200 md:p-10 p-4 shadow-md border border-neutral-300'
        action={formAction}
      >
        <Alert message={state?.message} error={state?.error} />
        <input
          type='text'
          placeholder='Name'
          className={`input input-bordered w-full max-w-xs ${
            state?.error?.name && 'input-error'
          }`}
          defaultValue={state?.fieldData?.name}
          name='name'
        />
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
        <input
          type='password'
          placeholder='Confirm Password'
          className={`input input-bordered w-full max-w-xs ${
            state?.error?.confirmPassword && 'input-error'
          }`}
          name='confirmPassword'
        />
        <button
          className='btn btn-primary w-full text-white'
          disabled={isPending}
        >
          Register
        </button>
        <div className='divider m-0' />
        <Link href='/' className='w-full'>
          <button className='btn btn-secondary w-full text-white'>
            Already have an account?
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;

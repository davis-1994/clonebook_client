'use client';

import { redirect } from 'next/navigation';
import { useActionState } from 'react';

import { createPost } from '@/actions/post-actions';

import Alert from '@/components/general/Alert';

const PostForm = () => {
  const [state, formAction, isPending] = useActionState(createPost, {});

  if (state.success) {
    redirect('/user');
  }

  return (
    <form
      className='flex justify-center items-center flex-col xs:gap-2 gap-1 rounded-md w-full bg-base-200 xs:p-3 p-1 shadow-md border border-neutral-300 mx-auto'
      action={formAction}
    >
      <Alert message={state?.message} error={state?.error} />
      <div className='flex justify-between w-full items-center'>
        <h4 className='font-bold inline-block'>Create Post</h4>
        <button
          type='submit'
          className='btn btn-primary btn-sm'
          disabled={isPending}
        >
          Post
        </button>
      </div>
      <input
        type='text'
        placeholder='Title'
        className={`input input-bordered w-full ${
          state?.error?.title && 'input-error'
        }`}
        name='title'
        defaultValue={state?.fieldData?.title}
      />

      <input
        type='text'
        placeholder='Message'
        className={`input input-bordered w-full ${
          state?.error?.body && 'input-error'
        }`}
        name='body'
        defaultValue={state?.fieldData?.body}
      />
    </form>
  );
};

export default PostForm;

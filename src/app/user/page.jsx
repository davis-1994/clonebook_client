'use client';

import { useState } from 'react';

import Modal from '@/components/general/Modal';
import PostForm from '@/components/user/PostForm';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className='btn btn-primary btn-sm' onClick={() => setOpen(true)}>
        Add Post
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <PostForm />
      </Modal>
    </>
  );
};

export default Home;

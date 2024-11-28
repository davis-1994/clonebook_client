'use client';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity ease-in-out duration-300 ${
          isOpen ? 'opacity-50 z-10' : 'opacity-0 -z-10'
        }`}
        onClick={onClose}
      />
      {/* Modal Content */}
      <div
        className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center min-w-[400px] transition-all ease-in-out duration-300 ${
          isOpen ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-90 -z-10'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;

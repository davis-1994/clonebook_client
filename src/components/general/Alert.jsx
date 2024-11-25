const Alert = ({ message, error }) => {
  if (!message && !error) return null;

  return (
    <div role='alert' className='alert alert-error w-full max-w-xs'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      ></svg>
      <span>
        {message ||
          error?.name ||
          error?.email ||
          error?.password ||
          error?.confirmPassword ||
          error?.title ||
          error?.body}
      </span>
    </div>
  );
};

export default Alert;

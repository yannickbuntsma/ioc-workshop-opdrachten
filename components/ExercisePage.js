import Link from 'next/link';

export const ExercisePage = ({ children }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      {children}
    </div>
  );
};

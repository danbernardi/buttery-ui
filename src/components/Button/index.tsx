import type { ReactNode } from 'react';

export const Button = ({children}: {children: ReactNode}) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
      {children}
    </button>
  )
}

export default Button;

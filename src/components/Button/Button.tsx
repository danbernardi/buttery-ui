import { forwardRef, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const baseBtnStyles = 'px-4 py-2 rounded-md border-[1px]';

const btnStyles = (variant: Props['variant']) => ({
  primary: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-800 hover:brder-blue-800',
  secondary: 'bg-gray-100 border-gray-100 text-gray-700 hover:bg-gray-500 hover:border-gray-500 hover:text-white',
  outline: 'bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white',
  ghost: 'bg-white border-white text-gray-700 hover:bg-gray-100 hover:border-gray-100',
})[variant || 'primary'];

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({
    variant = 'primary',
    children = 'Click me',
    asChild = false,
    className,
    ...props
  }: Props, ref) => {
    const btnProps = {
      ref,
      role: 'button',
      className: cn(baseBtnStyles, btnStyles(variant), className),
      ...props
    };

    if (asChild) {
      return (
        <Slot {...btnProps}>
          {children}
        </Slot>
      )
    } else {
      return (
        <button {...btnProps}>
          {children}
        </button>
      )
    }
  }
);

export default Button;

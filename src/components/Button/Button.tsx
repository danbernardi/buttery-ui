import { forwardRef, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const baseBtnStyles = 'px-4 py-2 rounded-md';

const btnStyles = (variant: Props['variant']) => ({
  primary: 'bg-blue-500 text-white hover:bg-blue-800',
  secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-600 hover:text-white',
})[variant || 'primary'];

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({
    variant,
    children,
    asChild,
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

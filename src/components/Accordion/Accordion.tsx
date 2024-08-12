import React, { useState, useRef, useLayoutEffect } from 'react';
import type { ReactNode, RefObject } from 'react';
import { cn } from '../../utils';

const accordionStyles = `
  text-inherit
  block
  w-full
  text-left
  border-b-[1px]
  border-b-gray-300
`;

const contentStyles = `
  cursor-auto
  overflow-hidden
  block
  w-full
  transition-[height, opacity]
  duration-200
  ease-in-out
`;

const titleStyles = `
  font-semibold
  w-full
  h-[30px]
  flex
  text-inherit
  items-center
  justify-content-between
  bg-transparent
`;

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  onClick?: (id: string) => void;
  className?: string;
  // openIcon: ReactNode;
  // closedIcon: ReactNode;
};

function useDimensions(): [RefObject<HTMLDivElement>, Partial<DOMRect>] {
  const [dimensions, setDimensions] = useState<Partial<DOMRect>>({ height: 0, width: 0 });
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  return [ref, dimensions];
}

export const Accordion = ({
  id,
  title,
  children,
  defaultOpen = false,
  onClick,
  className,
  // openIcon,
  // closedIcon
}: Props) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  function handleClick() {
    if (onClick instanceof Function) onClick(id);
    setOpen(!open);
  }

  const [contentRef, { height }] = useDimensions();

  return (
    <div
      className={cn(accordionStyles, className)}
    >
      <button type="button" className={titleStyles} onClick={ handleClick }>
        <span>{ title }</span>
        <span>{ open
          ? '+'
          : '-'
        }</span>
      </button>
      <div
        className={contentStyles}
        style={ open ? { height, opacity: 1 } : { height: 0, opacity: 0 } }
      >
        <div ref={ contentRef }>{ children }</div>
      </div>
    </div>
  );
};

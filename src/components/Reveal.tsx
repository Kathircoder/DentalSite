import React from 'react';

interface Props {
  children: React.ReactNode;
  width?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export const Reveal = ({ children, width = '100%', delay = 0, direction = 'up' }: Props) => {
  const animName =
    direction === 'left' ? 'fadeInLeft' :
    direction === 'right' ? 'fadeInRight' :
    'fadeInUp';

  return (
    <div style={{
      width,
      animationName: animName,
      animationDuration: '0.9s',
      animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      animationFillMode: 'both',
      animationDelay: `${delay}s`,
    }}>
      {children}
    </div>
  );
};

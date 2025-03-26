"use client";

import { sendGTMEvent } from "@next/third-parties/google";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gtmEvent?: string;
  gtmLabel?: string;
}

export function Button({
  gtmEvent,
  gtmLabel,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gtmEvent) {
      sendGTMEvent({
        event: gtmEvent,
        label: gtmLabel || children?.toString(),
        page_path: window.location.pathname,
      });
    }

    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

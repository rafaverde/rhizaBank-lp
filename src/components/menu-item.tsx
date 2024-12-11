import Link from "next/link";

interface MenuItemProps {
  label: string;
  to?: string;
  target?: string;
  onClick?: () => void;
}

export function MenuItem({ label, to, target, onClick }: MenuItemProps) {
  return (
    <li className="flex w-full items-center justify-center border-t border-solid border-rhiza-green-500 lg:block lg:w-max lg:border-none">
      {to ? (
        <Link href={to} target={target}>
          <button className="py-3 text-rhiza-blue-500 transition-colors hover:text-rhiza-green-500">
            {label}
          </button>
        </Link>
      ) : (
        <button
          className="py-3 text-rhiza-blue-500 transition-colors hover:text-rhiza-green-500"
          onClick={onClick}
        >
          {label}
        </button>
      )}
    </li>
  );
}

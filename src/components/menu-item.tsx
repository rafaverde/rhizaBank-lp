import Link from "next/link"

interface MenuItemProps {
  label: string
  to: string
  target?: string
}

export function MenuItem({ label, to, target }: MenuItemProps) {
  return (
    <li>
      <Link href={to} target={target}>
        <button className="text-rhiza-blue-500 hover:text-rhiza-green-500 transition-colors">
          {label}
        </button>
      </Link>
    </li>
  )
}

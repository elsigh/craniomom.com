import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200 focus-visible:ring-white'
      : 'bg-neutral-950 text-white hover:bg-neutral-800 focus-visible:ring-neutral-950'
  )

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  )
}

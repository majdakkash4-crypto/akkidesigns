'use client';
import Link from 'next/link';

type Props = { href?: string; children?: React.ReactNode };

export default function CTAButton({ href = '#kontakt', children = 'Jetzt kontaktieren' }: Props) {
  return (
    <Link href={href} scroll={false}>
      <button className="btn-accent">{children}</button>
    </Link>
  );
}

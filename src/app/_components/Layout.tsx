import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/book">Book a Service</Link>
        </li>
        <li>
          <Link href="/admin/services">Admin - Manage Services</Link>
        </li>
      </ul>
    </nav>
  );
}

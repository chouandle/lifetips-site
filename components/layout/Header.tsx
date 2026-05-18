import Link from 'next/link';

export function Header() {
  return (
    <header style={{
      borderBottom: '1px solid #eee',
      padding: '1rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      background: 'white',
      zIndex: 1000,
    }}>
      <Link href="/" style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#00a8a8',
        textDecoration: 'none',
      }}>
        LifeTips<span style={{ color: '#ff6a00' }}>.</span>
      </Link>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#666', fontWeight: 500 }}>Latest</Link>
        <Link href="/#articles" style={{ textDecoration: 'none', color: '#666', fontWeight: 500 }}>Popular</Link>
        <Link href="/#articles" style={{ textDecoration: 'none', color: '#666', fontWeight: 500 }}>Featured</Link>
        <Link href="#" style={{ textDecoration: 'none', color: '#666', fontWeight: 500 }}>About</Link>
      </nav>
    </header>
  );
}

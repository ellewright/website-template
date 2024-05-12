import Link from 'next/link';
export default function NavBar() {
    return (
        <div className="navbar-container">
            <nav className="flex navbar">
                <img src='/logo.jpg' />
                <ul>
                    <li><Link href="">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="">Products</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
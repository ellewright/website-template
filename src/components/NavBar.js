import Link from 'next/link';
export default function NavBar() {
    return (
        <div className="navbar-container">
            <nav className="flex navbar">
                <img src='/images/logo.jpg' alt='logo' />
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
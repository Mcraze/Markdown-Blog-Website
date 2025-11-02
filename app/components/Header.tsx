import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center gap-4">
                <div>
                    <Link href="/">McrazeBlog</Link>
                </div>
                <ul className="flex items-center gap-8">
                    <li><Link href="/blog">Blog</Link></li>
                    <li>About</li>
                    <li>Portfolio</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
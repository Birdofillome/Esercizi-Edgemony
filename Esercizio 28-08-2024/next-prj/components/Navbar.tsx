import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-md mb-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <ul className="flex space-x-4">
                <li>
                <Link href="/" className="text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                </li>
                <li>
                <Link href="/about" className="text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                </li>
                <li>
                <Link href="/contacts" className="text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contacts</Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
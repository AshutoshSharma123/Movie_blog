import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo / Left Side */}
                <div className="text-xl font-semibold">
                    <Link to="/" className="hover:text-yellow-400 transition-all">
                        🎬 MovieHub
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-lg">
                    <Link
                        to="/"
                        className="hover:text-yellow-400 transition-all"
                    >
                        Home
                    </Link>

                    <Link
                        to="/favourites"
                        className="hover:text-yellow-400 transition-all"
                    >
                        Favourites
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

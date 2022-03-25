import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <Link href="/home">
            <a className="bg-white inline-block  py-2 px-4 text-blue-700 font-semibold">
              Home
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="/lottie">
            <a
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              href="#"
            >
              Lottie
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="/tracker">
            <a
              href="#"
              className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 front-semibold"
            >
              Tracker
            </a>
          </Link>
        </li>
        <li className="mr-1">
          <Link href="/about">
            <a
              className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
              href="#"
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

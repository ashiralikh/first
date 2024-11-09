import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-500 transition duration-200">Next.js</Link>
          
          <div className="hidden md:flex">
            <ul className="flex list-none m-0 p-0 space-x-6">
              <li>
                <Link href="/" className="text-white font-bold hover:text-blue-500 hover:underline transition duration-200">Home</Link>
              </li>
              <li>
              <Link href="/about" className="text-white font-bold hover:text-blue-500 hover:underline transition duration-200">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-bold hover:text-blue-500 hover:underline transition duration-200">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-bold hover:text-blue-500 hover:underline transition duration-200">Contact</Link>
              </li>
            </ul>
          </div>
      
          
          {/* <div className="md:hidden">
            <button className="text-white" aria-label="Toggle menu">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg> *
            </button>
          </div>
        </div>
      
        
        <div className="md:hidden mt-4 hidden">
          <ul className="space-y-4 text-center">
            <li>
              <Link href="/" className="block text-white hover:text-blue-500-500 transition duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block text-white hover:text-blue-500-500 transition duration-200">About</Link>
            </li>
            <li>
              <Link href="/services" className="block text-white hover:text-blue-500-500 transition duration-200">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="block text-white hover:text-blue-500-500 transition duration-200">Contact</Link>
            </li>
          </ul>
          */}
        </div> 
      </nav>
      
    )
}

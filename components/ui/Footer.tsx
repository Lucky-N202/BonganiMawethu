import { Facebook, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"


const Footer = () => {
  return (
   
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl py-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-white text-center md:text-left mb-4 md:mb-0">
        <p className="font-bold text-xl mb-2">Join the Movement</p>
        <p className="text-lg">Connect with us on social media and be part of our vibrant community!</p>
      </div>
      <div className="flex justify-center md:justify-end space-x-4">
        <Link href="#" className="text-white hover:text-gray-300 transition duration-300">
        <Facebook />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300 transition duration-300">
        <GithubIcon />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300 transition duration-300">
        <LinkedinIcon />
        </Link>
        <Link href="#" className="text-white hover:text-gray-300 transition duration-300">
        <InstagramIcon />
        </Link>
      </div>
    </div>
    <div className="container mx-auto mt-8">
      <p className="text-center text-white">&copy; {new Date().getFullYear()} BonganiMawethu Pty. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
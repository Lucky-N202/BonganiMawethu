import Link from "next/link"
import { MovingBorderBtn } from "./moving-border"


const Hero = () => {
  return (
    <section className="py-28 bg-gray-100  w-full dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.05]">
        
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Unlocking Potential Through Integrated Solutions</h1>
        <p className="text-lg text-gray-600 mb-6 ">BonganiMawethu Pty is your premier partner in delivering comprehensive solutions across logistics, construction, properties, mining, security, and cleaning. With a commitment to excellence and innovation, we tailor our services to meet your unique needs.</p>
        <MovingBorderBtn className="bg-white border border-green-100 text-green-500 hover:bg-blue-600 hover:text-white "><Link href="#contact">Explore Our Services</Link></MovingBorderBtn>
        
      </div>
    </section>
  )
}

export default Hero
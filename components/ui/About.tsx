import Image from "next/image"



const About = () => {

    
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-green-500 text-white">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl md:font-extrabold font-bold mb-4">Welcome to BonganiMawethu Pty</h2>
          <p className="text-lg mb-6">At BonganiMawethu Pty, we're more than just a company; we're a community of dreamers, creators, and innovators. Our mission is simple: to transform industries, empower communities, and drive positive change.</p>
          <p className="text-lg mb-6">With a relentless pursuit of excellence and a passion for innovation, we've become leaders in logistics, construction, properties, mining, security, and cleaning. But our success isn't measured by profits alone; it's measured by the impact we make.</p>
          <p className="text-lg mb-6">From building sustainable infrastructure to creating safe and secure environments, we're dedicated to making a difference in the world. Our commitment to integrity, quality, and sustainability guides everything we do, ensuring that every project we undertake leaves a lasting legacy.</p>
          <p className="text-lg mb-6">But what truly sets us apart is our people. With a diverse team of experts from around the globe, we bring together the best minds and talents to tackle the toughest challenges. Together, we're pushing boundaries, exploring new frontiers, and shaping the future.</p>
          <p className="text-lg mb-6">Join us on our journey as we continue to innovate, inspire, and impact lives. Together, we can create a world where anything is possible.</p>
        </div>
        <div className="hidden md:block">
          <div className="bg-white  text-blue-500 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc pl-6">
              <li className="text-lg mb-2">Innovation: We embrace creativity and push the boundaries of what's possible.</li>
              <li className="text-lg mb-2">Integrity: We uphold the highest standards of honesty, transparency, and ethics.</li>
              <li className="text-lg mb-2">Quality: We strive for excellence in everything we do, delivering superior results.</li>
              <li className="text-lg mb-2">Sustainability: We are committed to environmental responsibility and social impact.</li>
              <li className="text-lg mb-2">Collaboration: We believe in the power of teamwork and partnership to achieve greatness.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
import React from 'react'

const services = [
    { title: 'Logistics', description: 'From transportation and warehousing to supply chain management, we streamline your logistics operations to enhance efficiency and reduce costs.' },
    { title: 'Construction', description: 'With a proven track record of delivering high-quality construction projects, we handle everything from residential developments to commercial complexes.' },
    { title: 'Properties', description: 'Our property management services ensure your assets are well-maintained and profitable, whether it\'s residential, commercial, or industrial properties.' },
    { title: 'Mining', description: 'Leveraging our expertise in the mining industry, we provide comprehensive solutions to maximize productivity and safety in mining operations.' },
    { title: 'Security', description: 'Protect your assets and personnel with our advanced security solutions, including surveillance systems, access control, and security personnel.' },
    { title: 'Cleaning', description: 'Maintain a clean and hygienic environment with our professional cleaning services, tailored to meet the unique needs of your facility.' }
  ];
  

const Services = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* Render service items */}
                {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
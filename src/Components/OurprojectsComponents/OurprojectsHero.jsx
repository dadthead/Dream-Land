import React from 'react'
import assets from '../../assets/assets'

const Herosection = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[90vh] bg-slate-50">
            {/* Background Image */}
            <img
                src={assets.img3}
                className="w-full h-full object-cover"
                alt="img"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start md:top-134 top-70 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 text-white">
                {/* Heading */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-semibold drop-shadow-lg">
                    Our Projects
                </h1>

                {/* Paragraph for larger devices */}
                <p className="hidden md:block mt-4 text-base sm:text-md  max-w-2xl drop-shadow-lg font-inter  leading-relaxed">
                    Dream Land Project is a full-service construction and development
                    company that specializes in creating beautiful, functional, and
                    sustainable spaces for our clients.
                </p>
            </div>
        </div>
)
}

export default Herosection
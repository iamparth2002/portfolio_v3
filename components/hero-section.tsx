import Image from 'next/image'
import React from 'react'
import { SocialLinks } from './social-links'

const HeroSection = () => {
    return (
        <section className="py-32 md:py-24 flex max-md:flex-col items-center max-w-7xl mx-auto gap-8 max-md:px-6">

            <Image
                src="/profile2.jpg"
                alt="Parth Gandhi"
                width={240}
                height={300}
                className="rounded-lg h-full w-full"
                priority
            />

            <div className="flex flex-col justify-center max-md:items-center max-md:text-center gap-8">
                <div>
                    <p className="text-gray-300 mb-2 text-xl">I&apos;m Parth Gandhi, and I enjoy</p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-1 text-nowrap">Building pixel-perfect</h2>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-purple-500">Interactive</span> apps <span className="text-red-500">❤️</span>
                    </h2>
                </div>
                <p className="text-gray-300 mb-4 font-bold text-xl">Full-Stack Developer</p>
                <SocialLinks />
            </div>
        </section>
    )
}

export default HeroSection
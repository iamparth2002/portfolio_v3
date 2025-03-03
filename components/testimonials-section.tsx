import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="h-screen flex items-center flex-col justify-center max-md:px-6">
      <h2 className="text-2xl font-bold mb-12 text-center">Testimonials</h2>

      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="text-8xl text-purple-500">“</span>
          <p className="text-gray-300 ml-6 text-2xl break-words whitespace-pre-line">
            Mohammed is an exceptionally talented and motivated software developer who is a great addition to any
            developer team.<br/>Talented and always eager to tackle new challenges, Moh brings a sharp mind and a fun attitude to every project which makes him an invaluable team member.
          </p>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <Image
            src="/profile2.jpg"
            alt="Florian Teufl"
            width={60}
            height={60}
            className="object-cover h-16 w-16"
          />
          <div>
            <p className="">Saurabh</p>
            <p className=" text-gray-400">Founder</p>
            <p className=" text-gray-400">Intellemo.ai</p>
          </div>
        </div>
      </div>
    </section>
  )
}


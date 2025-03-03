import Image from "next/image"

export function SkillsSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto max-md:px-6">
      <h2 className="text-2xl font-bold mb-12 text-center">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Backend */}
        <div className="space-y-8">

          <div className="bg-[#212124] rounded-lg p-6 border border-purple-400">
            <h3 className="font-bold mb-2 text-2xl">Backend</h3>
            <p className=" text-gray-300 mb-6">
              I love problem-solving and building complex systems.
              <br />I strive to create scalable, reliable, and secure solutions.
            </p>
            <div className="flex gap-4">
              <Image
                src="/Typescript.svg"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/graphql.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/mongodb.svg"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/node.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/javascript.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/git.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/github.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />


            </div>
          </div>
          <div className="bg-[#212124] rounded-lg p-6 border border-purple-400">
            <h3 className="font-bold mb-2 text-2xl">Cloud & DevOps</h3>
            <p className=" text-gray-300 mb-4">
              I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services.
            </p>
            <div className="flex gap-4">
              <Image
                src="/aws.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/linux.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/docker.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/K8S.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              <Image
                src="/redis.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 md:mt-10">
          <div className="bg-[#212124] rounded-lg p-6 border border-purple-400 ">
            <h3 className="font-bold mb-2 text-2xl">Frontend & Design</h3>
            <p className=" text-gray-300 mb-4">
              I'm  passionate about design, animation, and interactions, always aiming to build interfaces with great user
              experiences.
            </p>
            <p className=" text-gray-300 mb-6">I have worked on web, mobile, and game development projects.</p>
            <div className="flex gap-2">
              <Image
                src="/vue.webp"
                alt="Charging stations app"
                width={300}
                height={400}
                className=" h-8 w-8"
              />
              {/* <Image
              src="/tailwind.webp"
              alt="Charging stations app"
              width={300}
              height={400}
              className="h-8 w-12"
            /> */}
              <Image
                src="/figma.svg"
                alt="Charging stations app"

                width={300}
                height={400}
                className=" h-8 w-8"
              />
            </div>
          </div>
          <div className="bg-[#212124] rounded-lg p-6 border border-purple-400">
          <h3 className="font-bold mb-2 text-2xl">Management</h3>
          <p className=" text-gray-300 mb-4">
            I have worked with multiple clients and stakeholders to define projects that suit their needs and have led
            these projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600 rounded-full ">Agile</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full ">Scrum</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full ">PM</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full ">Gantt</span>
          </div>
        </div>
        </div>
        


      </div>
    </section>
  )
}


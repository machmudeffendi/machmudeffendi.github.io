import Box from "@/components/about-me/Box"
import BoxExperience from "@/components/about-me/BoxExperience"
import { EDUCATION, EXPEREINCE } from "@/utility/constant"

export default function AboutMe(){
  return (
    <div className="flex flex-col gap-[20px] lg:px-12">
      <Box title="Executive Summary">
        <p className="text-white">A highly skilled Software Engineer with 5 years of experience in designing, developing, and deploying scalable software solutions. Proficient in multiple programming languages and frameworks, with a strong background in software architecture, system optimization and problem-solving. Adept at collaborating with cross-functional teams to deliver high-quality products that meet business objectives. Passionate about continuous learning and leveraging emerging technologies to drive innovation and efficiency in software development.</p>
      </Box>
      <Box title="Experience">
        <div className="flex flex-col gap-[20px]">
          {EXPEREINCE.map((item) => <BoxExperience key={item.title} item={item}/>)}
        </div>
      </Box>
      <Box title="Education">
        <div className="flex flex-col gap-[20px]">
          {EDUCATION.map((item) => <BoxExperience key={item.title} item={item}/>)}
        </div>
      </Box>
    </div>
  )
}
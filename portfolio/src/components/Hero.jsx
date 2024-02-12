import { skills } from '@/data/data'
import SkillsCard from './SkillsCard'
const Hero = () => {
  return (
    <section>
      good day to you. i am a competent developer. see my skills.
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}
export default Hero

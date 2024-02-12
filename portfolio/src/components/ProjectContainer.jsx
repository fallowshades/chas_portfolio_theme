'use client'
import { projects } from '@/data/data'
import ProjectCard from './ProjectCard.jsx'
const ProjectContainer = () => {
  console.log(projects)
  return (
    <section className="py-20 align-element">
      <h2>My projects</h2>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default ProjectContainer

'use client'
function ProjectInfo({ icon, text }) {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      {text}
    </div>
  )
}
export default ProjectInfo

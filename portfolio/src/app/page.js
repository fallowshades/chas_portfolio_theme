import { Hero, ContactDetails, ProjectContainer } from '@/components'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <ProjectContainer />
      <ContactDetails />
    </div>
  )
}

'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import ProjectInfo from './ProjectInfo'
const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{github}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        {/* card info */}
        <ProjectInfo icon={<Briefcase />} text={url} />
        <ProjectInfo icon={<MapPin />} text={text} />
        <img src={img} alt="img" />
        <ProjectInfo icon={<CalendarDays />} text={img} />
        <Badge className="w-32  justify-center">
          {' '}
          <ProjectInfo icon={<RadioTower />} text={text} />
        </Badge>
        {/* card info */}
      </CardContent>
    </Card>
  )
}
export default ProjectCard

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, Map, Users, Puzzle, BookOpen, Skull } from "lucide-react"
import Link from "next/link"
import VoodooChatball from "@/components/VoodooChatball"

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Characters",
      description: "Meet the Caribbean's Most Wanted",
      href: "/characters"
    },
    {
      icon: Map,
      title: "Locations",
      description: "Tourist Traps & Pirate Hotspots",
      href: "/locations"
    },
    {
      icon: Compass,
      title: "Items",
      description: "Pirate's Shopping List",
      href: "/items"
    },
    {
      icon: BookOpen,
      title: "Walkthrough",
      description: "Your GPS to Glory",
      href: "/walkthrough"
    },
    {
      icon: Puzzle,
      title: "Puzzles",
      description: "Brain Teasers for Pirates",
      href: "/puzzles"
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Skull className="h-20 w-20 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">The Not-So-Serious Guide to Monkey Island 2</h1>
        <p className="text-xl text-muted-foreground">
          Where pirates are weird, puzzles are weirder, and the solutions make even less sense
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card 
            key={feature.title} 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link href={feature.href}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>

      <Card className="bg-accent">
        <CardHeader>
          <CardTitle className="text-2xl">🏴‍☠️ New to Monkey Island 2?</CardTitle>
          <CardDescription className="text-lg">
            Prepare for a journey that makes Alice's trip to Wonderland look perfectly normal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Join Guybrush Threepwood, a self-proclaimed mighty pirate with the survival instincts of a lemming, 
            in his quest to find Big Whoop - a treasure so mysterious, even the people who hid it probably forgot where it is.
          </p>
          <Button size="lg" className="w-full" asChild>
            <Link href="/walkthrough">Begin Your Questionable Adventure</Link>
          </Button>
        </CardContent>
      </Card>
      <VoodooChatball />

    </div>
  )
}
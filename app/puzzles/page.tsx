import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const puzzles = [
  {
    title: "Creating the Voodoo Doll",
    description: "Create a voodoo doll to deal with Largo LaGrande",
    location: "Voodoo Lady's Shop",
    solution: "Collect four personal items from Largo: his hankie, some spit, a thread from his clothes, and some of his ashes.",
    items: ["Hankie", "Spit", "Thread", "Ashes"]
  },
  {
    title: "Getting into the Governor's Mansion",
    description: "Find a way to enter Elaine's mansion on Booty Island",
    location: "Booty Island",
    solution: "Win the spitting contest to get the gardener's key, or find another creative way in through the kitchen.",
    items: ["Gardener's Key", "Kitchen Pass"]
  }
]

export default function PuzzlesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Puzzles</h1>
        <p className="text-muted-foreground">Solutions to all puzzles in Monkey Island 2</p>
      </div>

      <div className="space-y-6">
        {puzzles.map((puzzle) => (
          <Card key={puzzle.title}>
            <CardHeader>
              <CardTitle>{puzzle.title}</CardTitle>
              <CardDescription>{puzzle.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <Badge variant="secondary">{puzzle.location}</Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Required Items</h3>
                <div className="flex flex-wrap gap-2">
                  {puzzle.items.map((item) => (
                    <Badge key={item} variant="outline">{item}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Solution</h3>
                <p className="text-sm text-muted-foreground">{puzzle.solution}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
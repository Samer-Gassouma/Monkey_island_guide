import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip } from "@/components/ui/tooltip"

const characters = [
  {
    name: "LeChuck",
    role: "Main Antagonist",
    description: "An undead pirate captain who refuses to stay dead. His obsessive pursuit of Elaine Marley and determination to destroy Guybrush Threepwood knows no bounds.",
    popCultureRef: "Like Davy Jones from Pirates of the Caribbean, but with more supernatural resurrections and a worse temper.",
    funFact: "Has been defeated in various forms including ghost, zombie, demon, and even as a flaming bearded head.",
    image: "/images/lechuck.jpg"
  },
  {
    name: "Guybrush Threepwood",
    role: "Protagonist",
    description: "A wannabe pirate turned actual pirate who constantly proves that wit and clever dialogue can overcome any obstacle. Mighty Pirate™ and master of holding breath underwater.",
    popCultureRef: "Think Jack Sparrow, but more awkward and with better puzzle-solving skills.",
    funFact: "His name came from a file name 'guy.brush' created in Deluxe Paint, as he was just a brush file of a guy.",
    image: "/images/guybrush.jpg"
  },
  {
    name: "Elaine Marley",
    role: "Supporting Character",
    description: "The brilliant and capable governor of the Tri-Island Area. Often finds herself having to rescue Guybrush, despite being the one supposedly being rescued.",
    popCultureRef: "Elizabeth Swann from Pirates of the Caribbean, but with actual governing experience and more sass.",
    funFact: "Is actually more proficient at sword fighting and pirating than most pirates in the Caribbean.",
    image: "/images/elaine.jpg"
  },
  {
    name: "Stan S. Stanman",
    role: "Supporting Character",
    description: "The Caribbean's most persistent salesman. Whether it's ships, coffins, or timeshares, Stan will sell it with enthusiasm and wild arm movements.",
    popCultureRef: "Like a medieval Gil Gunderson from The Simpsons, but with a better fashion sense and more successful.",
    funFact: "His plaid jacket actually moves independently from his body sprite in the original games.",
    image: "/images/stan.jpg"
  }
]

export default function CharactersPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Cast of Characters</h1>
        <p className="text-xl text-muted-foreground">Meet the Most Dysfunctional Crew Since The Office</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {characters.map((character) => (
          <Card key={character.name} className="flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardHeader>
              <div className="relative">
                <img
                  src={character.image}
                  alt={character.name}
                  className="aspect-[16/9] rounded-lg object-cover mb-4"
                />
                <Badge 
                  className="absolute top-2 right-2" 
                  variant={
                    character.role === "Main Antagonist" ? "destructive" 
                    : character.role === "Protagonist" ? "default"
                    : "secondary"
                  }
                >
                  {character.role}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{character.name}</CardTitle>
              <CardDescription className="text-lg">{character.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pop Culture Reference</h3>
                <p className="text-sm italic">{character.popCultureRef}</p>
              </div>
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Fun Fact</h3>
                <p className="text-sm">{character.funFact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
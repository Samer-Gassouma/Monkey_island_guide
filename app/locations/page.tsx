import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const locations = [
  {
    name: "Scabb Island",
    description: "A pirate-infested island terrorized by Largo LaGrande, who's been extorting money from all visitors and residents",
    image: "/images/scabb-island.jpg",
    items: ["Monocle Prescription", "Bucket", "Stick", "Rope", "Rat"],
    characters: ["Largo LaGrande", "Voodoo Lady", "Wally", "Mad Marty", "Captain Dread"]
  },
  {
    name: "Phatt Island",
    description: "A heavily policed island ruled by the grotesquely obese Governor Phatt",
    image: "/images/phatt-island.jpg",
    items: ["Library Card", "Book", "Wanted Poster", "Telegram"],
    characters: ["Governor Phatt", "Librarian", "Guard Dog"]
  },
  {
    name: "Booty Island",
    description: "A tourist-friendly island governed by Elaine Marley, featuring the famous Booty Boutique",
    image: "/images/booty-island.jpg",
    items: ["Party Invitation", "Dancing Scarf", "Ship's Horn", "Paper Bag"],
    characters: ["Elaine Marley", "Stan", "Rum Rogers Jr.", "Kate Capsize"]
  },
  {
    name: "Dinky Island",
    description: "A mysterious island that supposedly holds Big Whoop, the legendary treasure",
    image: "/images/dinky-island.jpg",
    items: ["Shovel", "Map Pieces", "Dynamite"],
    characters: ["Herman Toothrot", "Rum Rogers Sr."]
  }
]

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Locations</h1>
        <p className="text-muted-foreground">Explore the various islands and areas in Monkey Island 2</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <Card key={location.name}>
            <CardHeader>
              <img
                src={location.image}
                alt={location.name}
                className="aspect-video rounded-lg object-cover"
              />
              <CardTitle>{location.name}</CardTitle>
              <CardDescription>{location.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Notable Items</h3>
                  <ScrollArea className="h-12">
                    <div className="flex flex-wrap gap-2">
                      {location.items.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Characters</h3>
                  <ScrollArea className="h-12">
                    <div className="flex flex-wrap gap-2">
                      {location.characters.map((character) => (
                        <Badge key={character} variant="outline">{character}</Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
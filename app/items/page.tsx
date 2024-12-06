import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const items = [
  {
    name: "Monkey Head Key",
    description: "An ancient key shaped like a monkey's head",
    image: "/items/monkey-head-key.jpg",
    location: "Inside Big Whoop Coffin",
    usage: "Used to unlock the entrance to Big Whoop"
  },
  {
    name: "Spitting Contest Trophy",
    description: "Trophy won from the spitting contest on Booty Island",
    image: "/items/spitting-trophy.jpg",
    location: "Booty Island",
    usage: "Used to prove your worth to Governor Marley"
  },
  {
    name: "Voodoo Doll",
    description: "A magical doll created by the Voodoo Lady",
    image: "/items/voodoo-doll.jpg",
    location: "Voodoo Lady's Shop",
    usage: "Used to defeat Largo LaGrande"
  },
  {
    name: "Mad Monkey Cocktail",
    description: "A potent drink that can melt metal",
    image: "/items/mad-monkey-drink.jpg",
    location: "Bloody Lip Bar",
    usage: "Used to dissolve the lock on Captain Dread's chest"
  },
  {
    name: "Monocle",
    description: "A fancy eyepiece",
    image: "/items/monocle.jpg",
    location: "Mansion on Booty Island",
    usage: "Used to read the map in the dark"
  },
  {
    name: "Lucky Bone",
    description: "A magical bone with mysterious powers",
    image: "/items/lucky-bone.jpg",
    location: "Cemetery on Scabb Island",
    usage: "Part of the ingredients for the voodoo doll"
  }
]

export default function ItemsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Items</h1>
        <p className="text-muted-foreground">Complete inventory guide for Monkey Island 2</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square rounded-lg object-cover"
              />
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <Badge variant="secondary">{item.location}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Usage</h3>
                  <p className="text-sm text-muted-foreground">{item.usage}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
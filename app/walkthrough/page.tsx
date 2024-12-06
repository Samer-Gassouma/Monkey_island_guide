import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import WalkthroughSection from "@/components/walkthrough/walkthrough-section"
import { chapters } from "@/lib/walkthrough-data"

export default function WalkthroughPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Walkthrough</h1>
        <p className="text-muted-foreground">Complete guide to beating Monkey Island 2</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Follow this walkthrough chapter by chapter to complete Monkey Island 2. Each section contains detailed instructions and solutions to all puzzles you'll encounter.</p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {chapters.map((chapter, index) => (
          <WalkthroughSection key={chapter.id} chapter={chapter} index={index} />
        ))}
      </div>
    </div>
  )
}
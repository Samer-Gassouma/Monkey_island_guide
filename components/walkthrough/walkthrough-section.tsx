"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Chapter } from "@/lib/types"

interface WalkthroughSectionProps {
  chapter: Chapter
  index: number
}

export default function WalkthroughSection({ chapter, index }: WalkthroughSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center justify-between">
            <CardTitle>Chapter {index + 1}: {chapter.title}</CardTitle>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            {chapter.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
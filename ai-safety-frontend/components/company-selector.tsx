"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CompanySelectorProps {
  company1: string
  company2: string
  onCompany1Change: (value: string) => void
  onCompany2Change: (value: string) => void
}

const companies = [
  "Anthropic's Claude",
  "OpenAI's GPT-4",
  "Google's Gemini",
  "Meta's Llama",
  "Mistral AI",
  "Microsoft's Copilot",
  "xAI's Grok",
  "Cohere",
  "AI21 Labs",
  "Inflection AI (Pi)",
]

export function CompanySelector({ company1, company2, onCompany1Change, onCompany2Change }: CompanySelectorProps) {
  return (
    <Card className="mb-12 border-border/50 bg-[#111] p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Company 1</label>
          <Select value={company1} onValueChange={onCompany1Change}>
            <SelectTrigger className="border-border/50 bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Company 2</label>
          <Select value={company2} onValueChange={onCompany2Change}>
            <SelectTrigger className="border-border/50 bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Compare</Button>
      </div>
    </Card>
  )
}

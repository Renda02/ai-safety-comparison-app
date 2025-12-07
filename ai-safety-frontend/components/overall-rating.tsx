"use client"

import { Card } from "@/components/ui/card"
import { companyData } from "@/lib/company-data"

interface OverallRatingProps {
  company1: string
  company2: string
}

export function OverallRating({ company1, company2 }: OverallRatingProps) {
  const data1 = companyData[company1]
  const data2 = companyData[company2]

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Safety Philosophy Overview</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-gradient-to-br from-blue-950/30 to-[#111] p-8">
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">{company1}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{data1.approach}</p>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-emerald-950/30 to-[#111] p-8">
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">{company2}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{data2.approach}</p>
        </Card>
      </div>
    </div>
  )
}

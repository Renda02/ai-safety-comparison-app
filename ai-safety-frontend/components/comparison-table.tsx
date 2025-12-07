"use client"

import { Card } from "@/components/ui/card"
import { companyData } from "@/lib/company-data"

interface ComparisonTableProps {
  company1: string
  company2: string
}

export function ComparisonTable({ company1, company2 }: ComparisonTableProps) {
  const data1 = companyData[company1]
  const data2 = companyData[company2]

  const rows = [
    {
      category: "Core Philosophy",
      company1: data1.comparison.corePhilosophy,
      company2: data2.comparison.corePhilosophy,
    },
    {
      category: "Risk Prioritization",
      company1: data1.comparison.riskPrioritization,
      company2: data2.comparison.riskPrioritization,
    },
    {
      category: "Safety Framework",
      company1: data1.comparison.safetyFramework,
      company2: data2.comparison.safetyFramework,
    },
    {
      category: "Technical Methods",
      company1: data1.comparison.technicalMethods,
      company2: data2.comparison.technicalMethods,
    },
    {
      category: "Trade-offs",
      company1: data1.comparison.tradeoffs,
      company2: data2.comparison.tradeoffs,
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Safety Philosophy Comparison</h2>
      <Card className="overflow-hidden border-border/50 bg-[#111]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">{company1}</th>
                <th className="px-4 py-3 text-left font-semibold">{company2}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.category} className={index !== rows.length - 1 ? "border-b border-border/30" : ""}>
                  <td className="px-4 py-3 font-medium text-muted-foreground align-top">{row.category}</td>
                  <td className="px-4 py-3 text-sm leading-relaxed align-top">{row.company1}</td>
                  <td className="px-4 py-3 text-sm leading-relaxed align-top">{row.company2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

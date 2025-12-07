"use client"

import { useState } from "react"
import { CompanySelector } from "@/components/company-selector"
import { ComparisonTable } from "@/components/comparison-table"
import { OverallRating } from "@/components/overall-rating"
import { References } from "@/components/references"
import { Footer } from "@/components/footer"

export default function Page() {
  const [company1, setCompany1] = useState("Anthropic's Claude")
  const [company2, setCompany2] = useState("OpenAI's GPT-4")

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground">
      {/* Hero Section */}
      <div className="border-b border-border/30 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-6xl">
              AI Safety Approaches Comparison
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Compare safety philosophies with visual metrics
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Company Selector */}
        <CompanySelector
          company1={company1}
          company2={company2}
          onCompany1Change={setCompany1}
          onCompany2Change={setCompany2}
        />

        {/* Comparison Table */}
        <ComparisonTable company1={company1} company2={company2} />

        {/* Overall Rating */}
        <OverallRating company1={company1} company2={company2} />

        {/* References */}
        <References />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

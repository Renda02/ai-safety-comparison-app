import { Card } from "@/components/ui/card"

export function References() {
  const references = [
    {
      title: "Anthropic's Constitutional AI",
      url: "https://anthropic.com",
    },
    {
      title: "OpenAI Safety Research",
      url: "https://openai.com/safety",
    },
    {
      title: "AI Safety Fundamentals",
      url: "https://aisafetyfundamentals.com",
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">References</h2>
      <Card className="border-border/50 bg-[#111] p-6">
        <ul className="space-y-3">
          {references.map((ref, index) => (
            <li key={index}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
              >
                {ref.title} →
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

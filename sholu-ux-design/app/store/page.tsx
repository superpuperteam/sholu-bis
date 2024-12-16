import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "For small businesses and startups",
    features: ["1,000 comments/month", "3 social media accounts", "Basic sentiment analysis"],
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing businesses",
    features: ["10,000 comments/month", "10 social media accounts", "Advanced sentiment analysis", "Trend detection"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited comments", "Unlimited social media accounts", "Custom integrations", "Dedicated support"],
  },
]

export default function StorePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


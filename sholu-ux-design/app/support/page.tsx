import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I connect my social media accounts?",
    answer: "You can connect your social media accounts in the Profile section under the Integrations tab. Click on the 'Connect' button next to each platform you want to integrate.",
  },
  {
    question: "What types of analysis does Sholu provide?",
    answer: "Sholu provides sentiment analysis, trend detection, and automatic categorization of comments. The specific features depend on your chosen plan.",
  },
  {
    question: "How often is the data updated?",
    answer: "Data is updated in real-time for most platforms. However, some platforms may have a slight delay due to API limitations. Check the documentation for specific details on each platform.",
  },
  {
    question: "Can I export the analysis results?",
    answer: "Yes, you can export analysis results in various formats including CSV, PDF, and Excel. This feature is available on all paid plans.",
  },
]

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Support Center</h1>
      <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Can't find what you're looking for? Reach out to our support team.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea id="message" placeholder="Your message" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}


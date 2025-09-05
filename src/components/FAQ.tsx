import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-background max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Can I nominate more than one business?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Yes, you may nominate more than one business, but each nomination
              must be submitted separately.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Does it cost anything to nominate?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              No, nominations are completely free and open to everyone across
              Canada.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

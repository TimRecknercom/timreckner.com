import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Roblox animations, my YouTube channel, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How do you create your Roblox animations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I create all my animations in Roblox Studio using its built-in animation tools. Each animation typically
                takes about two days to complete, from planning to final rendering. I focus on smooth movements and
                expressive characters to make the animations engaging and entertaining.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">How often do you upload new videos?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I try to upload new videos weekly, but the schedule can vary depending on the complexity of the
                animations I'm working on. For the most up-to-date content, make sure to subscribe to my YouTube channel
                and enable notifications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Can I use your animations in my own projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                My animations are protected by copyright, so you cannot use them directly in your own projects without
                permission. However, you're welcome to learn from my techniques and create your own original animations.
                If you'd like to collaborate or license my work, please contact me directly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Do you offer Roblox animation tutorials?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! I have several tutorials on my YouTube channel that cover various aspects of Roblox animation. I'm
                always working on creating more educational content to help aspiring animators learn and improve their
                skills.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                What equipment do you use for creating content?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I use a gaming PC with a good graphics card for smooth Roblox Studio performance. For recording, I use
                OBS Studio, and I edit my videos with Adobe Premiere Pro. I also use a drawing tablet for some animation
                work and character design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">How can I support your channel?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The best ways to support my channel are to subscribe, like, comment, and share my videos. Engaging with
                my content helps it reach more people. You can also follow me on social media platforms like Instagram
                and TikTok to stay updated with my latest work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">Do you accept animation commissions?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I occasionally accept commission work for Roblox animations, depending on my current workload and the
                project details. If you're interested in commissioning an animation, please reach out through the
                contact form on this website with details about your project.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">How did you learn Roblox animation?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I learned Roblox animation through a combination of official Roblox documentation, YouTube tutorials,
                and lots of practice. I started with simple animations and gradually worked my way up to more complex
                ones. Consistent practice and a willingness to learn from mistakes were key to improving my skills.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, feel free to contact me directly.
            </p>
            <Button>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

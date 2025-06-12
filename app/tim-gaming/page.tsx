import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TimGaming() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Tim Gaming</h1>
            <p className="text-xl mb-8">Explore my Roblox animations, gaming content, and development tutorials</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                <Link
                  href="https://www.youtube.com/channel/UC3cICxBGJWQ8afBHypdmVzw?sub_confirmation=1"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10a2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  Subscribe on YouTube
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="https://www.youtube.com/@Timgaming147/videos" target="_blank">
                  View Latest Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/TqfL7ZTdUZA"
              title="Tim Animations Roblox Featured Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">About My Gaming Channel</h3>
            <p className="text-gray-700">
              Welcome to Tim Gaming! I create Roblox animations and gaming content for a growing community of fans. Each
              animation takes about two days to complete in Roblox Studio, and I'm constantly working to improve my
              skills and bring you better content.
            </p>
            <p className="text-gray-700">
              With over 450 subscribers and more than 70,000 views across 540+ videos, I'm dedicated to creating
              entertaining and informative content about Roblox and game development.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Card className="bg-gray-50">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-red-600">453</p>
                  <p className="text-sm text-gray-600">Subscribers</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-red-600">389</p>
                  <p className="text-sm text-gray-600">Views</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Community!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to my YouTube channel to never miss a new Roblox animation and be part of our growing community.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">
            <Link
              href="https://www.youtube.com/channel/UC3cICxBGJWQ8afBHypdmVzw?sub_confirmation=1"
              target="_blank"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10a2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              Subscribe Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

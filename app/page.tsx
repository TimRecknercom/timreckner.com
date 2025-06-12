import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile%20%282%29.jpg-Z4GOvfQq34xhk2TOriOYhpxuF69YJw.jpeg"
                alt="TimReckner.com Logo"
                width={40}
                height={40}
                className="rounded"
              />
            </div>
            <h1 className="text-xl font-bold">TimReckner.com</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/tim-gaming" className="font-medium hover:text-red-600 transition-colors space-y-px">
              Tim Gaming
            </Link>
            <Link href="/faq" className="font-medium hover:text-red-600 transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              Log In
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://sjc.microlink.io/SY-P8rqgGuX9w669-TA2R4oVL80y0hvT3Gwhs0SBCSnS7R9ufJaXEpT3rEiSZ2VnqW83ikeHFm1Cp068AM7aVA.jpeg"
                alt="Teenagers find online success through Roblox"
                width={1200}
                height={675}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Teenagers find online success through Roblox
                </h2>
                <p className="text-white/90 mt-2">
                  Exploring how young developers are creating opportunities in the gaming world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/wsN3TkB95jg"
                  title="Tim Animations Roblox Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">Latest Roblox Animation</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Check out my newest Roblox animation featuring custom characters and smooth movements. This animation
                  took about two days to complete in Roblox Studio.
                </p>
                <div className="flex gap-4">
                  <Link href="https://youtu.be/wsN3TkB95jg" target="_blank">
                    <Button variant="outline">Watch on YouTube</Button>
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UC3cICxBGJWQ8afBHypdmVzw?sub_confirmation=1"
                    target="_blank"
                  >
                    <Button className="bg-red-600 hover:bg-red-700">Subscribe for More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">About Tim Reckner</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  Hello! I'm Tim, a passionate Roblox animator and content creator. I specialize in creating engaging
                  animations in Roblox Studio, which typically take about two days to complete.
                </p>
                <p className="text-gray-700 mb-4">
                  My YouTube channel features a variety of Roblox animations and gaming content. With over 450
                  subscribers and more than 70,000 views across 540+ videos, I'm constantly working to bring quality
                  content to my audience.
                </p>
                <p className="text-gray-700">
                  Whether you're interested in Roblox development, animations, or gaming in general, you'll find
                  valuable content here on TimReckner.com and on my YouTube channel.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-red-600 hover:bg-red-700">
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
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                      Subscribe to My Channel
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to get notified about new content, tutorials, and Roblox tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input type="email" placeholder="Your email address" className="px-4 py-2 border rounded-md flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative w-8 h-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile%20%282%29.jpg-Z4GOvfQq34xhk2TOriOYhpxuF69YJw.jpeg"
                  alt="TimReckner.com Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <span className="text-sm font-medium">TimReckner.com</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
              <Link href="/" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="/tim-gaming" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                Tim Gaming
              </Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/channel/UC3cICxBGJWQ8afBHypdmVzw"
                target="_blank"
                className="text-gray-600 hover:text-red-600 transition-colors"
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/timgaming74_yt"
                target="_blank"
                className="text-gray-600 hover:text-pink-600 transition-colors"
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
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com/@timgaming74"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} TimReckner.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

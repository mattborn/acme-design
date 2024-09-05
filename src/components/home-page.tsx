'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Paintbrush, Smartphone } from "lucide-react"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Paintbrush className="h-6 w-6" />
          <span className="sr-only">Acme Design Co</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crafting Digital Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We're a creative design agency passionate about bringing your ideas to life.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Paintbrush className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Graphic Design</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Stunning visuals that capture your brand's essence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Code className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Web Development</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Cutting-edge websites that engage and convert.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Smartphone className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Mobile Apps</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Intuitive mobile experiences for iOS and Android.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={`Project ${item}`}
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button>
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Design Co. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
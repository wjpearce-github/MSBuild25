import Link from "next/link"
import Image from "next/image"
import { Train, Clock, Shield, Wifi, Coffee, Star, ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Train className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">RailWay</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Routes
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Schedules
            </Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Support
            </Link>
            <button className="px-4 py-2 text-sm border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                ✨ Now with 30% faster booking
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Travel by train,
                <span className="text-blue-600"> arrive refreshed</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Book your perfect train journey in seconds. Comfortable seats, reliable schedules, and unbeatable prices
                across the country.
              </p>
            </div>

            {/* Quick Booking Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full pl-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Boston"
                      className="w-full pl-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Departure</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      className="w-full pl-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="2 adults"
                      className="w-full pl-10 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md flex items-center justify-center">
                Search Trains
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Modern train at station"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">On-time guarantee</p>
                  <p className="text-sm text-slate-600">99.2% punctuality rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why choose RailWay?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the future of train travel with our premium services and unmatched reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Safe & Secure</h3>
              <p className="text-slate-600">Advanced safety systems and secure payment processing for peace of mind.</p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Free WiFi</h3>
              <p className="text-slate-600">
                Stay connected throughout your journey with complimentary high-speed internet.
              </p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Onboard Dining</h3>
              <p className="text-slate-600">Enjoy fresh meals and beverages from our premium dining car selection.</p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Always On Time</h3>
              <p className="text-slate-600">Reliable schedules with real-time updates and guaranteed punctuality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Popular Routes</h2>
            <p className="text-xl text-slate-600">Discover our most traveled destinations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="New York to Boston"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full">Popular</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">New York → Boston</h3>
                <p className="text-slate-600 mb-4">Experience the scenic Northeast Corridor</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$89</p>
                    <p className="text-sm text-slate-500">from</p>
                  </div>
                  <button className="px-4 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Chicago to Milwaukee"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Chicago → Milwaukee</h3>
                <p className="text-slate-600 mb-4">Quick connection to the Midwest</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$45</p>
                    <p className="text-sm text-slate-500">from</p>
                  </div>
                  <button className="px-4 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Los Angeles to San Francisco"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">LA → San Francisco</h3>
                <p className="text-slate-600 mb-4">Coastal views along the Pacific</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">$129</p>
                    <p className="text-sm text-slate-500">from</p>
                  </div>
                  <button className="px-4 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What our passengers say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Incredibly smooth booking process and the train was spotless. The WiFi worked perfectly for my entire
                4-hour journey."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-sm text-slate-500">Business Traveler</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Family-friendly service with comfortable seating. My kids loved watching the scenery go by. Much better
                than flying!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mike Chen</p>
                  <p className="text-sm text-slate-500">Family Vacation</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Punctual, clean, and affordable. The mobile app made everything so easy. I'm definitely booking again."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-blue-600">ER</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Emma Rodriguez</p>
                  <p className="text-sm text-slate-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready for your next adventure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied passengers who choose RailWay for comfortable, reliable, and affordable train
              travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-md font-medium flex items-center justify-center">
                Book Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-md font-medium">
                View All Routes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Train className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">RailWay</span>
              </div>
              <p className="text-slate-400">Making train travel accessible, comfortable, and reliable for everyone.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Book Tickets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Check Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Track Train
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Manage Booking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Travel Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} RailWay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Button } from '@heroui/react'
import { ArrowRight } from 'lucide-react' 

function AboutPage() {
  return (
    <>
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 py-20 md:py-28">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-yellow-200/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Our Story</span>
              <span className="block text-orange-500 mt-2">About Us</span>
            </h1>
            <p className="sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We're revolutionizing online shopping with a commitment to quality, 
              innovation, and exceptional customer service. Our journey began with 
              a simple idea: make premium products accessible to everyone.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-6 rounded-xl hover:shadow-xl transition-all"
                endContent={<ArrowRight className="ml-2" />}
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-gray-300 text-gray-700 font-bold px-8 py-6 rounded-xl hover:border-orange-500 transition-all"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default AboutPage

import { Button, Divider } from '@heroui/react' 
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'

function Footer() {
  return (
    <>
     <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-xl">S</span>
                </div>
                <span className="font-bold text-2xl">
                  <span className="text-white">SHOP</span>
                  <span className="text-orange-500">ONLINE</span>
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium online shopping experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Home</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">About Us</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Products</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">FAQ</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Shipping Policy</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Returns & Refunds</li>
                <li className="text-gray-400 hover:text-orange-500 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex gap-3 mb-6">
                <Button isIconOnly variant="flat" className="bg-gray-800 hover:bg-orange-500">
                  <FaFacebook className="w-5 h-5" />
                </Button>
                <Button isIconOnly variant="flat" className="bg-gray-800 hover:bg-orange-500">
                  <BsTwitter className="w-5 h-5" />
                </Button>
                <Button isIconOnly variant="flat" className="bg-gray-800 hover:bg-orange-500">
                  <BsInstagram className="w-5 h-5" />
                </Button>
                <Button isIconOnly variant="flat" className="bg-gray-800 hover:bg-orange-500">
                  <LiaLinkedin className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for updates.
              </p>
            </div>
          </div>
          
          <Divider className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ShopOnline. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

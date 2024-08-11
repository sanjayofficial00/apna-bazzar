import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">About</h5>
            <p className="text-gray-400">Flipkart is India's largest online store offering a wide range of products including electronics, apparel, and more.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Help</h5>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#">Payments</a></li>
              <li className="mb-2"><a href="#">Shipping</a></li>
              <li className="mb-2"><a href="#">Returns</a></li>
              <li className="mb-2"><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Policy</h5>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#">Return Policy</a></li>
              <li className="mb-2"><a href="#">Terms Of Use</a></li>
              <li className="mb-2"><a href="#">Security</a></li>
              <li className="mb-2"><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Social</h5>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#">Facebook</a></li>
              <li className="mb-2"><a href="#">Twitter</a></li>
              <li className="mb-2"><a href="#">YouTube</a></li>
              <li className="mb-2"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Flipkart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
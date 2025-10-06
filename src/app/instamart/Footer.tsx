import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-black h-230 ">
      <div className='container mx-auto p-23 md:block hidden'>
        <Image
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_96/Logo_f5xzza"
          alt='logo'
          width={190}
          height={50}
          className=''
        />
        <p className="text-[#9A9B94] font-bold text-xl mt-4">© 2024 Bundi <br /> Technologies Pvt.Ltd</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-13 px-23">
        <div>
          <h3 className="text-[#EBEBEC] font-extrabold text-xl mb-3">Category</h3>
          <ul className="space-y-2">
            <li className="text-[#9A9B94]  font-bold text-[16px]">Office and Electricals in.</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Office and Electricals in Delhi</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Sauces and Spreads in Delhi</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Office and Electricals in.</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Dairy, Bread and Eggs in Delhi</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Office and Electricals in Mumbai</li>

          </ul>
          <div className='border flex border-gray-600 mt-4 p-3 items-center justify-center rounded-2xl gap-4'>
            <p className="text-[#9A9B94]  font-bold text-[16px]">  144 Categories</p>
            <p>  <ChevronDown /></p>

          </div>
        </div>
        <div>
          <h3 className="text-[#EBEBEC] font-extrabold text-xl mb-3">We deliver to</h3>
          <ul className="space-y-2">
            <li className="text-[#9A9B94]  font-bold text-[16px]">Bangalore</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Delhi</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Jaipur</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Kochi</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Mumbai</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Noida</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Vadodara</li>
          </ul>
             <div className='border flex border-gray-600 mt-2 p-2 items-center justify-center rounded-2xl gap-4'>
            <p className="text-[#9A9B94] font-bold text-[16px]">27 Cities</p>
            <p><ChevronDown /></p>

          </div>
        </div>
        <div>
          <h3 className="text-[#EBEBEC] font-extrabold text-xl mb-3">Company</h3>
          <ul className="space-y-2">
            <li className="text-[#9A9B94]  font-bold text-[16px]">About</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Careers</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Team</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Swiggy One</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Swiggy Instamart</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Swiggy Genie</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#EBEBEC] font-extrabold text-xl mb-3">Legal</h3>
          <ul className="space-y-2">
            <li className="text-[#9A9B94]  font-bold text-[16px]">Terms & Conditions</li>
            <li className="text-[#9A9B94] font-bold text-[16px]">Cookie Policy</li>
            <li className="text-[#9A9B94]  font-bold text-[16px]">Privacy Policy</li>
          </ul>
          <div>
            <h3 className="mt-13 text-[#EBEBEC] font-extrabold text-xl mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-[#9A9B94]  font-bold text-[16px]">Help & Support</li>
              <li className="text-[#9A9B94] font-bold text-[16px]">Partner with Us</li>
              <li className="text-[#9A9B94]  font-bold text-[16px]">Ride With Us</li>
            </ul>
          </div>
        </div>
        <div className='w-full gap-134 flex justify-between'>
        <div className='t-4 font-bold text-xl flex gap-3'>
           <p> &copy; </p> <p>2025 </p> <p>Swiggy</p>
        </div>
        <div className='flex gap-4 mt-4'>
          
          <Image
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/facebook.png"
          alt='Facebook Logo'
          height={24}
          width={24}
          className='w-6 h-6 text-red-600'
        />
          <Image
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Pinterest.png"
          alt='Facebook Logo'
          height={24}
          width={24}
          className='w-6 h-6 text-red-600'
        />
          <Image
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Instagram.png"
          alt='Facebook Logo'
          height={24}
          width={24}
          className='w-6 h-6 text-red-600'
        />
          <Image
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/Twitter.png"
          alt='Facebook Logo'
          height={24}
          width={24}
          className='w-6 h-6 text-red-600'
        />

        </div>

        </div>





      </div>
    </div>
  )
}

export default Footer
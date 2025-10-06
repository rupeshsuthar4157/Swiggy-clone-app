import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-14 text-2xl">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-6 gap-28">
        <div className="col-span-1 flex flex-col ">
          <Image
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
            height={400}
            width={500}
            className="w-63 mb-2 "
          />
          <span className="text-sm text-[#617496]">© 2025 Swiggy Limited</span>
        </div>

        <div className="col-span-1.2">
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li><br />
            <li>Swiggy Corporate</li><br />
            <li>Careers</li><br />
            <li>Team</li><br />
            <li>Swiggy One</li><br />
            <li>Swiggy Instamart</li><br />
            <li>Swiggy Dineout</li><br />
            <li>Minis</li><br />
            <li>Pyng</li><br />
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="flex gap-1 font-semibold mb-2">Contact  <span>us</span></h3>
          <ul className="space-y-1 text-sm"> <br />
            <li>Help & Support</li> <br />
            <li>Partner With Us</li><br />
            <li>Ride With Us</li><br />
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li><br />
            <li>Cookie Policy</li><br />
            <li>Privacy Policy</li><br />
          </ul>
        </div>

        <div className="col-span-1.4">
          <h3 className="flex gap-1 font-semibold mb-2">Available<span>in</span></h3>
          <ul className="space-y-1 text-sm">
            <li>Bangalore</li><br />
            <li>Gurgaon</li><br />
            <li>Hyderabad</li><br />
            <li>Delhi</li><br />
            <li>Mumbai</li><br />
            <li>Pune</li><br />
          </ul>
          <select className="mt-2 border border-gray-300 rounded p-1 text-sm">
            <option>685 cities</option>
          </select>
        </div>
        <div className="col-span-2">
          <h3 className="font-semibold mb-2">Life at Swiggy</h3>
          <ul className="space-y-1 text-sm">
            <li>Explore With Swiggy</li> <br />
            <li>Swiggy News</li><br />
            <li>Snackables</li><br />
          </ul>
          <div className="col-span-2">
            <h3 className="font-semibold mb-1">Social Links</h3>
            <div className="flex space-x-4 mt-1">
              <Image src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" alt="LinkedIn" height={200} width={300} className="w-5 h-5" />
              <Image src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" alt="Instagram" height={200} width={300} className="w-5 h-5" />
              <Image src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" alt="Facebook" height={200} width={300} className="w-5 h-5" />
              <Image src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" alt="Pinterest" height={200} width={300} className="w-5 h-5" />
              <Image src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" alt="Twitter" height={200} width={300} className="w-5 h-5" />
            </div>
          </div>
        </div>


      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="font-semibold text-bold">For better experience, download the Swiggy app now</span>
        <div className="flex gap-1
         mt-2 md:mt-0">
          <Image
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="App Store"
            width={200}
            height={244}
            className="h-12 w-44 "
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            height={200}
            width={300}
            className="h-12 w-44 "
          />

        </div>
      </div>
    </footer>
  );
};

export default Footer;

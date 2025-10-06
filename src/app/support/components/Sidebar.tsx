"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Partner Onboarding", path: "/support/issues/partner-onboarding" },
  { name: "Legal", path: "/support/issues/legal" },
  { name: "FAQs", path: "/support/issues/faqs" },
  { name: "Instamart Onboarding", path: "/support/issues/instamart_onboarding" },
  { name: "IRCTC FAQ", path: "/support/issues/irctc_faq" },
];



export default function Sidebar() {
  const pathname = usePathname(); // current route



  return (
    <aside className=" w-64  mx-15 mt-13 pl-6 h-screen bg-[#EDF1F7] ">
      <ul className="space-y-2 mt-12">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block px-4 py-4 font-semibold text-lg ${isActive
                    ? "bg-white  text-black"
                    : "text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

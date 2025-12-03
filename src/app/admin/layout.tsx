"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Hero Slides", path: "/admin/hero-slides", icon: "🖼️" },
    { name: "About", path: "/admin/about", icon: "ℹ️" },
    { name: "Stats", path: "/admin/stats", icon: "📈" },
    { name: "Features", path: "/admin/features", icon: "⭐" },
    { name: "Services", path: "/admin/services", icon: "🏥" },
    { name: "Departments", path: "/admin/departments", icon: "🏢" },
    { name: "Doctors", path: "/admin/doctors", icon: "👨‍⚕️" },
    { name: "Appointments", path: "/admin/appointments", icon: "📅" },
    { name: "Testimonials", path: "/admin/testimonials", icon: "💬" },
    { name: "Gallery", path: "/admin/gallery", icon: "🖼️" },
    { name: "Pricing", path: "/admin/pricing", icon: "💰" },
    { name: "FAQs", path: "/admin/faqs", icon: "❓" },
    { name: "Contact Info", path: "/admin/contact-info", icon: "📞" },
    { name: "Contact Messages", path: "/admin/contact-messages", icon: "✉️" },
    { name: "Site Settings", path: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Medical Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                👤 {session?.user?.name}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-5 px-2">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

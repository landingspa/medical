"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Stats {
  heroSlides: number;
  services: number;
  departments: number;
  doctors: number;
  appointments: {
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  };
  testimonials: number;
  galleryImages: number;
  contactMessages: {
    total: number;
    unread: number;
  };
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (status === "authenticated") {
      fetchStats();
    }
  }, [status, router]);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats");
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Chào mừng trở lại, {session?.user?.name}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Hero Slides */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="text-3xl">🖼️</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Hero Slides
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {stats?.heroSlides || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="text-3xl">🏥</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Dịch vụ
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {stats?.services || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="text-3xl">🏢</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Khoa
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {stats?.departments || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="text-3xl">👨‍⚕️</div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Bác sĩ
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {stats?.doctors || 0}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointments Stats */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Thống kê Lịch hẹn
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="text-sm font-medium text-gray-500">Tổng</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                {stats?.appointments?.total || 0}
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="text-sm font-medium text-yellow-800">
                Chờ xử lý
              </div>
              <div className="mt-1 text-3xl font-semibold text-yellow-900">
                {stats?.appointments?.pending || 0}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="text-sm font-medium text-blue-800">
                Đã xác nhận
              </div>
              <div className="mt-1 text-3xl font-semibold text-blue-900">
                {stats?.appointments?.confirmed || 0}
              </div>
            </div>
          </div>
          <div className="bg-green-50 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="text-sm font-medium text-green-800">
                Hoàn thành
              </div>
              <div className="mt-1 text-3xl font-semibold text-green-900">
                {stats?.appointments?.completed || 0}
              </div>
            </div>
          </div>
          <div className="bg-red-50 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="text-sm font-medium text-red-800">Đã hủy</div>
              <div className="mt-1 text-3xl font-semibold text-red-900">
                {stats?.appointments?.cancelled || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Stats */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Khác</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="text-3xl">💬</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Đánh giá
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stats?.testimonials || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="text-3xl">🖼️</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Hình ảnh
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stats?.galleryImages || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="text-3xl">✉️</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Tin nhắn
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stats?.contactMessages?.total || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="text-3xl">📧</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-red-800 truncate">
                      Tin chưa đọc
                    </dt>
                    <dd className="text-2xl font-semibold text-red-900">
                      {stats?.contactMessages?.unread || 0}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

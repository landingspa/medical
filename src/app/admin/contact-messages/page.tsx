"use client";

import { useEffect, useState } from "react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/contact-messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/contact-messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });

      if (response.ok) {
        fetchMessages();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      markAsRead(message.id);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tin nhắn liên hệ</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages List */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => openMessage(message)}
                className={`p-4 hover:bg-gray-50 cursor-pointer ${
                  !message.isRead ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {message.name}
                      </p>
                      {!message.isRead && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Mới
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {message.subject}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(message.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Không có tin nhắn nào</p>
            </div>
          )}
        </div>

        {/* Message Detail */}
        <div className="bg-white shadow rounded-lg p-6">
          {selectedMessage ? (
            <div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedMessage.subject}
                </h2>
                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    <strong>Từ:</strong> {selectedMessage.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedMessage.email}
                  </p>
                  <p>
                    <strong>Ngày:</strong>{" "}
                    {new Date(selectedMessage.createdAt).toLocaleString(
                      "vi-VN"
                    )}
                  </p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Chọn một tin nhắn để xem chi tiết
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

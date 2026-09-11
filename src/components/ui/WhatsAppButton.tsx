"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {open && (
        <div className="mb-4 bg-white border border-border rounded-2xl shadow-2xl w-80 overflow-hidden">
          {/* Header */}
          <div className="bg-[#25D366] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">AJ Tech Academy</div>
                <div className="text-white/80 text-xs">Usually replies instantly</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#e5ddd5]">
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
              <p className="text-gray-800 text-sm">
                Hi! How can we help you today? 👋
              </p>
              <p className="text-gray-400 text-xs mt-1 text-right">Just now</p>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-border">
            <a
              href={`${SITE.phoneLink}?text=Hi! I'm interested in your courses.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-xl text-center font-medium text-sm transition-colors"
            >
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-gray-500 hover:bg-gray-600 rotate-90"
            : "bg-[#25D366] hover:bg-[#20BA5C] hover:scale-110"
        }`}
        aria-label="WhatsApp Chat"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}

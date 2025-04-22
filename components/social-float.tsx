"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, PhoneIcon as WhatsApp, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SocialFloat() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const socialLinks = [
    {
      id: "whatsapp",
      icon: <WhatsApp className="h-5 w-5" />,
      color: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
      link: "https://wa.me/923001234567",
    },
    {
      id: "facebook",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook",
      link: "https://facebook.com",
    },
    {
      id: "instagram",
      icon: <Instagram className="h-5 w-5" />,
      color: "bg-pink-600 hover:bg-pink-700",
      label: "Instagram",
      link: "https://instagram.com",
    },
    {
      id: "chat",
      icon: <MessageCircle className="h-5 w-5" />,
      color: "bg-secondary hover:bg-secondary/90",
      label: "Live Chat",
      link: "/contact",
    },
  ]

  return (
    <div className="social-float">
      {socialLinks.map((social) => (
        <div
          key={social.id}
          className="relative"
          onMouseEnter={() => setIsHovered(social.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Link href={social.link} target={social.id !== "chat" ? "_blank" : undefined}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`social-float-button text-white ${social.color}`}
            >
              {social.icon}
            </motion.div>
          </Link>

          <AnimatePresence>
            {isHovered === social.id && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: -5 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute top-1/2 right-full -translate-y-1/2 mr-2 whitespace-nowrap"
              >
                <div className="bg-background text-foreground px-3 py-1 rounded-md shadow-md text-sm font-medium">
                  {social.label}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}


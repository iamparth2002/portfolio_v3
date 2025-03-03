import { SocialLinks } from "./social-links"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-white text-center">
      <div className="container mx-auto px-4">
        <SocialLinks className="justify-center mb-6" />
        <p className="text-xl font-bold flex items-center justify-center gap-1">
          Crafted with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Parth Gandhi
        </p>
      </div>
    </footer>
  )
}


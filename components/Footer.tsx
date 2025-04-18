import React from "react"

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Jackson He. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About This Website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  )
}

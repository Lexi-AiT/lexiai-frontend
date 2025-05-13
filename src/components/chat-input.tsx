"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ChatInput() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 ">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Send a message....Can my Landlord evict without notice ..."
        className="shadow-md bg-white p-4 rounded-full flex-1 border border-input px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <Button type="submit" className="rounded-full shadow-lg bg-purple-300 text-white">
        Submit
      </Button>
    </form>
  )
}

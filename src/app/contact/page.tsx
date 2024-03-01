"use client"
import React from "react";
import { Meteors } from "../../components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm  text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
          Have queries about our workshops, lessons, or performances? Don't hesitate
          to get in touch. We're dedicated to supporting you along your musical odyssey.
        </p>
        <form className="space-y-4 mt-4">
          <input
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
          />
          <textarea
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <Meteors number={20} /> 
      <BackgroundBeams />
    </div>
  )
}

export default page
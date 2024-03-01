'use client'
import Link from 'next/link'
import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";
 


function UpcomingWebinars() {

    const featuredWebinars = [
        {
            "title": "Introduction to Music Theory",
            "description": "Join us for an introductory session on music theory where we cover the basics of notes, scales, and chords.",
            "slug": "introduction-to-music-theory",
            "isFeatured": true
        },
        {
            "title": "Mastering Guitar Techniques",
            "description": "Learn advanced guitar techniques including fingerpicking, bending, and sliding from our expert instructors.",
            "slug": "mastering-guitar-techniques",
            "isFeatured": true
        },
        {
            "title": "Exploring Jazz Improvisation",
            "description": "Discover the art of jazz improvisation and how to express yourself freely through your instrument.",
            "slug": "exploring-jazz-improvisation",
            "isFeatured": true
        },
        {
            "title": "Piano Performance Workshop",
            "description": "Participate in our piano performance workshop where you'll receive constructive feedback on your playing.",
            "slug": "piano-performance-workshop",
            "isFeatured": true
        },
        {
            "title": "Songwriting Masterclass",
            "description": "Join our songwriting masterclass and learn techniques to craft compelling lyrics and melodies.",
            "slug": "songwriting-masterclass",
            "isFeatured": true
        },
        {
            "title": "Exploring World Music Traditions",
            "description": "Delve into the rich tapestry of world music traditions and expand your musical horizons.",
            "slug": "exploring-world-music-traditions",
            "isFeatured": true
        }
    ]


  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
            <HoverEffect 
            items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/',
                }
            ))} 
            />
            </div>

            <div className='mt-10 text-center'>
                <Link href={"/"}>
                    <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >View All Webinars
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
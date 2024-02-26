'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote: "Studying at this music school has been a transformative experience for me. I've grown so much as a guitarist and performer thanks to the guidance of the talented faculty.",
      name: "Michael Smith",
      title: "Guitar Student"
    },
    {
      quote: "I'm grateful for the opportunity to learn from such passionate and dedicated teachers. They've inspired me to pursue my dreams in music with determination and enthusiasm.",
      name: "Sophia Chen",
      title: "Vocal Student"
    },
    {
      quote: "The supportive community at this music school has made my learning journey truly enjoyable. I've made lifelong friends and memories while honing my skills as a drummer.",
      name: "Daniel Lee",
      title: "Drum Student"
    },
    {
      quote: "The music school's curriculum is well-rounded and comprehensive. I've learned not only the technical aspects of playing the violin but also the importance of expression and emotion in music.",
      name: "Olivia Garcia",
      title: "Violin Student"
    },
    {
      quote: "I never imagined I could learn so much about music theory and composition in such an engaging way. The instructors here make even the most complex concepts easy to understand and apply.",
      name: "Benjamin Adams",
      title: "Composition Student"
    },
    {
      quote: "As an adult learner, I was initially hesitant to pursue music lessons, but the supportive environment of this music school made me feel welcome and encouraged. It's never too late to follow your passion!",
      name: "Natalie Brown",
      title: "Adult Piano Student"
    }
  ]
  

function MusicSchoolTestimonial() {
    return (
        <div className="h-[40rem] w-full dark:bg-black  bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            {/* this div just adds fades */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
      )
    
}

export default MusicSchoolTestimonial
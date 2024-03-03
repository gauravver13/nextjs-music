"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolContent = [
  {
    title: "Collaborative Composition",
    description:
      "Compose alongside your classmates and instructors in real-time. Share musical ideas, experiment with harmonies, and refine your compositions together. Streamline your creative process and unlock new musical possibilities through collaborative exploration.",
      // content: (
      //   <div className="h-full w-full  flex items-center justify-center text-white">
      //     <Image
      //       src="/gallery/collabMusic.jpg"
      //       width={300}
      //       height={300}
      //       className="h-full w-full object-cover"
      //       alt="Collab music image"
      //     />
      //   </div>
      // ),
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
  },
  {
    title: "Synchronized Ensemble Practice",
    description:
      "Experience seamless coordination during your ensemble rehearsals. Our platform allows everyone to see changes in real-time, ensuring everyone is playing the latest version of the piece. Say goodbye to confusion and missed cues, and embrace the power of synchronized practice for a more cohesive performance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/gallery/syncMusic.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="music image"
        />
      </div>
    ),
  },
  {
    title: "Streamlined Sheet Music Management",
    description:
      "Never worry about outdated sheet music again. Our platform provides real-time updates and ensures everyone has access to the most recent version of your piece. Eliminate the need for constant printing and manual updates, and stay focused on learning and making music together.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="gallery/streamlineSheet.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Streamline sheet music"
        />
      </div>
    ),
  },
  {
    title: "Spark Your Creativity",
    description:
      "Get inspired and overcome creative roadblocks with real-time feedback and collaborative brainstorming. Our platform fosters a dynamic learning environment where you can exchange ideas, receive constructive feedback, and explore new musical possibilities alongside your peers and instructors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/gallery/spark.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Spark Image"
        />
      </div>
    ),
  },
  {
    title: "Version Control for Music",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your music, eliminating the need for constant manual updates. Stay in the groove, keep your band aligned, and maintain the flow of your musical work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/gallery/versionControl.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Version Controlledf Music"
        />
      </div>
    ),
  },
];



function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
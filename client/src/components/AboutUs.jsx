import React from 'react'
import { Chef } from '../assets'
import { Header } from '../components'

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Header />
  <img src={Chef} className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" alt="" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero laudantium voluptatum ratione. Cumque sunt, natus amet aperiam tempore aspernatur, vitae fugit fugiat aliquid, magni ducimus odit nesciunt officia minus..”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Tim Cook
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Chief Chef
      </div>
    </figcaption>
  </div>
  </div>
  )
}

export default AboutUs
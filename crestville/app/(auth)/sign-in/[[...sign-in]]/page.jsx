"use client"
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import home from '../../../images/crestville-home.jpeg';
import crestville from '../../../images/Crestville.png';

export default function Page() {
  return(

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-40 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        alt=""
        src={home}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
          <Image
          src={crestville}
          className='h-14 w-16 sm:h-14'
           />
        </a>

        <h2 className="mt-4 text-lg font-bold text-white sm:text-xl md:text-2xl">
          Welcome to Crestville
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        <strong>Crestville Apartments</strong> is a Mini-Estate comprising units of 2, 1, studio bedrooms, spa, terraces, pool, nestled within a peaceful and perfect living environment, offering excellent living experience.
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
            <Image
              src={crestville}
              className='h-12 w-16 sm:h-10'
            />
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Crestville
          </h1>

          <p className="my-6  leading-relaxed text-gray-500">
            <strong>Crestville Apartments</strong> is a Mini-Estate comprising units of 2, 1, studio bedrooms, spa, terraces, pool, nestled within a peaceful and perfect living environment, offering excellent living experience.
          </p>
        </div>

        <SignIn />
      </div>
    </main>
  </div>
</section>
  )
  
}
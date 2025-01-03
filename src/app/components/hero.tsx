import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://di-uploads-development.dealerinspire.com/parksbuickgmcnc/uploads/2024/07/cta-current-offers-720x400-1.jpg"
                  alt="blog"
                  width={720}
                  height={400}
                />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF6ja20-pqAL-CQVUoEJIxR4yCk7Yyf0kOincw36IobUpfFz2HWOZz18&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXD9xFhJKgAxbDzyWEcBy3D8B_RVw3-spsw51q-hULUjxT54txZ7DcQoA&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTncR6yUzBdyFuXI2DMsnduGLfPHSVmsoRQrd42bINOrtrSUztQem_zpg&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqrNIMfmKJYmWsAlUkG0eY8co4y1DFP2bhkJbqDQeNnZ6tU9zBfclthw&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrzeP70NBwsYhh49Dk_rgRnOXZwMrWn_P3JBsP6m00oxIruTIGGTaqIQ&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7aM4kVTeNtWzBxos3SOOaLzrHTJ4DXevwP6JsUW2fpQVenEz2fFPmto&s"
            alt="blog"
            width={720}
            height={400}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={'#'} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Hero

'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)
   const [innovationList, setinnovationList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setinnovationList(data?.innovationList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='services'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  Where financial technology meets{' '}
                  <span className='instrument-font italic font-normal dark:text-white/70'>
                    automation
                  </span>
                </h2>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                {innovationList?.map((items:any, index:any) => {
                  return (
                    <div
                      key={index}
                      className={`${items.bg_color} flex flex-row p-8 rounded-2xl gap-6 items-start`}>
                      <div className="flex-shrink-0">
                        <Image
                          src={items.image}
                          alt='image'
                          height={40}
                          width={40}
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className={`${items.txt_color} mb-3`}>
                          {items.title}
                        </h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {items.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
              <h4 className='text-white text-center xl:text-left'>
                Transform Your Business Finances.
                <br /> Start Your Financial Growth Journey Today!
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <Link
                  href='/contact'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    Get Started
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation

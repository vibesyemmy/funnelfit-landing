import Image from 'next/image'

function CustomerStories() {
  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-2xl flex items-center text-center'>
              <h2>
                What Nigerian businesses are saying
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  about FunnelFit
                </span>
              </h2>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/von_BG.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    Success stories
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      "Funnelfit’s fractional CFO brought seasoned leadership at a fraction of full-time cost, with metric-driven flexibility and rapid integration that delivers real value backed by the team’s expertise."
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>Von Kemedi Dimieari</p>
                      <p className='text-white/60 text-sm font-medium'>
                        Founder/CEO, Arila Group
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8'>
                  <div>
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      Impact & results
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-7xl font-medium dark:text-dark_black'>
                      95%
                    </h2>
                    <h4 className='dark:text-dark_black'>
                      Nigerian businesses achieve tax compliance with our services."
                    </h4>
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      Success stories
                    </span>
                    <h4 className='text-white'>
                      Our fractional CFO service helped us secure ₦50M funding and streamline our financial operations!
                    </h4>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      Success stories
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      "Before partnering with Funnelfit, I managed finance alone—overwhelming and time-consuming. Their fractional CFO brought discipline, investor-ready reporting, and clear cashflow/unit economics, freeing me to focus on scaling with confidence."
                    </h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium'>Opeoluwa Fayomi</p>
                    <p className='text-dark_black/60 dark:text-white/60 text-sm font-medium'>
                      CEO, Pullus Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories

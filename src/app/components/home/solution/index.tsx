'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  const serviceTiers = [
    {
      name: 'Essential Finance',
      price: '₦55,000',
      period: '/month',
      description: 'Early-stage or small business needing organized books and compliance peace of mind',
      features: [
        'Bookkeeping + Foundational Finance',
        'Record and classify transactions (sales, expenses, payroll)',
        'Maintain ledgers, the chart of accounts, and reconciliations',
        'Manage payables, receivables, and payroll cycles',
        'Monthly close and reporting (P&L, Balance Sheet, Cash Flow)',
        'Tax and statutory compliance calendar',
        'Basic audit prep and document support'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      name: 'Growth Finance',
      price: '₦450,000',
      period: '/month',
      description: 'Growing SME or funded startup needing forecasting, discipline, and financial management',
      features: [
        'Structured / Controller Services',
        'Build financial visibility, process discipline, and short-term forecasting',
        'Management reporting and variance analysis',
        'Cashflow forecasting and working capital management',
        'Budgeting and KPI dashboards',
        'Internal controls and finance process improvement',
        'Oversight of accounting and finance teams',
        'Audit coordination and external stakeholder liaison'
      ],
      popular: true,
      ctaText: 'Most Popular'
    },
    {
      name: 'Strategic Finance',
      price: '₦1,500,000',
      period: '/month',
      description: 'For established businesses requiring comprehensive support (or project based at ₦100/hr)',
      features: [
        'CFO / Strategic Advisory',
        'Drive growth, capital strategy, and long-term value creation.',
        'Capital structure and fundraising strategy',
        'Strategic planning and scenario analysis',
        'Tax strategy, treasury, and risk management',
        'ERP / BI system oversight and finance tech stack alignment',
        'Executive-level support to CEO and Board (M&A, expansion, exits)'
      ],
      popular: false,
      ctaText: 'Scale Now'
    }
  ]

  return (
    <section id='solutions'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <motion.div
            ref={ref}
            {...bottomAnimation}
            className='flex flex-col gap-12'>
            {/* Header */}
            <div className='flex flex-col gap-3 items-center text-center max-w-3xl mx-auto'>
              <h2 className='text-3xl md:text-5xl'>
                Financial Solutions for{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  Every Business Stage
                </span>
              </h2>
              <p className='text-dark_black/60 dark:text-white/60'>
                From essential bookkeeping to strategic CFO guidance, choose the perfect financial partnership for your Nigerian business growth journey.
              </p>
            </div>

            {/* Service Tiers */}
            <div className='grid md:grid-cols-3 gap-6'>
              {serviceTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                    tier.popular
                      ? 'border-[#aac6ff] bg-gradient-to-b from-[#eaf2ff] to-transparent'
                      : 'border-dark_black/10 dark:border-white/10'
                  }`}>
                  {tier.popular && (
                    <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                      <span className='bg-blue text-white px-4 py-1 rounded-full text-sm font-medium'>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className='flex flex-col gap-6'>
                    {/* Tier Header */}
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-xl font-semibold'>{tier.name}</h3>
                      <div className='flex items-baseline gap-1'>
                        <span className='text-sm text-dark_black/60 dark:text-white/60'>from</span>
                        <span className='text-3xl font-bold'>{tier.price}</span>
                        <span className='text-dark_black/60 dark:text-white/60'>{tier.period}</span>
                      </div>
                      <p className='text-sm text-dark_black/60 dark:text-white/60'>
                        {tier.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className='flex flex-col gap-3'>
                      <h4 className='font-medium'>What's included:</h4>
                      <ul className='space-y-2'>
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-start gap-2'>
                            <svg
                              className='w-5 h-5 text-[#FBB437] mt-0.5 flex-shrink-0'
                              fill='currentColor'
                              viewBox='0 0 20 20'>
                              <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span className='text-sm text-dark_black/80 dark:text-white/80'>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href='/contact'
                      className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                        tier.popular
                          ? 'bg-blue text-white hover:bg-blue/90'
                          : 'bg-purple_blue text-white hover:bg-purple_blue/90'
                      }`}>
                      {tier.ctaText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className='text-center'>
              <p className='text-dark_black/60 dark:text-white/60 mb-4'>
                Need a custom solution? Let's discuss your specific requirements.
              </p>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-purple_blue text-white hover:bg-purple_blue/90 font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'>
                Schedule a consultation
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solutions

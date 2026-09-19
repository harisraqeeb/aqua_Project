'use client'

import React, { useState, useRef, useEffect } from 'react'
import './CircularScroller.css'

const CircularScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [rotationAngle, setRotationAngle] = useState(0)
  const prevIndexRef = useRef(0)
  const [radius, setRadius] = useState(580)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayIntervalRef = useRef(null)
  const containerRef = useRef(null)
  const resumeTimeoutRef = useRef(null)
  const isHoveringRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window
      )
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const features = [
    {
      id: 1,
      number: '01',
      icon: '/Images/purity_badge.svg',
      title: 'Source Selection',
      description: 'Natural deep aquifer water extraction from certified pristine natural reservoirs.'
    },
    {
      id: 2,
      number: '02',
      icon: '/Images/b19l.svg',
      title: 'Multi-Stage RO Filter',
      description: '9-stage reverse osmosis removing 99.9% dissolved solids, lead & heavy metals.'
    },
    {
      id: 3,
      number: '03',
      icon: '/Images/b12l.svg',
      title: 'UV Sterilization',
      description: 'Dual high-intensity UV radiation destroying 100% bacteria & micro-organisms.'
    },
    {
      id: 4,
      number: '04',
      icon: '/Images/b1_5l.svg',
      title: 'Mineral Balance',
      description: 'Re-infusing optimal Calcium & Magnesium ratios for crisp, natural taste.'
    },
    {
      id: 5,
      number: '05',
      icon: '/Images/b500ml.svg',
      title: 'Ozonation Freshness',
      description: 'Active oxygen injection locking in purity without chemical preservatives.'
    },
    {
      id: 6,
      number: '06',
      icon: '/Images/certified.webp',
      title: 'BPA-Free Bottles',
      description: '100% food-grade recyclable bottles sanitized under 85°C high-pressure steam.'
    },
    {
      id: 7,
      number: '07',
      icon: '/Images/delivery_van.png',
      title: 'Thermal Fleet Delivery',
      description: 'Temperature-controlled fleet delivering fresh water right to your doorstep.'
    },
    {
      id: 8,
      number: '08',
      icon: '/Images/happy_client_home.png',
      title: 'Smart Subscription',
      description: 'Automated recurring refills, online order tracking & WhatsApp receipts.'
    }
  ]

  const totalCards = features.length
  const angleStep = 360 / totalCards

  useEffect(() => {
    const calculateRadius = () => {
      const width = window.innerWidth
      if (width >= 1440) {
        setRadius(580)
      } else if (width >= 1024) {
        setRadius(450)
      } else if (width >= 768) {
        setRadius(350)
      } else if (width >= 430) {
        setRadius(210)
      } else if (width >= 375) {
        setRadius(180)
      } else {
        setRadius(160)
      }
    }

    calculateRadius()
    window.addEventListener('resize', calculateRadius)
    return () => window.removeEventListener('resize', calculateRadius)
  }, [])

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards)
    setIsAutoPlaying(false)
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards)
    setIsAutoPlaying(false)
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const handleDotClick = index => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  useEffect(() => {
    const prevIndex = prevIndexRef.current
    let diff = currentIndex - prevIndex

    if (diff < -totalCards / 2) {
      diff += totalCards
    } else if (diff > totalCards / 2) {
      diff -= totalCards
    }

    setRotationAngle(prev => prev - diff * angleStep)
    prevIndexRef.current = currentIndex
  }, [currentIndex, angleStep, totalCards])

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
        autoPlayIntervalRef.current = null
      }
      return
    }

    const AUTO_PLAY_INTERVAL = 2500

    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalCards)
    }, AUTO_PLAY_INTERVAL)

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
        autoPlayIntervalRef.current = null
      }
    }
  }, [isAutoPlaying, totalCards])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (!entry) return

        if (!entry.isIntersecting) {
          setIsAutoPlaying(false)
        } else if (entry.isIntersecting) {
          if (!isHoveringRef.current) {
            if (resumeTimeoutRef.current) {
              clearTimeout(resumeTimeoutRef.current)
            }
            resumeTimeoutRef.current = setTimeout(() => {
              setIsAutoPlaying(true)
              resumeTimeoutRef.current = null
            }, 500)
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
        resumeTimeoutRef.current = null
      }
    }
  }, [])

  return (
    <section className='circular-scroller-container' ref={containerRef} id="purity-process">
      <div className="circular-scroller-header">
        <h2 className="circular-scroller-title">
          Aqua Clear <span>360° Purity Journey</span>
        </h2>
        <p className="circular-scroller-subtitle">
          Discover our 8-stage computerized filtration, eco-friendly bottling, and automated doorstep delivery process.
        </p>
      </div>

      <div
        className='circular-scroller-3d-wrapper'
        onMouseEnter={() => {
          if (
            window.matchMedia('(hover: none)').matches ||
            window.matchMedia('(pointer: coarse)').matches
          ) {
            return
          }

          isHoveringRef.current = true
          setIsAutoPlaying(false)
        }}
        onMouseLeave={() => {
          if (
            window.matchMedia('(hover: none)').matches ||
            window.matchMedia('(pointer: coarse)').matches
          ) {
            return
          }

          isHoveringRef.current = false

          if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current)
          }

          setIsAutoPlaying(true)
          setCurrentIndex(prev => (prev + 1) % totalCards)
          resumeTimeoutRef.current = null
        }}
      >
        <div
          className='circular-scroller-3d-container'
          style={{
            transform: `rotateY(${rotationAngle}deg)`
          }}
        >
          {features.map((feature, index) => {
            const angle = index * angleStep

            return (
              <div
                key={feature.id}
                className={`circular-scroller-card ${index === currentIndex ? 'card-active-spotlight' : ''}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
              >
                <div className='circular-scroller-card-number'>
                  {feature.number}
                </div>
                <div className='circular-scroller-card-icon'>
                  <div className='circular-scroller-icon-placeholder'>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className='feeatureicons'
                    />
                  </div>
                </div>
                <h3 className='circular-scroller-card-title'>
                  {feature.title}
                </h3>
                <p className='circular-scroller-card-description'>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='circular-scroller-navigation'>
        <button
          onClick={handlePrev}
          className='circular-scroller-nav-button'
          aria-label="Previous Feature"
        >
          <img src='/Images/left.svg' alt='Previous' />
        </button>

        <button
          onClick={handleNext}
          className='circular-scroller-nav-button'
          aria-label="Next Feature"
        >
          <img src='/Images/right.svg' alt='Next' />
        </button>
      </div>

      <div className='circular-scroller-indicators'>
        {features.map((_, index) => (
          <button
            key={index}
            className={`circular-scroller-dot ${index === currentIndex ? 'circular-scroller-dot-active' : ''
              }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default CircularScroller
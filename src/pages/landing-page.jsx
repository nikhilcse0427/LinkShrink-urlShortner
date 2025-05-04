import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LandingPage = () => {
  const navigate = useNavigate()
  const [longUrl, setLongUrl] = useState()
  const handleShorten = (e)=>{
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <>
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='mt-10 sm:my-10 text-3xl md:text-6xl lg:text-7xl text-center font-extrabold items-center'>The only URL Shortener you will ever need! 👇</h1>
        <form onSubmit={handleShorten} className='flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
          <Input
            type='url'
            value={longUrl}
            placeholder='Enter your long url...'
            onChange={(e) => setLongUrl(e.target.value)}
            className='h-12 placeholder:text-xl'
          />
          <Button className='text-white text-xl font-bold h-12 bg-red-600'>Shorten</Button>
        </form>
        <img src='/banner.png' alt='banner' className='w-full h-140 mt-10' />
      </div>
      <Accordion type="single" collapsible className='mt-10 ml-40'>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-2xl'>Is LinkShrink free to use?</AccordionTrigger>
          <AccordionContent className='text-xl'>
            Yes. LinkShrink is completely free to use for shortening and managing your links.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className='text-2xl'>Can I track analytics of my shortened links?</AccordionTrigger>
          <AccordionContent className='text-xl'>
            Yes. LinkShrink provides basic analytics such as total clicks, traffic sources, and geographic data to help you track your link performance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className='text-2xl'>Do shortened links expire?</AccordionTrigger>
          <AccordionContent className='text-xl'>
            By default, shortened links do not expire. However, you can set custom expiration dates or delete links manually anytime from your dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default LandingPage

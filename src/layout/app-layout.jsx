import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        <Header />
        <Outlet />
      </main>
      

<footer className="rounded-md shadow-sm m-4">
    <div class="w-full max-w-screen-xl mx-auto p-2 md:py-4 mt-10">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span className="self-center text-3xl font-bold text-red-500">LinkShrink</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-md font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <span class="block text-md text-white sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">LinkShrink</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default AppLayout

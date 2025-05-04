import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2, LinkIcon, LogOut } from 'lucide-react'


const Header = () => {
  const navigate = useNavigate()
  const user = useState(false);
  return (
      <nav className='flex justify-between items-center p-5'>
        <Link to ='/'>
          <img src='/logo.png' alt='LinkShrink logo' className='h-20' />
        </Link>
        <div className='pr-10'>
          {
            user?(
              <DropdownMenu className='overflow-hidden'>
                <DropdownMenuTrigger>
                <Avatar className='h-10 w-10'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>NV</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Nikhil Verma</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LinkIcon className='h-4 w-4 text-blue-600' />
                    My Links</DropdownMenuItem>
                  <DropdownMenuItem className='text-red-500'>
                    <LogOut className='text-red h-4 w-4' />
                    Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            ):(<Button onClick={()=>navigate('/auth')}>Login</Button>)
          }
        </div>
      </nav>
  )
}

export default Header

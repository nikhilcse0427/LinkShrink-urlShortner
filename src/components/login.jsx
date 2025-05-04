import React from 'react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {BeatLoader} from 'react-spinners'
import { Error } from './error'

const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>Login</CardTitle>
          <CardDescription className='text-center'>Please Login to your account, if you already have one </CardDescription>
          <Error message={"some error"} />
        </CardHeader>
        <CardContent className='space-y-5'>
          <div className='space-y-4'>
            <input type='email' name='email' placeholder='Enter your email...'  className=' h-10 p-2 w-full border-2 rounded-sm'/>
            <Error message={"some error"} />
          </div>
          <div className='space-y-2'>
          <input type='password' name='password' placeholder='Enter your password...'  className=' h-10 p-2 w-full border-2 rounded-sm'/>
          <Error message={"some error"} />
          </div>
        </CardContent>
        <CardFooter>
        <Button>
          {true?<BeatLoader />:"Login"}
        </Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default Login

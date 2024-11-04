'use client'

import { useState, useTransition } from 'react'

import Link from 'next/link'

import { ArrowLeftIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Docs() {
  const [email, setEmail] = useState('')
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      try {
        const response = await fetch(
          'https://bsrdgcsnyndwdqfoqrky.supabase.co/rest/v1/newsletter_subscribers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcmRnY3NueW5kd2RxZm9xcmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MDM0MzYsImV4cCI6MjA0NjI3OTQzNn0.A1n98Hsd7zmYG5HUNYLUZyXmx6d84RkwaCb3jmPUT1k',
            },
            body: JSON.stringify({ email }),
          }
        )
        if (response.ok) {
          console.log('Submitted email:', email)
          toast.success('Thanks for signing up!')
          setEmail('')
        } else {
          if (response.status === 409) {
            toast.error('You are already subscribed to the newsletter.')
          } else {
            throw new Error(response.statusText)
          }
        }
      } catch (error) {
        console.error('Error submitting email:', error)
        toast.error('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <Link
        href="/"
        className="mb-4 flex items-center gap-2 text-sm hover:underline"
      >
        <ArrowLeftIcon className="size-4" />
        Go Back
      </Link>
      <h1 className="mb-4 text-center text-4xl font-bold">Docs Coming Soon</h1>
      <p className="mb-8 max-w-md text-center text-gray-600">
        We're working hard on our documentation. Sign up to get notified when
        it's ready.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" disabled={pending}>
            Notify Me
          </Button>
        </div>
      </form>
    </div>
  )
}

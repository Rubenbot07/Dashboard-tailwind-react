import { useState, useEffect } from 'react'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-56 rounded-b-3xl pt-8 px-6'>
      <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1'>Social Media Dashboard</h1>
      <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'>Total Follower: 23,004</p>
      <hr className='bg-Dark-Grayish-Blue h-[1px] mb-5 border-none' />
      <div className='flex justify-between'>
        <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>Dark Mode</p>
        <label htmlFor='darkmode' className='bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px] relative'>
          <input onClick={handleClick} id='darkmode' type='checkbox' className='sr-only peer' />
          <div className='w-full h-full rounded-full cursor-pointer absolute top-0 left-0 peer-checked:bg-Toggle-Gradient' />
          <div className='w-5 h-5 bg-Light-Grayish-Blue rounded-full translate-x-6 peer-checked:translate-x-0  peer-checked:bg-Very-Dark-Blue transition-all' />
        </label>
      </div>
    </header>
  )
}

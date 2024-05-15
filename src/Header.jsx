export const Header = () => {
  return (
    <header className='bg-Very-Pale-Blue h-56 rounded-b-3xl pt-8 px-6'>
      <h1 className='text-Very-Dark-Blue text-2xl font-bold mb-1'>Social Media Dashboard</h1>
      <p className='text-Dark-Grayish-Blue font-boldp mb-6'>Total Follower: 23,004</p>
      <hr className='bg-black h-[1.5px] mb-5' />
      <div className='flex justify-between'>
        <p>Dark Mode</p>
        <label htmlFor='darkmode' className='bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px] relative'>
          <input id='darkmode' type='checkbox' className='sr-only peer' />
          <div className='w-full h-full rounded-full cursor-pointer absolute top-0 left-0 peer-checked:bg-Toggle-Gradient' />
          <div className='w-5 h-5 bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-6  peer-checked:bg-Very-Dark-Blue transition-all' />
        </label>
      </div>
    </header>
  )
}

export const Header = () => {
  return (
    <header className='bg-Very-Pale-Blue h-56 rounded-b-3xl pt-8 px-6'>
      <h1 className='text-Very-Dark-Blue text-2xl font-bold mb-1'>Social Media Dashboard</h1>
      <p className='text-Dark-Grayish-Blue font-boldp mb-6'>Total Follower: 23,004</p>
      <hr className='bg-black h-[1.5px] mb-5' />
      <div className='flex justify-between'>
        <p>Dark Mode</p>
        <input type='checkbox' />
      </div>
    </header>
  )
}

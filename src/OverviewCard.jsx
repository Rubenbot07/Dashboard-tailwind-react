import facebookLogo from './assets/images/icon-facebook.svg'
import twitterLogo from './assets/images/icon-twitter.svg'
import instagramLogo from './assets/images/icon-instagram.svg'
import youtubeLogo from './assets/images/icon-youtube.svg'

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo
}
const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram',
  YouTube: 'bg-YouTube'
}

export const OverviewCard = ({ user, network, aundience, aundienceType, today }) => {
  return (
    <article className='bg-Light-Grayish-Blue w-80 h-52 rounded-md mx-auto grid p-6 relative overflow-hidden'>
      <div className={`w-full h-1 ${networkColors[network]} absolute`} />
      <div className='flex gap-2 items-center justify-center mb-4'>
        <img src={networkLogos[network]} alt={`${network}-logo`} />
        <p>{user}</p>
      </div>
      <p className='text-center font-bold text-5xl'>{aundience}</p>
      <p className='text-center text-xl font-light'>{aundienceType}</p>
      <span className='text-center text-sm font-semibold'>{`${today} Today`}</span>
    </article>
  )
}

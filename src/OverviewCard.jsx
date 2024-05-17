import facebookLogo from './assets/images/icon-facebook.svg'
import twitterLogo from './assets/images/icon-twitter.svg'
import instagramLogo from './assets/images/icon-instagram.svg'
import youtubeLogo from './assets/images/icon-youtube.svg'
import arrowUp from './assets/images/icon-up.svg'
import arrowDown from './assets/images/icon-down.svg'

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

export const OverviewCard = ({ user, network, aundience, aundienceType, today, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue w-80 h-52 rounded-md mx-auto grid p-6 relative overflow-hidden text-center'>
      <div className={`w-full h-1 ${networkColors[network]} absolute`} />
      <div className='flex gap-2 items-center justify-center mb-4'>
        <img src={networkLogos[network]} alt={`${network}-logo`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='font-bold text-6xl text-Very-Dark-Blue'>{aundience}</p>
      <p className='uppercase text-xs text-Dark-Grayish-Blue tracking-[5px]'>{aundienceType}</p>
      <div className='w-max-content flex items-center justify-center gap-2'>
        <img className='' src={isUp ? arrowUp : arrowDown} alt='arrow up icon' />
        <span className={`text-sm font-semibold ${!isUp ? 'text-Bright-Red' : 'text-Lime-Green'}`}>
          {`${today} Today`}
        </span>
      </div>
    </article>
  )
}

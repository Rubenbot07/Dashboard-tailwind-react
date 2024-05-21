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

const formatNumber = (number) => {
  if (number > 9999) {
    return ((number / 1000).toFixed(0) + 'k')
  } else {
    return number
  }
}

export const OverviewCard = ({ user, network, audience, audienceType, today, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue grid w-[80%] max-w-80 h-[216px] rounded-md mx-auto pt-6 pb-4 relative overflow-hidden text-center xl:min-w-60'>
      <div className={`w-full h-1 ${networkColors[network]} absolute`} />
      <div className='flex gap-2 items-center justify-center mb-4'>
        <img src={networkLogos[network]} alt={`${network}-logo`} />
        <p className='text-xs text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>{user}</p>
      </div>
      <p className='font-bold text-6xl text-Very-Dark-Blue dark:text-Light-Grayish-Blue'>{formatNumber(audience)}</p>
      <p className='uppercase text-xs text-Dark-Grayish-Blue dark:text-Desaturated-Blue tracking-[5px]'>{audienceType}</p>
      <div className='w-max-content flex items-center justify-center gap-1'>
        <img className='' src={isUp ? arrowUp : arrowDown} alt='arrow icon' />
        <span className={`text-sm font-bold ${!isUp ? 'text-Bright-Red' : 'text-Lime-Green'}`}>
          {`${today} Today`}
        </span>
      </div>
    </article>
  )
}

export const OverviewTodayCard = ({ network, stats, statsType, porcentage, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue flex justify-between w-[80%] h-[130px] max-w-80 rounded-md mx-auto p-6 md:min-w-52'>
      <div className='flex flex-col justify-between'>
        <p className='text-xs text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>{statsType}</p>
        <p className='text-Very-Dark-Blue dark:text-Light-Grayish-Blue text-4xl font-bold'>{formatNumber(stats)}</p>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <img src={networkLogos[network]} alt={`${network}-logo`} />
        <div className='flex items-center gap-1'>
          <img src={isUp ? arrowUp : arrowDown} alt='arrow icon' />
          <span className={`text-sm font-bold ${!isUp ? 'text-Bright-Red' : 'text-Lime-Green'}`}>{`${porcentage}%`}</span>
        </div>
      </div>
    </article>
  )
}

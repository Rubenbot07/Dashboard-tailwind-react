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

export const OverviewCard = ({ user, network, audience, audienceType, today, isUp }) => {
  const formatNumber = (number) => {
    if (number > 9999) {
      return ((number / 1000).toFixed(0) + 'k')
    } else {
      return number
    }
  }

  return (
    <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[80%] max-w-80 h-[216px] rounded-md mx-auto grid pt-6 pb-4 relative overflow-hidden text-center'>
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

export const OverviewTodayContainer = ({ network, stats, statsType, porcentage, isUp }) => {
  return (
    <article>
      <div>
        <span>{statsType}</span>
        <span>{stats}</span>
      </div>
      <div>
        <img src={networkLogos[network]} alt={`${network}-logo`} />
        <div>
          <img src={isUp ? arrowUp : arrowDown} alt='arrow icon' />
          <span>{`${porcentage}%`}</span>
        </div>
      </div>
    </article>
  )
}

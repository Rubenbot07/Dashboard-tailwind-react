import data from '../data/data.json'
import { OverviewCard, OverviewTodayContainer } from './OverviewCard'

export const OverviewContainer = () => {
  return (
    <section className='grid w-screen gap-6 -m-9 mx-auto pb-6'>
      {
        data.overview.map((item) => {
          return (
            <OverviewCard
              key={item.id}
              user={item.user}
              audience={item.audience}
              audienceType={item.audienceType}
              today={item.today}
              network={item.network}
              isUp={item.isUp}
            />
          )
        })
      }
      <h2 className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue text-xl font-bold mx-auto w-[80%] max-w-80'>Overview - Today</h2>
      {
        data['overview-today'].map((item) => {
          return (
            <OverviewTodayContainer
              key={item.id}
              network={item.network}
              stats={item.stats}
              statsType={item.statsType}
              porcentage={item.porcentage}
              isUp={item.isUp}
            />
          )
        })
      }
    </section>
  )
}

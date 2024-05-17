import data from '../data/data.json'
import { OverviewCard } from './OverviewCard'

export const OverviewContainer = () => {
  return (
    <section className='grid w-screen gap-6 -m-9 mx-auto'>
      {
        data.overview.map((item) => {
          return (
            <OverviewCard
              key={item.id}
              user={item.user}
              aundience={item.audience}
              aundienceType={item.audienceType}
              today={item.today}
              network={item.network}
              isUp={item.isUp}
            />
          )
        })
      }
    </section>
  )
}

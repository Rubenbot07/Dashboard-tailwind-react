import data from '../data/data.json'
import { OverviewCard } from './OverviewCard'

export const OverviewContainer = () => {
  return (
    <section className='grid gap-4'>
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

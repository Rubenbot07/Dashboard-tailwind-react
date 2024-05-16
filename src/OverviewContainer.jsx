import data from '../data/data.json'
import { OverviewCard } from './OverviewCard'

console.log(data.overview)
export const OverviewContainer = () => {
  return (
    <section>
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
            />
          )
        })
      }
    </section>
  )
}

import data from '../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

export const OverviewContainer = () => {
  return (
    <section className='grid md:grid-cols-2 md:w-[80%] xl:grid-cols-4 w-screen gap-6 -m-9 mx-auto mb-6'>
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
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <>
      <h2 className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue text-2xl font-bold w-[70%] max-w-80 my-8 mx-auto md:w-[75%] md:pl-4 md:max-w-none xl:w-[90% xl:pl-0'>
        Overview - Today
      </h2>
      <section className='grid md:grid-cols-2 md:w-[80%] xl:grid-cols-4 w-screen gap-6 mx-auto mb-6'>
        {
          data['overview-today'].map((item) => {
            return (
              <OverviewTodayCard
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
    </>
  )
}

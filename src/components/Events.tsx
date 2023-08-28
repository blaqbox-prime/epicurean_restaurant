import GridList from './GridList'
import EventListItem from './EventListItem'
import { LinkButton } from './LinkButton'
import { formatDate} from '@/utils';
import { getLatestEvents } from '@/utils/queries';
import { urlFor } from '@/utils/sanity';

async function Events() {

  const events = await getLatestEvents();

  return (
    <section className="event bg-black-10">
          <div className="container">
            <p className="section-subtitle label-2 text-center">News</p>

            <h2 className="section-title headline-1 text-center">
              Upcoming Events
            </h2>

            <GridList>
             {
              events.map((event: any) => (
                <EventListItem
                key={event._id}
                imgUrl={urlFor(event.mainImage).height(480).url()}
                title={event.title}
                subtitle={event.topic}
                alt={event.title}
                date={formatDate(new Date(event.publishedAt))}
              />
              ))
             }

            </GridList>

            <LinkButton href='/news' text="View Our Blog" />
          </div>
        </section>
  )
}

export default Events


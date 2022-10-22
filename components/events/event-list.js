import React from 'react'
import EventItem from './event-item'
import classes from './event-list.module.css'

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  )
}

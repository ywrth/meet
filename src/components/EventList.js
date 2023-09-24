import Event from './Event';

const EventList = ({ events }) => {
  return (
<ul id="event-list">
  {events.map((event, index) => (
    <li key={index} className="event">
      {event.name} {/* Replace with actual data property */}
    </li>
  ))}
</ul>
  );
};

export default EventList;
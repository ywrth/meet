import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningAlert] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allEvents = await getEvents();
        const filteredEvents = currentCity === "See all cities"
          ? allEvents
          : allEvents.filter(event => event.location === currentCity);

        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));

        // Remove the loading overlay once data is fetched
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.remove();

      } catch (error) {
        console.error('Error fetching data: ', error);
        // You might want to set an error state here to notify the user.
      }
    };

    fetchData();
  }, [currentCity, currentNOE]); // fetchData will run when the component mounts and when currentCity or currentNOE changes.

  useEffect(() => {
    if (!navigator.onLine) setWarningAlert('You are offline!');
    else setWarningAlert('');
  }, []); // This will run only when the component mounts.

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
      <EventList events={events}/>
    </div>
  );
}

export default App;

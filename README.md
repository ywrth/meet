# Meet App

## Overview
Meet App is a progressive web app with a serverless backend, designed to allow users to view upcoming events in various cities. It employs cutting-edge web technologies to ensure a seamless and interactive user experience. It's accessible offline and is responsive across devices, providing optimal performance and user experience.

## Features
1. **Filter Events by City**
2. **Show/Hide Event Details**
3. **Specify Number of Events**
4. **Use the App When Offline**
5. **Add an App Shortcut to the Home Screen**
6. **Display Charts Visualizing Event Details**

## User Stories and Scenarios

### Feature 1: Filter Events by City
#### User Story
As a user,  
I should be able to filter events by city  
So that I can view a list of events taking place in the selected city.

#### Scenarios

Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.
Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


### Feature 2: Show/Hide Event Details

#### User Story

As a user,
I should be able to specify the number of events I want to view
So that I can control the number of events displayed on the app at once.

#### Scenario

1. User can see more details about an event.
Given the user is viewing the list of events;
When the user selects 'Show Details' for an event;
Then the user should see more detailed information about that event.

2. Scenario: User can hide details of an event.
Given the user has opened the details of an event;
When the user selects 'Hide Details' for that event;
Then the additional details about that event should be hidden.

### Feature 3: Specify Number of Events

#### User Story

As a user,
I should be able to specify the number of events I want to view
So that I can control the number of events displayed on the app at once.

#### Scenario

1. User can change the number of events they want to see.
Given the user is on the main page of the app;
When the user changes the number of events to be displayed;
Then the app should update to display the specified number of events.

### Feature 4: Use the App When Offline

#### User Story

As a user,
I should be able to use the app when offline
So that I can view events without needing an active internet connection.

#### Scenario

1. User can view events offline.
Given the user has previously opened the app while online;
When the user is offline and opens the app;
Then the user should see the events that were last loaded when online.

### Feature 5: Add an App Shortcut to the Home Screen

#### User Story

As a user,
I should be able to add an app shortcut to my home screen
So that I can access the app quickly without navigating through the browser.

#### Scenario

1. User can add the app to the home screen.
Given the user has opened the app in the browser;
When the user selects 'Add to Home Screen';
Then an app shortcut should be added to the user's home screen.

### Feature 6: Display Charts Visualizing Event Details

#### User Story

As a user,
I should be able to see charts visualizing event details
So that I can understand the distribution and types of upcoming events in each city easily.

#### Scenario

1. User can view charts of upcoming events in each city.
Given the user has selected a city or is viewing events from all cities;
When the user navigates to the 'Charts' section;
Then the user should see charts visualizing the details of upcoming events in the selected city or all cities.

## Technologies Used

* Progressive Web App (PWA)
* Serverless Backend
* Test-Driven Development (TDD)
* Cloud Hosting (AWS)
* 
## Project Motivation
To enhance the user experience in searching for events in specific cities by employing serverless architecture, PWA, and TDD, ensuring the quality of code, adequate test coverage, distinguished user experience, and performance.


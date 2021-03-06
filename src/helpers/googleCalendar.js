var gapi = global.gapi;
var gevents = global.events;
global.loadedEvents = []
// Client ID and API key from the Developer Console
var CLIENT_ID = '453827715405-pu2ceaebcdlksi8bv9eui1a0lkph0sde.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAqYmy2Vl_C2HiqFbzm_ht6VSzqP9R2ar8';
var CALENDAR_ID= 'dpb90e23u2oeobo6ktni8tcp2g@group.calendar.google.com'
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var that = null
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";
/**
 *  On load, called to load the auth2 library and API client library.
 */
export function handleClientLoad() {
  gapi.load('client:auth2', {
    callback :initClient,
  onerror: function() {
    // Handle loading error.
    initClient;
  }
});
  that = this
  //console.log(this)
}
export function getEventList(){
  return gevents;
}
export function isClientLoaded(){
  return gapi.auth2.getAuthInstance().isSignedIn.get()
}
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  }, function(error) {
    alert("Ha ocurrido un error, por favor intentelo más tarde");
  });
}
/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
export function updateSigninStatus(isSignedIn) {
    listUpcomingEvents();
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */

function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/* *
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': CALENDAR_ID,
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 30,
    'orderBy': 'startTime'
  }).then(function(response) {
    var events = response.result.items;
    if (events.length > 0) {
      gevents = events
      that.setState({gapiLoaded: true})
    } else {
        console.log('No upcoming events found.');
    }
  });
}

// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.
export function addEvent(service, description, start, end, name, email, phone){
  that = this
  var event = {
    'summary': service,
    'location': 'Calle B, Cercado de Lima 15038',
    'description': "Cliente: " + name + " | " + phone + " | " + "\n" + "\n" + description ,
    'start': {
      'dateTime': start ? Date.parse(start).toString("s") : (new Date()).addHours(1).toString("s"),
      'timeZone': 'America/Lima'
    },
    'end': {
      'dateTime': end ? Date.parse(end).toString("s") : (new Date()).addHours(2).toString("s"),
      'timeZone': 'America/Lima'
    },
    'attendees': [
      {'email': email || "sergio@udocz.com"}
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    }
  };

var request = gapi.client.calendar.events.insert({
  'calendarId': CALENDAR_ID,
  'resource': event,
  'sendNotifications': true
});

request.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);
  listUpcomingEvents()
  that.setState({userInfoStep: true})
});
}
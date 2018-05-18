const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = 'credentials.json';

// Load client secrets from a local file.
global.asd = fs.readFile('../config/client_secret.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), list);
});

export default function listEvents(){
	fs.readFile('../config/client_secret.json', (err, content) => {
  	if (err) return console.log('Error loading client secret file:', err);
  	authorize(JSON.parse(content), list);
	});
}

//export function addEvent(description, start, attendees){
//	fs.readFile('../config/client_secret.json', (err, content) => {
//  	if (err) return console.log('Error loading client secret file:', err);
//  	authorize(JSON.parse(content), add);
//	});
//}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function list(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, {data}) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = data.items;
    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  });
}
Date.prototype.addHours = function(h){
    this.setHours(this.getHours()+h);
    return this;
}

function add(auth, description, start, attendees){
	var date = Date.now
	const calendar = google.calendar({version: 'v3', auth});
  	calendar.events.insert({
  		calendarId: 'primary',
  		'resource':{
		  'summary': 'Consulta registrada',
		  'description': description || 'No se agrego ninguna descripción',
		  'start': {
		    'dateTime': start ? start : new Date().addHours(1),
		    'timeZone': 'America/Lima'
		  },
		  'end': {
		    'dateTime': start ? start.addHours(1) : new Date().addHours(2),
		    'timeZone': 'America/Lima'
		  },
		 // 'recurrence': [
		 //   'RRULE:FREQ=DAILY;COUNT=4'
		 // ],
		  'attendees': [
		    {'email': attendees || "srios0u@gmail.com"}
		  ],
		  'reminders': {
		    'useDefault': false,
		    'overrides': [
		      {'method': 'email', 'minutes': 24 * 60},
		      {'method': 'popup', 'minutes': 10}
		    	]
			}
		}
	}, (err, {data}) => {
    if (err) {
    	return console.log('The API returned an error: ' + err);
    } else {
      console.log('Event created');
    }
	});
}

	
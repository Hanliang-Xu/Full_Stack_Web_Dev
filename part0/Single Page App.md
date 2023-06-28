title Single Page App

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

server-->browser: HTML-code

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server-->browser: main.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "Example!", date: "2023-06-27T17:30:40.360Z"},…]

note over browser:
browser executes the event handler
that renders notes to display
end note
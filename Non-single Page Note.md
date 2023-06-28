title Non-single Page Note

server-->browser: HTML POST https://studies.cs.helsinki.fi/exampleapp/new_note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

server-->browser: HTML-code

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server-->browser: main.css

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "Hello World!", date: "2023-06-27T16:29:41.016Z"},…]

note over browser:
browser executes the event handler
that renders notes to display
end note
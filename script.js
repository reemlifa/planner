function getItinerary(event) {
    event.preventDefault()
    console.log(event.target.location.value);
    console.log(event.target.startdate.value);
    console.log(event.target.enddate.value);
    
    console.log("hello there!")


    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'post', //GET, POST, PUT, DELETE
        //optional, meant for security checks (authentication)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 75G6B7J8AWT8J1EOP7AT6H4TZZ5ETK00TSOORLUCM73FITA3QBGH0PLD4C0RS6FV'
        },
        //NOT needed with GET request
        body: JSON.stringify({
            'model': 'gpt-3.5-turbo',
            'messages': [
              {
                'role': 'user',
                'content': `plan a trip itinerary for someone who is going to ${event.target.location.value} from ${event.target.startdate.value} to ${event.target.enddate.value}. add about 3 or 4 things to do per day. respond ONLY with an array that has JSON objects with the parameters \`date\` \`eventTitle\` \`startTime\` \`endTime\` \`\`\`
          `
                }
              ]
          })
      }).then(result => result.json())
      .then(eventsResponse => {
        const events = JSON.parse(eventsResponse.choices[0].message.content)

        console.log(events)
      });
  }
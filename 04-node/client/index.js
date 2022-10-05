import axios from 'axios';

let counter = 0;

setInterval(async () => {
  counter += 1;

  console.log(`Sending message to server: ${counter}: client says hello`);

  const res = await axios.post('http://04-server:3000/hello', {
    message: `${counter}: client says hello`,
  });

  console.log(`Server replied with ${res.data.message}`);
  console.log(`Server echoed: ${res.data.echo}`);
}, 2000);

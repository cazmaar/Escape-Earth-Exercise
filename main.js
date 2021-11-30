// An async function to fetch the logs
async function getLogs() {
  const response = await fetch(
    "https://task-escape-api.herokuapp.com/api/logs"
  );
  let data = await response.json();
  console.log(data);
  let codeGuyLog = data[5];
}
getLogs();

// An async function to fetchs the personnel data matching the id
async function getPersonnelData() {
  const response = await fetch(
    "https://task-escape-api.herokuapp.com/api/personnel/11"
  );
  let data = await response.json();
  console.log(data);
  let codePersonell = data;
}
getPersonnelData();

// An async function to go through his messages
async function getMessages() {
  const response = await fetch(
    "https://task-escape-api.herokuapp.com/api/messages?to=8"
  );
  let data = await response.json();
  console.log(data[0].message);
  let Message = "";
}
getMessages();

// ships dog's name = Rover
const launchCode = "ROVER";

// I use Async funtion to post the json.
async function postRequest() {
  let response = await fetch(
    "https://task-escape-api.herokuapp.com/api/codes",
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        enter: "ROVER",
      }),
    }
  );

  let data = await response.json();
  console.log(data);
}

postRequest();

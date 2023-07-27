//Auth token we will use to generate a meeting and connect to it
export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0MzEyZWExMi01ZmZkLTQzZDctYTM2NS0yN2UwNTNhNTZlOGEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5MDMxMDYyMCwiZXhwIjoxNjkyOTAyNjIwfQ.5lR3uwpB04FjuV2lxBMHZIMjYotqtZZz41lyghT1Tr4";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};

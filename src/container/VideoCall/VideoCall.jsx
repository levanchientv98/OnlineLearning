// VideoCall.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "api/API.js";
import ReactPlayer from "react-player";
import { styled } from "styled-components";
import { Button, Input } from "antd";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  .create-room {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-style {
    width: 250px;
  }
  .btn-join {
    width: 100px;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 20px;
    }

    .btn-controls {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .title2 {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

const JoinScreen = ({ getMeetingAndToken }) => {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <StyledDiv>
      <div className="create-room">
        <Input
          size="large"
          className="input-style"
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
        />
        <Button
          size="large"
          type="primary"
          ghost
          className="btn-join"
          onClick={onClick}
        >
          Join
        </Button>
        <span className="title">OR</span>
        <Button size="large" type="primary" onClick={onClick}>
          Create Meeting
        </Button>
      </div>
    </StyledDiv>
  );
};

const ParticipantView = (props) => {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div>
      <p className="title2">
        Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
};

const Controls = () => {
  // Implement the UI for meeting controls
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div className="btn-controls">
      <Button size="middle" type="primary" ghost onClick={() => leave()}>
        Leave
      </Button>
      <Button size="middle" type="primary" ghost onClick={() => toggleMic()}>
        Mic
      </Button>
      <Button size="middle" type="primary" ghost onClick={() => toggleWebcam()}>
        Webcam
      </Button>
    </div>
  );
};

const MeetingView = (props) => {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <StyledDiv>
      <div className="container">
        <h3>Meeting Id: {props.meetingId}</h3>
        {joined && joined === "JOINED" ? (
          <div>
            <Controls />
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
        ) : joined && joined === "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <Button
            size="large"
            type="primary"
            className="btn-join"
            onClick={joinMeeting}
          >
            Join
          </Button>
        )}
      </div>
    </StyledDiv>
  );
};

const VideoCall = () => {
  const [meetingId, setMeetingId] = useState(null);

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
};

export default VideoCall;

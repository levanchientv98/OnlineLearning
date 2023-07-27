import styled from "styled-components";

const CardVideoStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 100%;

  .video-card {
    width: 75%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 100px;

    iframe {
      box-shadow: 20px 23px 42px -5px rgba(120, 120, 120, 0.85);
      -webkit-box-shadow: 20px 23px 42px -5px rgba(120, 120, 120, 0.85);
      -moz-box-shadow: 20px 23px 42px -5px rgba(120, 120, 120, 0.85);
      border: none;
      border-radius: 50px;
    }
  }
  .group-content {
    display: flex;
    flex-direction: column;

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 26px;
      font-weight: 500;
      line-height: 39px;
      letter-spacing: 0em;
      color: #0c4ca3;
    }

    p {
      width: 290px;
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-weight: 300;
      line-height: 49px;
      letter-spacing: 0em;
      color: #2e2c2c;
    }
  }
`;

export const CardInfoVideo = ({ urlVideo }) => {
  return (
    <CardVideoStyled>
      <div className="video-card">
        <iframe
          width="764px"
          height="573px"
          src={urlVideo}
          title="Video Player"
        ></iframe>
        <div className="group-content">
          <h2>‘’ QUOTE ’’</h2>
          <p>
            ....The most I have enjoyed about the distance learning is its
            flexibility and convenience.......
          </p>
          <p> -Jasmine</p>
        </div>
      </div>
    </CardVideoStyled>
  );
};

import styled from "styled-components";
import { BODY_SIZE, GREY, TITLE_SIZE } from "../util/const";
import { ReactComponent as LinkIcon } from "../util/link.svg";
import Link from "./Link";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  flex-shrink: 0;
  position: relative;
`;

const Clothespin = styled.img`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: auto;
  z-index: 1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
`;

const ImageContainer = styled.div`
  background: #e8e6e2;
  border-radius: 8px;
  width: 100%;
  height: 216px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 0.5rem;
`;

const ProjectTitle = styled.p`
  margin: 1rem 0 0.25rem;
  font-size: ${TITLE_SIZE};
`;

const ProjectDescription = styled.p`
  font-size: ${BODY_SIZE};
  color: ${GREY};
  margin: 0 0 0.5rem;
  width: 100%;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

type ProjectProps = {
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  link: string;
  children?: React.ReactNode;
};

const Project = (props: ProjectProps) => {
  return (
    <ProjectWrapper>
      <Clothespin src="/assets/clothespin.png" alt="clothespin" />
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <ImageContainer>
          {props.videoSrc ? (
            <Video
              autoPlay
              loop
              muted
              playsInline
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={props.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          ) : (
            <Image src={props.imageSrc} alt={props.title} />
          )}
        </ImageContainer>
      </a>
      <TextContainer>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.children}</ProjectDescription>
        <Link link={props.link} icon={LinkIcon} />
      </TextContainer>
    </ProjectWrapper>
  );
};

export default Project;

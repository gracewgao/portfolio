import styled from "styled-components";
import { BODY_SIZE, GREY } from "../util/const";

const ProjectWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}px;
  flex-shrink: 0;
  position: relative;
`;

const Clothespin = styled.img`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: auto;
  z-index: 1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: ${BODY_SIZE};
  color: ${GREY};
  margin: 0 0 0.5rem;
  width: 100%;
`;

const ProjectLink = styled.a``;

type ItemProps = {
  title?: string;
  description?: string;
  imageSrc: string;
  link?: string;
  width: number;
};

const Item: React.FC<ItemProps> = ({
  title,
  description,
  imageSrc,
  link,
  width,
}) => (
  <ProjectWrapper width={width}>
    <Clothespin src="/assets/clothespin.png" alt="clothespin" />
    {link ? (
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        <ImageContainer>
          <Image src={imageSrc} alt={title} />
        </ImageContainer>
      </ProjectLink>
    ) : (
      <ProjectLink as="div">
        <ImageContainer>
          <Image src={imageSrc} alt={title} />
        </ImageContainer>
      </ProjectLink>
    )}
    <TextContainer>
      <ProjectDescription>{description}</ProjectDescription>
    </TextContainer>
  </ProjectWrapper>
);

export default Item;

import styled from "styled-components";
import { BLUE, BODY_SIZE } from "../util/const";

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  color: ${BLUE};
  text-decoration: none;
  font-size: ${BODY_SIZE};
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type LinkProps = {
    link: string;
    icon?: any;
    label?: string;
  };

const Link = (props: LinkProps) => {
  return (
    <ProjectLink href={props.link} target="_blank" rel="noopener noreferrer">
      <props.icon width={16} height={16} />
      <LinkText>{props.label ?? props.link.replace(/^https?:\/\//, "")}</LinkText>
    </ProjectLink>
  );
};

export default Link;

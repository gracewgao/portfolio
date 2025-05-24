import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { BLACK, BODY_SIZE, GREY, TITLE_SIZE, WHITE } from "./util/const";
import Project from "./components/Project";
import Item from "./components/Item";
import Link from "./components/Link";
import { ReactComponent as MailIcon } from "./util/mail.svg";
import { ReactComponent as LinkedinIcon } from "./util/logo-linkedin.svg";
import { ReactComponent as GithubIcon } from "./util/logo-github.svg";

const AppWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  background: ${WHITE};
  position: relative;
  display: flex;
  font-family: "Noto Serif";
  color: ${BLACK};
`;

const Clothesline = styled.div`
  position: absolute;
  top: calc(50% - 190px);
  display: inline-flex;
  align-items: flex-start;
  padding: 0 5rem 0 5rem;
  gap: 4rem;
`;

const GlobalTitle = styled.p`
  position: fixed;
  top: calc(50% - 320px);
  width: 100%;
  text-align: center;
  font-size: ${TITLE_SIZE};
`;

const ClotheslineLine = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  left: 0;
  height: 0.5px;
  background-color: ${GREY};
  width: 100%;
  z-index: 0;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 240px;
  padding: 2rem 0.5rem;
  font-size: ${BODY_SIZE};
`;

const App = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const clotheslineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (wrapperRef.current) {
        e.preventDefault();
        wrapperRef.current.scrollLeft += e.deltaY;
      }
    };
    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("wheel", handleWheel, { passive: false });
    return () => wrapper?.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    if (clotheslineRef.current && lineRef.current) {
      lineRef.current.style.width = clotheslineRef.current.scrollWidth + "px";
    }
  }, []);

  return (
    <AppWrapper ref={wrapperRef}>
      <GlobalTitle>grace's project line</GlobalTitle>
      <ClotheslineLine />
      <Clothesline>
        <Project
          title="personal website"
          videoSrc="/assets/gracewgao.mp4"
          link="https://gracewgao.me"
        >
          <p>learn more about my background + experience!</p>
        </Project>
        <Project
          title="daydream"
          videoSrc="/assets/daydream.mp4"
          link="https://themuseum.ca/exhibitions/eyepool-presents-daydream/"
        >
          <p>
            daydream is an interactive art projection exhibit that aims to evoke
            wonder and nostalgia through cloudgazing. built in unity, the
            installation integrates 14 christie projectors, real-time position
            data from lidar sensors, and custom volumetric cloud shaders.
          </p>
          <p>
            daydream exhibited april 2-13 at THEMUSEUM in downtown kitchener.
            this project was created with my wonderful team: richard, sophie,
            janet, and kevin.
          </p>
        </Project>
        <Item
          title="paintbrush"
          description=""
          imageSrc="/assets/brush.png"
          width={100}
        />
        <Project
          title="sunset diaries"
          videoSrc="/assets/sunsetdiaries.mp4"
          link="https://sunsetdiaries.com"
        >
          <p>
            I started this website as a way to document and appreciate lovely
            sunsets. come explore the map of sunset photos around the world and
            add yours to the collection :)
          </p>
          <p>
            bonus fact: I later worked with velocity (uwaterloo incubator) to
            build a fork hosting content relating to the kitchener-waterloo
            entrepreneurship community --{" "}
            <a
              href="https://velocity.sunsetdiaries.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              velocity.sunsetdiaries.com
            </a>
            .
          </p>
        </Project>

        <Item
          title="twizzlers"
          description=""
          imageSrc="/assets/twizzlers.png"
          width={120}
        />
        <Item
          title="hack the north tote bag"
          description=""
          imageSrc="/assets/tote.png"
          link="https://2021.hackthenorth.com"
          width={240}
        />
        <Project
          title="linky"
          videoSrc="/assets/linky.mp4"
          link="https://gracewgao.me/linky"
        >
          <p>
            inspired by wordbomb and my chinese school homework, linky is a word
            game where you earn points by entering words containing specific
            letter chunks. choose wisely, the last letter will be the start of
            your next word. happy linking!
          </p>
        </Project>
        <Item
          title="pants"
          description=""
          imageSrc="/assets/pants.png"
          link="https://gracewgao.me/pants"
          width={200}
        />
        <Project
          title="parade party"
          videoSrc="/assets/paradeparty.mp4"
          link="https://gracewgao.me/parade-party"
        >
          <p>
            welcome to the never-ending parade, inspired by my friend kailey and
            powered by web socket magic. you can march on your own or invite
            friends through a join link to march together in sync across your
            devices.
          </p>
        </Project>
        <TextWrapper>
          <p>thanks for hanging out!</p>
          <p>
            {
              "if you have thoughts or ideas to share, I'd love to hear from you. drop me a line..."
            }
          </p>
          <Link
            link="mailto:grace.gao2@uwaterloo.ca"
            label="grace.gao2@uwaterloo.ca"
            icon={MailIcon}
          />
          <Link
            link="https://www.linkedin.com/in/gracewgao/"
            label="gracewgao"
            icon={LinkedinIcon}
          />
          <Link
            link="https://github.com/gracewgao"
            label="gracewgao"
            icon={GithubIcon}
          />
        </TextWrapper>
      </Clothesline>
    </AppWrapper>
  );
};

export default App;

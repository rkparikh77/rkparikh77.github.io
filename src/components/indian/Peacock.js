import React from "react";
import styled, { keyframes, css } from "styled-components";

const sway = keyframes`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`;

const shimmer = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const PeacockContainer = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 400px;
  height: 500px;
  z-index: 8;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateX(${(props) => (props.visible ? "0" : "100px")});
  transition: opacity 1s ease, transform 1s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 200px;
    height: 250px;
    right: 0;
    bottom: 15%;
  }
`;

const PeacockSVG = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${sway} 4s ease-in-out infinite;
`;

const Feather = styled.g`
  transform-origin: 200px 400px;
  transition: transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${(props) =>
    props.expanded
      ? css`
          transform: rotate(${props.rotation}deg) scale(1);
        `
      : css`
          transform: rotate(0deg) scale(0.3);
        `}
`;

const FeatherEye = styled.ellipse`
  animation: ${shimmer} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const Peacock = ({ theme, expanded, visible }) => {
  const featherAngles = [-60, -45, -30, -15, 0, 15, 30, 45, 60];

  return (
    <PeacockContainer visible={visible}>
      <PeacockSVG viewBox="0 0 400 500">
        {/* Tail feathers */}
        <g className="tail">
          {featherAngles.map((angle, i) => (
            <Feather key={i} expanded={expanded} rotation={angle}>
              {/* Feather shaft */}
              <path
                d={`M200,400 Q${200 + angle * 0.5},300 ${200 + angle * 2},100`}
                fill="none"
                stroke={theme.peacockGreen}
                strokeWidth="3"
              />

              {/* Feather barbs */}
              <ellipse
                cx={200 + angle * 1.5}
                cy="150"
                rx="25"
                ry="60"
                fill={theme.peacockGreen}
                opacity="0.8"
              />

              {/* Feather eye - outer */}
              <ellipse
                cx={200 + angle * 1.5}
                cy="130"
                rx="18"
                ry="25"
                fill={theme.peacockBlue}
              />

              {/* Feather eye - middle */}
              <FeatherEye
                cx={200 + angle * 1.5}
                cy="130"
                rx="12"
                ry="18"
                fill={theme.peacockGold}
                delay={i * 0.1}
              />

              {/* Feather eye - center */}
              <ellipse
                cx={200 + angle * 1.5}
                cy="130"
                rx="6"
                ry="10"
                fill={theme.primary}
              />

              {/* Eye highlight */}
              <ellipse
                cx={200 + angle * 1.5 - 2}
                cy="127"
                rx="2"
                ry="3"
                fill="white"
                opacity="0.5"
              />
            </Feather>
          ))}
        </g>

        {/* Body */}
        <ellipse cx="200" cy="420" rx="30" ry="50" fill={theme.peacockBlue} />

        {/* Neck */}
        <path
          d="M200,380 Q190,350 195,320 Q200,290 200,280"
          fill="none"
          stroke={theme.peacockBlue}
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Head */}
        <circle cx="200" cy="270" r="20" fill={theme.peacockBlue} />

        {/* Beak */}
        <path d="M200,275 L210,285 L200,282 Z" fill={theme.peacockGold} />

        {/* Eye */}
        <circle cx="195" cy="268" r="5" fill="white" />
        <circle cx="196" cy="268" r="3" fill="black" />

        {/* Crown feathers */}
        <g>
          {[-15, -8, 0, 8, 15].map((offset, i) => (
            <g key={i}>
              <line
                x1={200 + offset}
                y1="250"
                x2={200 + offset * 1.5}
                y2="230"
                stroke={theme.peacockBlue}
                strokeWidth="2"
              />
              <circle
                cx={200 + offset * 1.5}
                cy="228"
                r="4"
                fill={theme.peacockGold}
              />
            </g>
          ))}
        </g>

        {/* Legs */}
        <line
          x1="185"
          y1="465"
          x2="175"
          y2="495"
          stroke={theme.peacockGold}
          strokeWidth="3"
        />
        <line
          x1="215"
          y1="465"
          x2="225"
          y2="495"
          stroke={theme.peacockGold}
          strokeWidth="3"
        />
      </PeacockSVG>
    </PeacockContainer>
  );
};

export default Peacock;

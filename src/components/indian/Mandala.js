import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const MandalaContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s ease;
  z-index: 3;
  pointer-events: none;
`;

const MandalaSVG = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${rotate} 120s linear infinite;
`;

const MandalaGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.accent}33 0%,
    transparent 70%
  );
  animation: ${pulse} 4s ease-in-out infinite;
`;

const Mandala = ({ theme, visible, scrollProgress, size = 600 }) => {
  // Scale mandala based on scroll
  const scale = 1 + scrollProgress * 0.5;
  const opacity = Math.max(0, 1 - scrollProgress * 3);

  return (
    <MandalaContainer
      size={size}
      visible={visible && opacity > 0}
      style={{ transform: `translate(-50%, -50%) scale(${scale})`, opacity }}
    >
      <MandalaGlow theme={theme} />
      <MandalaSVG viewBox="0 0 400 400">
        {/* Outer ring */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke={theme.accent}
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Petal layers - outer */}
        {[...Array(16)].map((_, i) => (
          <g key={`outer-${i}`} transform={`rotate(${i * 22.5} 200 200)`}>
            <path
              d="M200,20 Q220,100 200,120 Q180,100 200,20"
              fill="none"
              stroke={theme.accent}
              strokeWidth="1.5"
              opacity="0.6"
            />
          </g>
        ))}

        {/* Second ring */}
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke={theme.accent}
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Petal layers - middle */}
        {[...Array(12)].map((_, i) => (
          <g key={`middle-${i}`} transform={`rotate(${i * 30} 200 200)`}>
            <path
              d="M200,70 Q215,120 200,140 Q185,120 200,70"
              fill={theme.accent}
              opacity="0.3"
            />
            <path
              d="M200,70 Q215,120 200,140 Q185,120 200,70"
              fill="none"
              stroke={theme.accent}
              strokeWidth="1"
              opacity="0.6"
            />
          </g>
        ))}

        {/* Inner ring */}
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="none"
          stroke={theme.accent}
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Petal layers - inner */}
        {[...Array(8)].map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45} 200 200)`}>
            <path
              d="M200,120 Q210,150 200,170 Q190,150 200,120"
              fill={theme.accent}
              opacity="0.4"
            />
          </g>
        ))}

        {/* Center flower */}
        <circle
          cx="200"
          cy="200"
          r="50"
          fill="none"
          stroke={theme.accent}
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Center petals */}
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={`center-${i}`}
            cx="200"
            cy="165"
            rx="8"
            ry="20"
            fill={theme.accent}
            opacity="0.5"
            transform={`rotate(${i * 45} 200 200)`}
          />
        ))}

        {/* Center dot */}
        <circle cx="200" cy="200" r="15" fill={theme.accent} opacity="0.7" />
        <circle cx="200" cy="200" r="8" fill={theme.body} opacity="0.5" />

        {/* Decorative dots on outer ring */}
        {[...Array(32)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx="200"
            cy="15"
            r="3"
            fill={theme.accent}
            opacity="0.5"
            transform={`rotate(${i * 11.25} 200 200)`}
          />
        ))}
      </MandalaSVG>
    </MandalaContainer>
  );
};

export default Mandala;

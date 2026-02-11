import React from "react";
import styled from "styled-components";

const LandscapeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 2;
  pointer-events: none;
`;

const MountainLayer = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(${(props) => props.parallax}px);
  transition: transform 0.1s linear;
`;

const LandscapeSVG = ({ theme, scrollProgress }) => {
  // Parallax effect for each layer
  const getParallax = (layer) => {
    const baseMove = scrollProgress * 100;
    const layerFactors = [0.1, 0.2, 0.3, 0.4];
    return baseMove * layerFactors[layer];
  };

  // Colors that shift based on scroll progress
  const getLayerColor = (layer) => {
    const baseColors = [
      { start: "#1a237e", end: "#ff6f00" }, // Furthest
      { start: "#283593", end: "#ff8f00" },
      { start: "#303f9f", end: "#ffa000" },
      { start: "#3949ab", end: "#ffb300" }, // Nearest
    ];

    const { start, end } = baseColors[layer];

    // Return start color before golden hour, end color after
    return scrollProgress < 0.8 ? start : end;
  };

  return (
    <LandscapeContainer>
      {/* Layer 1 - Furthest mountains */}
      <MountainLayer
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        parallax={getParallax(0)}
      >
        <path
          d="M0,400 L0,250 Q180,150 360,200 T720,180 T1080,220 T1440,200 L1440,400 Z"
          fill={getLayerColor(0)}
          opacity="0.4"
        />
      </MountainLayer>

      {/* Layer 2 */}
      <MountainLayer
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        parallax={getParallax(1)}
      >
        <path
          d="M0,400 L0,280 Q120,200 240,250 Q400,180 560,230 Q720,160 880,220 Q1040,170 1200,240 Q1320,200 1440,260 L1440,400 Z"
          fill={getLayerColor(1)}
          opacity="0.5"
        />
      </MountainLayer>

      {/* Layer 3 */}
      <MountainLayer
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        parallax={getParallax(2)}
      >
        <path
          d="M0,400 L0,300 Q100,240 200,280 Q350,200 500,260 Q650,190 800,250 Q950,200 1100,270 Q1250,220 1440,290 L1440,400 Z"
          fill={getLayerColor(2)}
          opacity="0.6"
        />
        {/* Temple silhouette */}
        <path
          d="M700,260 L700,200 L720,180 L740,200 L740,260 Z"
          fill={getLayerColor(2)}
          opacity="0.8"
        />
        <path
          d="M690,260 L690,240 L720,210 L750,240 L750,260 Z"
          fill={getLayerColor(2)}
          opacity="0.8"
        />
      </MountainLayer>

      {/* Layer 4 - Nearest hills with trees */}
      <MountainLayer
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        parallax={getParallax(3)}
      >
        <path
          d="M0,400 L0,320 Q80,280 160,310 Q280,260 400,300 Q520,250 640,290 Q760,240 880,280 Q1000,250 1120,300 Q1240,270 1440,320 L1440,400 Z"
          fill={getLayerColor(3)}
          opacity="0.7"
        />
        {/* Trees */}
        {[100, 200, 350, 500, 750, 900, 1100, 1300].map((x, i) => (
          <g key={i} transform={`translate(${x}, ${300 + Math.sin(i) * 20})`}>
            <path
              d="M0,0 L-15,40 L-8,35 L-20,70 L20,70 L8,35 L15,40 Z"
              fill={theme.secondary || "#00695c"}
              opacity="0.6"
            />
          </g>
        ))}
      </MountainLayer>

      {/* Ground layer */}
      <MountainLayer
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        parallax={0}
      >
        <path
          d="M0,400 L0,360 Q360,340 720,355 Q1080,340 1440,360 L1440,400 Z"
          fill={theme.secondary || "#00695c"}
          opacity="0.9"
        />
      </MountainLayer>
    </LandscapeContainer>
  );
};

export default LandscapeSVG;

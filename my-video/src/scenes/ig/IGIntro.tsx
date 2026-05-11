import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../../brand";
import { fontFamily } from "../../fonts";

export const IGIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const p = interpolate(frame, [0, fps * 0.9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.verdeSuperficie,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          opacity: p,
          transform: `scale(${interpolate(p, [0, 1], [0.93, 1])})`,
          textAlign: "center",
          padding: "0 72px",
        }}
      >
        <div
          style={{
            fontSize: 128,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: C.hueso,
          }}
        >
          agenda<span style={{ color: C.verdeAcento }}>llena</span>
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 400,
            color: "rgba(250,250,247,0.65)",
            marginTop: 36,
            letterSpacing: "0.01em",
          }}
        >
          Tu agenda, confirmada.
        </div>
      </div>
    </AbsoluteFill>
  );
};

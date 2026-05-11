import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../../brand";
import { fontFamily } from "../../fonts";

export const FeedIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const p = interpolate(frame, [0, fps * 0.7], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const subP = interpolate(frame, [fps * 0.3, fps * 0.8], [0, 1], {
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
      <div style={{ textAlign: "center", padding: "0 80px" }}>
        <div
          style={{
            opacity: p,
            transform: `scale(${interpolate(p, [0, 1], [0.93, 1])})`,
            fontSize: 110,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: C.hueso,
            marginBottom: 20,
          }}
        >
          agenda<span style={{ color: C.verdeAcento }}>llena</span>
        </div>
        <div
          style={{
            opacity: subP,
            transform: `translateY(${interpolate(subP, [0, 1], [8, 0])}px)`,
            fontSize: 22,
            fontWeight: 500,
            color: C.verdeAcento,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Cómo confirma tus citas
        </div>
      </div>
    </AbsoluteFill>
  );
};

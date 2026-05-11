import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { C } from "../../brand";
import { fontFamily } from "../../fonts";

const AnimBar: React.FC<{
  frame: number;
  startFrame: number;
  targetPct: number;
  labelLeft: string;
  labelMid: string;
  labelRight: string;
}> = ({ frame, startFrame, targetPct, labelLeft, labelMid, labelRight }) => {
  const fill = interpolate(frame, [startFrame, startFrame + 60], [0, targetPct], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const opacity = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ opacity, marginTop: 14 }}>
      <div
        style={{
          height: 8,
          borderRadius: 4,
          backgroundColor: C.grisClaro,
          overflow: "hidden",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${fill}%`,
            backgroundColor: C.tinta,
            borderRadius: 4,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          color: C.grafito,
          fontVariantNumeric: "tabular-nums",
          fontFamily,
        }}
      >
        <span>{labelLeft}</span>
        <span style={{ fontWeight: 600, color: C.tinta }}>{labelMid}</span>
        <span>{labelRight}</span>
      </div>
    </div>
  );
};

const HDivider: React.FC<{ frame: number; startFrame: number }> = ({ frame, startFrame }) => {
  const w = interpolate(frame, [startFrame, startFrame + 28], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  return (
    <div
      style={{
        height: 1,
        width: `${w}%`,
        backgroundColor: C.grisBorde,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
};

const IGStat: React.FC<{
  statNode: React.ReactNode;
  line1: string;
  line2: string;
  dynamicNode: React.ReactNode;
  frame: number;
  statDelay: number;
  textDelay: number;
}> = ({ statNode, line1, line2, dynamicNode, frame, statDelay, textDelay }) => {
  const statSpring = spring({
    frame: frame - statDelay,
    fps: 30,
    config: { damping: 13, stiffness: 240, mass: 0.5 },
    durationInFrames: 22,
  });
  const textP = interpolate(frame, [textDelay, textDelay + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          opacity: interpolate(statSpring, [0, 0.1, 1], [0, 1, 1]),
          transform: `scale(${interpolate(statSpring, [0, 1], [0.78, 1])})`,
        }}
      >
        {statNode}
      </div>
      <div
        style={{
          opacity: textP,
          transform: `translateY(${interpolate(textP, [0, 1], [8, 0])}px)`,
          marginTop: 8,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 600, color: C.tinta, lineHeight: 1.3, fontFamily }}>
          {line1}
        </div>
        <div style={{ fontSize: 21, fontWeight: 400, color: C.tinta, lineHeight: 1.3, fontFamily }}>
          {line2}
        </div>
      </div>
      {dynamicNode}
    </div>
  );
};

export const IGProblema: React.FC = () => {
  const frame = useCurrentFrame();

  const eyeP = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const pct = Math.round(
    30 * interpolate(frame, [8, 70], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    })
  );

  const eightVal = Math.round(
    8 * interpolate(frame, [75, 125], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    })
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.hueso,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: "120px 72px",
        gap: 28,
      }}
    >
      <div
        style={{
          opacity: eyeP,
          transform: `translateY(${interpolate(eyeP, [0, 1], [8, 0])}px)`,
          fontSize: 15,
          fontWeight: 500,
          color: C.verde,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          alignSelf: "flex-start",
        }}
      >
        El problema
      </div>

      <IGStat
        statNode={
          <div style={{ fontSize: 128, fontWeight: 700, color: C.tinta, lineHeight: 1, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
            {pct}%
          </div>
        }
        line1="de las citas se pierden"
        line2="por inasistencias"
        dynamicNode={
          <AnimBar frame={frame} startFrame={38} targetPct={30} labelLeft="0%" labelMid="30% perdidas" labelRight="100%" />
        }
        frame={frame}
        statDelay={6}
        textDelay={24}
      />

      <HDivider frame={frame} startFrame={68} />

      <IGStat
        statNode={
          <div style={{ fontSize: 128, fontWeight: 700, color: C.tinta, lineHeight: 1, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
            {eightVal}/10
          </div>
        }
        line1="negocios coordinan"
        line2="citas por WhatsApp"
        dynamicNode={
          <AnimBar frame={frame} startFrame={98} targetPct={80} labelLeft="0/10" labelMid="8 de 10" labelRight="10/10" />
        }
        frame={frame}
        statDelay={73}
        textDelay={88}
      />

      <HDivider frame={frame} startFrame={118} />

      <IGStat
        statNode={
          <div style={{ fontSize: 128, fontWeight: 700, color: C.tinta, lineHeight: 1, letterSpacing: "-0.04em" }}>
            2h
          </div>
        }
        line1="al día persiguiendo"
        line2="confirmaciones"
        dynamicNode={
          <AnimBar frame={frame} startFrame={138} targetPct={25} labelLeft="0h" labelMid="2 de 8h" labelRight="8h" />
        }
        frame={frame}
        statDelay={123}
        textDelay={136}
      />
    </AbsoluteFill>
  );
};

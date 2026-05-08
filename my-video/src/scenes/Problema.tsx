import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { C } from "../brand";
import { fontFamily } from "../fonts";

// Barra animada de progreso (30% y 2h)
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
    <div style={{ opacity }}>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          backgroundColor: C.grisClaro,
          overflow: "hidden",
          marginBottom: 9,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${fill}%`,
            backgroundColor: C.tinta,
            borderRadius: 3,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
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

// Divider vertical animado
const Divider: React.FC<{ frame: number; startFrame: number }> = ({ frame, startFrame }) => {
  const h = interpolate(frame, [startFrame, startFrame + 30], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  return (
    <div
      style={{
        width: 1,
        height: `${h}%`,
        backgroundColor: C.grisBorde,
        alignSelf: "center",
        flexShrink: 0,
      }}
    />
  );
};

// Columna de stat reutilizable
const StatCol: React.FC<{
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
    <div
      style={{
        flex: 1,
        padding: "0 28px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Número grande */}
      <div
        style={{
          opacity: interpolate(statSpring, [0, 0.1, 1], [0, 1, 1]),
          transform: `scale(${interpolate(statSpring, [0, 1], [0.78, 1])})`,
          transformOrigin: "left center",
        }}
      >
        {statNode}
      </div>

      {/* Texto descriptivo — todo en tinta */}
      <div
        style={{
          opacity: textP,
          transform: `translateY(${interpolate(textP, [0, 1], [8, 0])}px)`,
        }}
      >
        <div
          style={{ fontSize: 18, fontWeight: 600, color: C.tinta, lineHeight: 1.35, fontFamily }}
        >
          {line1}
        </div>
        <div
          style={{ fontSize: 17, fontWeight: 400, color: C.tinta, lineHeight: 1.35, fontFamily }}
        >
          {line2}
        </div>
      </div>

      {/* Elemento dinámico */}
      {dynamicNode}
    </div>
  );
};

export const Problema: React.FC = () => {
  const frame = useCurrentFrame();

  const eyeP = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // Contador 30%
  const pct = Math.round(
    30 *
      interpolate(frame, [8, 90], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      })
  );

  // Contador 8 de 10
  const eightVal = Math.round(
    8 *
      interpolate(frame, [20, 95], [0, 1], {
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
        padding: "0 72px",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          opacity: eyeP,
          transform: `translateY(${interpolate(eyeP, [0, 1], [8, 0])}px)`,
          fontSize: 13,
          fontWeight: 500,
          color: C.verde,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 40,
          alignSelf: "flex-start",
        }}
      >
        El problema
      </div>

      {/* Tres columnas de stats */}
      <div style={{ display: "flex", alignItems: "stretch", width: "100%" }}>
        {/* ── Stat 1: 30% ── */}
        <StatCol
          statNode={
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: C.tinta,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {pct}%
            </div>
          }
          line1="de las citas se pierden"
          line2="por inasistencias"
          dynamicNode={
            <AnimBar
              frame={frame}
              startFrame={38}
              targetPct={30}
              labelLeft="0%"
              labelMid="30% perdidas"
              labelRight="100%"
            />
          }
          frame={frame}
          statDelay={6}
          textDelay={24}
        />

        <Divider frame={frame} startFrame={14} />

        {/* ── Stat 2: 8 de 10 ── */}
        <StatCol
          statNode={
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: C.tinta,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {eightVal}/10
            </div>
          }
          line1="negocios coordinan"
          line2="citas por WhatsApp"
          dynamicNode={
            <AnimBar
              frame={frame}
              startFrame={50}
              targetPct={80}
              labelLeft="0/10"
              labelMid="8 de 10"
              labelRight="10/10"
            />
          }
          frame={frame}
          statDelay={18}
          textDelay={36}
        />

        <Divider frame={frame} startFrame={24} />

        {/* ── Stat 3: 2h ── */}
        <StatCol
          statNode={
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: C.tinta,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              2h
            </div>
          }
          line1="al día persiguiendo"
          line2="confirmaciones"
          dynamicNode={
            <AnimBar
              frame={frame}
              startFrame={55}
              targetPct={25}
              labelLeft="0h"
              labelMid="2 de 8h"
              labelRight="8h"
            />
          }
          frame={frame}
          statDelay={28}
          textDelay={46}
        />
      </div>
    </AbsoluteFill>
  );
};

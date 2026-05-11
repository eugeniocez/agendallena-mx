import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C } from "../../brand";
import { fontFamily } from "../../fonts";

const FormField: React.FC<{
  label: string;
  value: string;
  startFrame: number;
  duration: number;
  frame: number;
  style?: React.CSSProperties;
}> = ({ label, value, startFrame, duration, frame, style }) => {
  const p = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const chars = Math.ceil(value.length * p);

  return (
    <div style={{ flex: 1, ...style }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: C.grafito,
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          marginBottom: 6,
          fontFamily,
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: "11px 14px",
          borderRadius: 10,
          border: `1.5px solid ${C.grisBorde}`,
          backgroundColor: "#fff",
          fontSize: 14,
          fontWeight: 400,
          color: C.tinta,
          fontFamily,
          minHeight: 40,
          letterSpacing: "-0.01em",
        }}
      >
        {value.slice(0, chars)}
      </div>
    </div>
  );
};

export const FeedStep1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const e = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });

  const eyeP = e(0, 8);
  const titleP = e(4, 12);

  const cardSpring = spring({
    frame: frame - 14,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.55 },
    durationInFrames: 24,
  });
  const cardOpacity = interpolate(cardSpring, [0, 0.08, 1], [0, 1, 1]);
  const cardScale = interpolate(cardSpring, [0, 1], [0.82, 1]);

  const btnP = e(88, 14);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.hueso,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: "64px 72px",
        gap: 16,
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            opacity: eyeP,
            transform: `translateY(${interpolate(eyeP, [0, 1], [6, 0])}px)`,
            fontSize: 13,
            fontWeight: 500,
            color: C.verde,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 10,
          }}
        >
          01 — Agenda
        </div>
        <div
          style={{
            opacity: titleP,
            transform: `translateY(${interpolate(titleP, [0, 1], [10, 0])}px)`,
            fontSize: 46,
            fontWeight: 700,
            color: C.tinta,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Agendas la cita en segundos
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: "22px 28px 20px",
          boxShadow: "0 20px 56px rgba(10,10,11,0.10)",
          border: `1px solid ${C.grisBorde}`,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <div style={{ width: 7, height: 7, borderRadius: 3.5, backgroundColor: C.verde }} />
          <div style={{ fontSize: 14, fontWeight: 600, color: C.tinta }}>Nueva cita</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <FormField label="Cliente" value="María González" startFrame={28} duration={16} frame={frame} />
            <FormField label="Teléfono" value="+52 55 1234 5678" startFrame={38} duration={14} frame={frame} />
          </div>
          <FormField label="Servicio" value="Limpieza dental" startFrame={48} duration={14} frame={frame} />
          <div style={{ display: "flex", gap: 12 }}>
            <FormField label="Fecha" value="Mié, 7 mayo" startFrame={58} duration={14} frame={frame} />
            <FormField label="Hora" value="10:00 am" startFrame={65} duration={12} frame={frame} />
          </div>
        </div>

        <div
          style={{
            opacity: btnP,
            transform: `scale(${interpolate(btnP, [0, 1], [0.93, 1])})`,
            marginTop: 16,
          }}
        >
          <div
            style={{
              backgroundColor: C.verde,
              color: C.hueso,
              borderRadius: 999,
              padding: "12px 0",
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              fontFamily,
            }}
          >
            Agendar cita
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

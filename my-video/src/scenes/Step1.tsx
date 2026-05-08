import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C } from "../brand";
import { fontFamily } from "../fonts";

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
          marginBottom: 7,
          fontFamily,
        }}
      >
        {label}
      </div>
      <div
        style={{
          padding: "13px 16px",
          borderRadius: 12,
          border: `1.5px solid ${C.grisBorde}`,
          backgroundColor: "#fff",
          fontSize: 15,
          fontWeight: 400,
          color: C.tinta,
          fontFamily,
          minHeight: 46,
          letterSpacing: "-0.01em",
        }}
      >
        {value.slice(0, chars)}
      </div>
    </div>
  );
};

export const Step1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const e = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });

  const eyeP = e(0, 10);
  const titleP = e(5, 14);

  const cardSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.55 },
    durationInFrames: 28,
  });
  const cardScale = interpolate(cardSpring, [0, 1], [0.8, 1]);
  const cardOpacity = interpolate(cardSpring, [0, 0.08, 1], [0, 1, 1]);

  // Sequential flow — each field starts before previous finishes (13-frame stagger)
  const btnP = e(112, 16);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.hueso,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: "44px 80px",
        gap: 18,
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            opacity: eyeP,
            transform: `translateY(${interpolate(eyeP, [0, 1], [8, 0])}px)`,
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
            transform: `translateY(${interpolate(titleP, [0, 1], [12, 0])}px)`,
            fontSize: 44,
            fontWeight: 700,
            color: C.tinta,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Tu negocio agenda una cita en segundos
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: "28px 36px 24px",
          boxShadow: "0 24px 64px rgba(10,10,11,0.11)",
          border: `1px solid ${C.grisBorde}`,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: C.verde }} />
          <div style={{ fontSize: 15, fontWeight: 600, color: C.tinta, letterSpacing: "-0.01em" }}>
            Nueva cita
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
          <FormField label="Cliente" value="María González" startFrame={35} duration={20} frame={frame} />
          <FormField label="Teléfono" value="+52 55 1234 5678" startFrame={48} duration={20} frame={frame} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <FormField label="Servicio" value="Limpieza dental" startFrame={61} duration={20} frame={frame} />
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          <FormField label="Fecha" value="Mié, 7 de mayo 2025" startFrame={74} duration={20} frame={frame} />
          <FormField label="Hora" value="10:00 am" startFrame={87} duration={16} frame={frame} />
        </div>

        <div
          style={{
            opacity: btnP,
            transform: `scale(${interpolate(btnP, [0, 1], [0.93, 1])})`,
          }}
        >
          <div
            style={{
              backgroundColor: C.verde,
              color: C.hueso,
              borderRadius: 999,
              padding: "14px 0",
              textAlign: "center",
              fontSize: 15,
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

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

export const Step5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const e = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });

  const eyeP = e(0, 12);
  const titleP = e(6, 16);

  const cardSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 220, mass: 0.55 },
    durationInFrames: 28,
  });
  const cardScale = interpolate(cardSpring, [0, 1], [0.8, 1]);
  const cardOpacity = interpolate(cardSpring, [0, 0.08, 1], [0, 1, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.hueso,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: "48px 80px",
        gap: 20,
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
          05 — 2 horas después
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
          Agradecimiento automático
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(10,10,11,0.10)",
          border: `1px solid ${C.grisBorde}`,
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: C.grisClaro,
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderBottom: `1px solid ${C.grisBorde}`,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: C.verdeTenue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: C.verde,
              flexShrink: 0,
            }}
          >
            AL
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.tinta }}>agendallena</div>
            <div style={{ fontSize: 12, color: C.grafito, marginTop: 1 }}>Mensajes</div>
          </div>
          <div style={{ fontSize: 12, color: C.grafito, fontVariantNumeric: "tabular-nums" }}>
            12:05 pm
          </div>
        </div>
        <div style={{ padding: "24px 24px 28px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: C.grisClaro,
              borderRadius: "4px 16px 16px 16px",
              padding: "14px 18px",
              fontSize: 17,
              fontWeight: 400,
              color: C.tinta,
              lineHeight: 1.55,
              fontFamily,
            }}
          >
            Gracias por tu visita hoy en Studio Dental. Esperamos verte pronto.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

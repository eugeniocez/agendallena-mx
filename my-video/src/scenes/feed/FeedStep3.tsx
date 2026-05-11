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

const Pill: React.FC<{ label: string; bg: string; color: string; frame: number; delay: number }> = ({
  label, bg, color, frame, delay,
}) => {
  const p = spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 12, stiffness: 280, mass: 0.45 },
    durationInFrames: 14,
  });
  return (
    <div
      style={{
        opacity: interpolate(p, [0, 0.1, 1], [0, 1, 1]),
        transform: `scale(${interpolate(p, [0, 1], [0.65, 1])})`,
        backgroundColor: bg,
        color,
        borderRadius: 999,
        padding: "10px 20px",
        fontSize: 14,
        fontWeight: 600,
        fontFamily,
        flexShrink: 0,
      }}
    >
      {label}
    </div>
  );
};

export const FeedStep3: React.FC = () => {
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

  const MSG = "Tu cita es mañana a las 10:00 am en Studio Dental. ¿Confirmas tu asistencia?";
  const chars = Math.floor(
    MSG.length *
      interpolate(frame, [32, 82], [0, 1], {
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
          03 — 24 horas antes
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
          Recordatorio con botones de respuesta
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 20px 56px rgba(10,10,11,0.09)",
          border: `1px solid ${C.grisBorde}`,
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: C.grisClaro,
            padding: "16px 22px",
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
              backgroundColor: C.verde,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            AL
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.tinta }}>agendallena</div>
            <div style={{ fontSize: 12, color: C.grafito, marginTop: 1 }}>Mensajes</div>
          </div>
        </div>

        <div style={{ padding: "20px 22px 24px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: C.grisClaro,
              borderRadius: "4px 16px 16px 16px",
              padding: "12px 16px",
              fontSize: 16,
              fontWeight: 400,
              color: C.tinta,
              lineHeight: 1.55,
              fontFamily,
              marginBottom: 16,
              maxWidth: "85%",
            }}
          >
            {MSG.slice(0, chars)}
            {chars < MSG.length && (
              <span style={{ opacity: Math.floor(frame / 5) % 2 === 0 ? 1 : 0 }}>│</span>
            )}
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Pill label="Confirmar" bg={C.verde} color="#fff" frame={frame} delay={86} />
            <Pill label="Cancelar" bg={C.grisClaro} color={C.tinta} frame={frame} delay={94} />
            <Pill label="Reagendar" bg={C.grisClaro} color={C.tinta} frame={frame} delay={102} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

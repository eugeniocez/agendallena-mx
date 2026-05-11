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

const PulseRing: React.FC<{ delay: number; frame: number; fps: number }> = ({ delay, frame, fps }) => {
  const loopFrame = (frame - delay) % (fps * 1.4);
  const p = interpolate(loopFrame, [0, fps * 1.1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: `2px solid ${C.verdeAcento}`,
        opacity: frame > delay ? interpolate(p, [0, 0.6, 1], [0.55, 0.15, 0]) : 0,
        transform: `scale(${interpolate(p, [0, 1], [1, 2.4])})`,
      }}
    />
  );
};

export const FeedStep4: React.FC = () => {
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

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.verdeSuperficie,
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
            color: C.verdeAcento,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 10,
          }}
        >
          04 — 2 horas antes
        </div>
        <div
          style={{
            opacity: titleP,
            transform: `translateY(${interpolate(titleP, [0, 1], [10, 0])}px)`,
            fontSize: 46,
            fontWeight: 700,
            color: C.hueso,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Llamada automática si no responde
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: "28px 32px",
          width: "100%",
          boxShadow: "0 28px 72px rgba(0,0,0,0.22)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
            <PulseRing delay={30} frame={frame} fps={fps} />
            <PulseRing delay={48} frame={frame} fps={fps} />
            <div
              style={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: 36,
                backgroundColor: C.verde,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#fff",
                zIndex: 1,
              }}
            >
              M
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.hueso, letterSpacing: "-0.02em", marginBottom: 6 }}>
              María González
            </div>
            <div style={{ fontSize: 15, color: "rgba(250,250,247,0.60)", fontWeight: 400 }}>
              Llamada de agendallena
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(250,250,247,0.40)" }}>
              Responde para confirmar tu cita de mañana
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: "#DC2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <line x1="17" y1="5" x2="5" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="5" x2="17" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: C.verdeAcento,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                  fill={C.tinta}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

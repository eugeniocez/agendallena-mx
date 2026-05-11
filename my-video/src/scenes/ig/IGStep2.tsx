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

export const IGStep2: React.FC = () => {
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

  const MSG =
    "Hola María, tu cita en Studio Dental está confirmada para el miércoles 7 de mayo a las 10:00 am. ¡Te esperamos!";
  const chars = Math.floor(
    MSG.length *
      interpolate(frame, [40, 110], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      })
  );

  const timestampP = e(108, 12);

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
        gap: 24,
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            opacity: eyeP,
            transform: `translateY(${interpolate(eyeP, [0, 1], [8, 0])}px)`,
            fontSize: 15,
            fontWeight: 500,
            color: C.verde,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 12,
          }}
        >
          02 — Al instante
        </div>
        <div
          style={{
            opacity: titleP,
            transform: `translateY(${interpolate(titleP, [0, 1], [12, 0])}px)`,
            fontSize: 58,
            fontWeight: 700,
            color: C.tinta,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          SMS de confirmación al instante
        </div>
      </div>

      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          backgroundColor: "#fff",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(10,10,11,0.10)",
          border: `1px solid ${C.grisBorde}`,
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: C.grisClaro,
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderBottom: `1px solid ${C.grisBorde}`,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: C.verde,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            AL
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, color: C.tinta }}>agendallena</div>
            <div style={{ fontSize: 14, color: C.grafito, marginTop: 2 }}>Mensajes · Ahora</div>
          </div>
        </div>

        <div style={{ padding: "28px 28px 32px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: C.grisClaro,
              borderRadius: "4px 18px 18px 18px",
              padding: "16px 22px",
              fontSize: 20,
              fontWeight: 400,
              color: C.tinta,
              lineHeight: 1.55,
              fontFamily,
              maxWidth: "85%",
            }}
          >
            {MSG.slice(0, chars)}
            {chars < MSG.length && (
              <span style={{ opacity: Math.floor(frame / 5) % 2 === 0 ? 1 : 0 }}>│</span>
            )}
          </div>
          <div
            style={{
              opacity: timestampP,
              marginTop: 12,
              fontSize: 14,
              color: C.grafito,
              paddingLeft: 4,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            Enviado · 10:01 am
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

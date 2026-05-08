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

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const e = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });

  const logoP = e(0, fps * 0.5);
  const tagP = e(fps * 0.3, fps * 0.4);
  const divP = e(fps * 0.55, fps * 0.35);
  const freeP = e(fps * 0.7, fps * 0.4);
  const priceP = e(fps * 0.85, fps * 0.35);
  const ctaSpring = spring({
    frame: frame - fps * 1.0,
    fps,
    config: { damping: 15, stiffness: 180, mass: 0.6 },
    durationInFrames: fps * 0.8,
  });
  const urlP = e(fps * 1.5, fps * 0.4);

  const divWidth = interpolate(divP, [0, 1], [0, 100]);

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
      <div style={{ textAlign: "center", maxWidth: 640 }}>
        <div
          style={{
            opacity: logoP,
            transform: `scale(${interpolate(logoP, [0, 1], [0.92, 1])})`,
            fontSize: 80,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: C.hueso,
            marginBottom: 18,
          }}
        >
          agenda<span style={{ color: C.verdeAcento }}>llena</span>
        </div>

        <div
          style={{
            opacity: tagP,
            transform: `translateY(${interpolate(tagP, [0, 1], [8, 0])}px)`,
            fontSize: 21,
            fontWeight: 400,
            color: "rgba(250,250,247,0.6)",
            marginBottom: 32,
          }}
        >
          Tu agenda, confirmada.
        </div>

        <div
          style={{
            opacity: divP,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.12)",
            marginBottom: 32,
            width: `${divWidth}%`,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <div
          style={{
            opacity: freeP,
            transform: `translateY(${interpolate(freeP, [0, 1], [8, 0])}px)`,
            fontSize: 18,
            fontWeight: 500,
            color: C.verdeAcento,
            marginBottom: 8,
          }}
        >
          14 días gratis. Sin tarjeta de crédito.
        </div>

        <div
          style={{
            opacity: priceP,
            transform: `translateY(${interpolate(priceP, [0, 1], [6, 0])}px)`,
            fontSize: 15,
            fontWeight: 400,
            color: "rgba(250,250,247,0.40)",
            marginBottom: 36,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          $199 MXN / mes después
        </div>

        <div
          style={{
            opacity: ctaSpring,
            transform: `scale(${interpolate(ctaSpring, [0, 1], [0.88, 1])})`,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              backgroundColor: C.hueso,
              color: C.tinta,
              borderRadius: 999,
              padding: "18px 52px",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              display: "inline-block",
              fontFamily,
            }}
          >
            Empieza gratis
          </div>
        </div>

        <div
          style={{
            opacity: urlP,
            fontSize: 14,
            fontWeight: 400,
            color: "rgba(250,250,247,0.40)",
            letterSpacing: "0.01em",
          }}
        >
          agendallena.mx
        </div>
      </div>
    </AbsoluteFill>
  );
};

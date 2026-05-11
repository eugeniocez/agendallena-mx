import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { IGIntro } from "./scenes/ig/IGIntro";
import { IGProblema } from "./scenes/ig/IGProblema";
import { IGStep1 } from "./scenes/ig/IGStep1";
import { IGStep2 } from "./scenes/ig/IGStep2";
import { IGStep3 } from "./scenes/ig/IGStep3";
import { IGStep4 } from "./scenes/ig/IGStep4";
import { IGStep5 } from "./scenes/ig/IGStep5";
import { IGOutro } from "./scenes/ig/IGOutro";

const T = linearTiming({ durationInFrames: 8 });

// Durations: 50+165+155+128+128+128+108+175 = 1037  minus  7×8 = 981 frames ≈ 32.7s
const MusicTrack: React.FC = () => {
  const { durationInFrames } = useVideoConfig();
  return (
    <Audio
      src={staticFile("music.mp3")}
      startFrom={0}
      volume={(f) =>
        interpolate(
          f,
          [0, 18, durationInFrames - 35, durationInFrames],
          [0, 0.72, 0.72, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )
      }
    />
  );
};

export const IGVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <MusicTrack />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={50}>
          <IGIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={165}>
          <IGProblema />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={155}>
          <IGStep1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <IGStep2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <IGStep3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <IGStep4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={108}>
          <IGStep5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={175}>
          <IGOutro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

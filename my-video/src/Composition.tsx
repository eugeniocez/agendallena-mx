import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Intro } from "./scenes/Intro";
import { Problema } from "./scenes/Problema";
import { Step1 } from "./scenes/Step1";
import { Step2 } from "./scenes/Step2";
import { Step3 } from "./scenes/Step3";
import { Step4 } from "./scenes/Step4";
import { Step5 } from "./scenes/Step5";
import { Outro } from "./scenes/Outro";

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

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <MusicTrack />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={50}>
          <Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={165}>
          <Problema />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={155}>
          <Step1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <Step2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <Step3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={128}>
          <Step4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={108}>
          <Step5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={175}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export const MyComposition = MainVideo;

import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { FeedIntro } from "./scenes/feed/FeedIntro";
import { FeedStep1 } from "./scenes/feed/FeedStep1";
import { FeedStep2 } from "./scenes/feed/FeedStep2";
import { FeedStep3 } from "./scenes/feed/FeedStep3";
import { FeedStep4 } from "./scenes/feed/FeedStep4";
import { FeedStep5 } from "./scenes/feed/FeedStep5";
import { FeedOutro } from "./scenes/feed/FeedOutro";

const T = linearTiming({ durationInFrames: 8 });

// Durations: 45+120+120+120+120+90+90 = 705  minus  6×8 = 657 frames ≈ 21.9s
const MusicTrack: React.FC = () => {
  const { durationInFrames } = useVideoConfig();
  return (
    <Audio
      src={staticFile("music.mp3")}
      startFrom={0}
      volume={(f) =>
        interpolate(
          f,
          [0, 15, durationInFrames - 28, durationInFrames],
          [0, 0.72, 0.72, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )
      }
    />
  );
};

export const FeedVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <MusicTrack />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={45}>
          <FeedIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeedStep1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeedStep2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeedStep3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={120}>
          <FeedStep4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={90}>
          <FeedStep5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />

        <TransitionSeries.Sequence durationInFrames={90}>
          <FeedOutro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

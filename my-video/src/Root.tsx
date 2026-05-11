import "./index.css";
import { Composition } from "remotion";
import { MainVideo } from "./Composition";
import { IGVideo } from "./CompositionIG";
import { FeedVideo } from "./CompositionFeed";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AgendallenaDemo"
        component={MainVideo}
        durationInFrames={981}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="AgendallenaIG"
        component={IGVideo}
        durationInFrames={981}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="AgendallenaFeed"
        component={FeedVideo}
        durationInFrames={657}
        fps={30}
        width={1080}
        height={1350}
      />
    </>
  );
};

import "./index.css";
import { Composition } from "remotion";
import { MainVideo } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AgendallenaDemo"
      component={MainVideo}
      durationInFrames={981}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

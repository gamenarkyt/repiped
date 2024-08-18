import { Pause, Play, Settings } from "lucide-react";
import styles from "./VideoPlayer.module.css";
import { FC, SyntheticEvent, useRef, useState } from "react";
import { Typography } from "yui-uikit";

interface IVideoPlayerProps {
  title?: string;
  length?: number;
}

export const VideoPlayer: FC<IVideoPlayerProps> = ({ title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const onPlayClickHandler = () => {
    if (!videoRef.current) {
      return;
    }
    console.log(videoRef.current);
    const isPaused = videoRef.current.paused;
    if (isPaused) {
      setIsPlaying(true);
      videoRef.current && videoRef.current.play();
    } else {
      setIsPlaying(false);
      videoRef.current.pause();
    }
    // setIsPlaying((prev) => !prev);
  };

  const onTimeUpdateHandler = (event: SyntheticEvent<HTMLVideoElement>) => {
    if (!timelineRef.current) {
      return;
    }
    const { currentTime, duration } = event.currentTarget;
    const percent = (currentTime / duration) * 100;
    timelineRef.current.style.width = `${percent}px`;
  };

  return (
    <div className={styles.videoplayer_container}>
      <div className={styles.videoplayer_controls_container}>
        <div className={styles.videoplayer_controls_top}>
          <Typography size="h2" className={styles.title}>
            {title}
          </Typography>
        </div>
        <div className={styles.videoplayer_controls_center}>
          {isPlaying ? (
            <Pause
              className={styles.play_button}
              size={"38px"}
              onClick={onPlayClickHandler}
            />
          ) : (
            <Play
              className={styles.play_button}
              size={"38px"}
              onClick={onPlayClickHandler}
            />
          )}
        </div>
        <div className={styles.videoplayer_controls_bottom}>
          <div className={styles.timeline} ref={timelineRef}></div>
          <div className={styles.controls_buttons}>
            {isPlaying ? (
              <Pause
                className={styles.play_button}
                size={"22px"}
                onClick={onPlayClickHandler}
              />
            ) : (
              <Play
                className={styles.play_button}
                size={"22px"}
                onClick={onPlayClickHandler}
              />
            )}
            <Settings />
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        src="/video.webm"
        className={styles.videoplayer}
        onTimeUpdate={onTimeUpdateHandler}
        muted
      ></video>
    </div>
  );
};

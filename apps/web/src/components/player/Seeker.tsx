'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Stage, Layer, Rect, Text,
  Circle,
} from 'react-konva';
import usePlayer from './usePlayer';

type SeekerProps = {
  videoRef: React.RefObject<HTMLVideoElement>;
  currTime: number;
};

export default function Seeker({ videoRef, currTime }: SeekerProps) {
  const { handleSeekTo } = usePlayer(videoRef);
  const stageRef = useRef(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(2000);
  const draggerWidth = 50;
  const [stageWidth, setStageWidth] = useState(800);
  const [stageHeight, setStageHeight] = useState(200);
  const [draggerPosition, setDraggerPosition] = useState({ x: 0 });
  const [seekerPosition, setSeekerPosition] = useState({ x: currTime });
  const totalTime = videoRef.current?.duration || 1;

  useEffect(() => {
    const parentWidth = parentRef?.current?.offsetWidth;
    const parentHeight = parentRef?.current?.offsetHeight;
    if (!parentWidth || !parentHeight) return;

    setTrackWidth(parentWidth);
    setStageWidth(parentWidth);
    setStageHeight(parentHeight);
  }, [parentRef]);

  useEffect(() => {
    const time = 10 + (currTime / totalTime) * (stageWidth - 25);

    setSeekerPosition({ x: time });
  }, [currTime]);

  const handleDragMove = (e:any) => {
    const newX = e.target.x();
    setDraggerPosition({ x: newX });
  };

  const handleSeekerMove = (e:any) => {
    const newX = e.target.x();
    const newTime = ((newX - 10) / (stageWidth - 25)) * totalTime;

    handleSeekTo(newTime);
    setSeekerPosition({ x: newX });
  };

  return (
    <div className="flex flwx-col" ref={parentRef}>
      <Stage width={stageWidth} height={stageHeight} ref={stageRef}>
        <Layer>
          {/* Stage */}
          <Rect
            x={0}
            y={50}
            width={trackWidth}
            height={150}
            fill="black"
            cornerRadius={16}
          />
          <Rect
            x={10}
            y={60}
            width={trackWidth - 20}
            height={130}
            fill="#f0abfc"
            cornerRadius={16}
          />

          {/* A/B test thing */}
          <Rect
            x={draggerPosition.x}
            y={60}
            width={draggerWidth}
            height={130}
            fill="#fdba74"
            cornerRadius={12}
            draggable
            onDragMove={handleDragMove}
            dragBoundFunc={(pos) => {
              const { x } = pos;
              return {
                x: Math.max(10, Math.min(x, stageWidth - draggerWidth - 10)),
                y: 60,
              };
            }}
          />
          <Circle
            x={draggerPosition.x + 20}
            y={170}
            radius={3}
            fill="#9a3412"
          />
          <Circle
            x={draggerPosition.x + 30}
            y={170}
            radius={3}
            fill="#9a3412"
          />
          <Circle
            x={draggerPosition.x + 20}
            y={160}
            radius={3}
            fill="#9a3412"
          />
          <Circle
            x={draggerPosition.x + 30}
            y={160}
            radius={3}
            fill="#9a3412"
          />
          <Circle
            x={draggerPosition.x + 20}
            y={150}
            radius={3}
            fill="#9a3412"
          />
          <Circle
            x={draggerPosition.x + 30}
            y={150}
            radius={3}
            fill="#9a3412"
          />
          <Rect
            x={draggerPosition.x + 10}
            y={75}
            width={30}
            height={20}
            stroke="#9a3412"
            strokeWidth={2}
            fill="transparent"
            cornerRadius={3}
          />
          <Text
            text="A/B"
            fontSize={12}
            x={draggerPosition.x + 15}
            y={80}
            fill="#9a3412"
          />
          <Text
            text={`Dragger Position: ${draggerPosition.x.toFixed(2)}`}
            fontSize={15}
            x={10}
            y={200}
          />

          {/* Scrollbar */}
          <Rect
            x={seekerPosition.x}
            y={20}
            width={5}
            height={180}
            fill="#ef4444"
            cornerRadius={16}
            draggable
            onDragMove={handleSeekerMove}
            dragBoundFunc={(pos) => {
              const { x } = pos;
              return {
                x: Math.max(10, Math.min(x, stageWidth - 15)),
                y: 20,
              };
            }}
          />
          <Rect
            x={seekerPosition.x}
            y={5}
            width={30}
            height={40}
            offsetX={12}
            fill="#ef4444"
            cornerRadius={8}
            draggable
            onDragMove={handleSeekerMove}
            dragBoundFunc={(pos) => {
              const { x } = pos;
              return {
                x: Math.max(10, Math.min(x, stageWidth - 5 - 10)),
                y: 5,
              };
            }}
          />

        </Layer>
      </Stage>
    </div>
  );
}

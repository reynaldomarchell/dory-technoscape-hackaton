"use client";

import { useReactMediaRecorder } from "@/lib/ReactMediaRecorder";
import { useEffect } from "react";
import { start } from "repl";

export default function CreateSession() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Create Session</h1>
      <Recorder />
    </div>
  );
}

function Recorder() {
  const {
    status: statusCaller,
    startRecording: startRecordingCaller,
    stopRecording: stopRecordingCaller,
    mediaBlobUrl: mediaBlobUrlCaller,
  } = useReactMediaRecorder({
    screen: true,
  });

  const {
    status: statusAgent,
    startRecording: startRecordingAgent,
    stopRecording: stopRecordingAgent,
    mediaBlobUrl: mediaBlobUrlAgent,
  } = useReactMediaRecorder({
    audio: true,
  });

  const handleStartSession = () => {
    startRecordingCaller();
  };

  const handleEndSession = () => {
    stopRecordingCaller();
    stopRecordingAgent();
  };

  useEffect(() => {
    if (statusCaller === "recording") {
      startRecordingAgent();
    }
  }, [statusCaller]);

  return (
    <div className="flex-col gap-2 flex">
      <p>{statusCaller}</p>
      <p>{statusAgent}</p>
      <div className="flex items-center gap-4 max-w-screen-xl">
        <video src={mediaBlobUrlCaller} controls autoPlay loop />
        <video src={mediaBlobUrlAgent} controls autoPlay loop />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleStartSession}
          className="px-2 py-1 border rounded-md"
        >
          Start Recording
        </button>
        <button
          onClick={handleEndSession}
          className="px-2 py-1 border rounded-md"
        >
          Stop Recording
        </button>
      </div>
    </div>
  );
}

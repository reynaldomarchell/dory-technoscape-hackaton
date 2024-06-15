"use client";

import { useReactMediaRecorder } from "react-media-recorder-2";

export default function CreateSession() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Create Session</h1>
      <Recorder />
    </div>
  );
}

function Recorder() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });

  return (
    <div className="flex-col gap-2 flex">
      <p>{status}</p>
      <video src={mediaBlobUrl} controls autoPlay loop />
      <div className="flex items-center gap-4">
        <button
          onClick={startRecording}
          className="px-2 py-1 border rounded-md"
        >
          Start Recording
        </button>
        <button onClick={stopRecording} className="px-2 py-1 border rounded-md">
          Stop Recording
        </button>
      </div>
    </div>
  );
}

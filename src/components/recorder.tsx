"use client";

import { useReactMediaRecorder } from "@/lib/ReactMediaRecorder";
import { useEffect, useState } from "react";
import { useWhisper } from "@chengsokdara/use-whisper";

export default function Recorder() {
  const [transcriptedText, setTranscriptedText] = useState("");

  const {
    status: statusCaller,
    startRecording: startRecordingCaller,
    stopRecording: stopRecordingCaller,
    pauseRecording: pauseRecordingCaller,
    mediaBlobUrl: mediaBlobUrlCaller,
  } = useReactMediaRecorder({
    screen: true,
  });

  const { transcript, pauseRecording, startRecording, stopRecording } =
    useWhisper({
      apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY, // YOUR_OPEN_AI_TOKEN
      streaming: true,
      timeSlice: 1_000, // 1 second
      whisperConfig: {
        language: "en",
      },
      removeSilence: true,
    });

  const handleStartSession = () => {
    startRecordingCaller();
  };

  const handleEndSession = () => {
    setTranscriptedText(transcript.text || "");
    stopRecording();
    stopRecordingCaller();
  };

  const handlePauseSession = () => {
    pauseRecording();
    pauseRecordingCaller();
  };

  useEffect(() => {
    if (statusCaller === "recording") {
      startRecording();
    }
  }, [statusCaller, startRecording]);

  // useEffect(() => {
  //   if (transcript.text) {
  //     setTranscriptedText((text) => text + transcript.text);
  //   }
  // }, [transcript.text]);

  return (
    <div className="flex-col gap-2 flex h-full">
      <p className="text-xl font-semibold text-foreground tracking-tight">
        Status: {statusCaller}
      </p>
      <div className="flex flex-col items-center max-w-screen-xl">
        <video src={mediaBlobUrlCaller} controls />
      </div>
      <div className="flex items-center gap-4 w-full justify-center ">
        {(statusCaller === "idle" || statusCaller === "paused") && (
          <button
            onClick={handleStartSession}
            className="px-2 py-1 border rounded-md bg-blue-800 text-white"
          >
            Start Recording
          </button>
        )}
        {statusCaller === "recording" && (
          <>
            <button
              onClick={handlePauseSession}
              className="px-2 py-1 border rounded-md bg-yellow-800 text-white"
            >
              Pause Recording
            </button>
            <button
              onClick={handleEndSession}
              className="px-2 py-1 border rounded-md bg-red-800 text-white"
            >
              Stop Recording
            </button>
          </>
        )}
        {statusCaller === "stopped" && (
          <button className="px-2 py-1 border rounded-md bg-green-800 text-white">
            Analyze Session
          </button>
        )}
      </div>

      {transcript.text && (
        <div className="h-96 overflow-auto">
          <h2>Transcribed Text: </h2>
          <p>{transcript.text}</p>
        </div>
      )}
      {transcriptedText && (
        <div className="h-96 overflow-auto">
          <h2>Transcripted Text: </h2>
          <p>{transcriptedText}</p>
        </div>
      )}
    </div>
  );
}

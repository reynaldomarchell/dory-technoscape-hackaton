import Recorder from "@/components/recorder";

export default function CreateSession() {
  return (
    <div className="flex flex-col gap-4 w-full p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Create Session
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold text-muted-foreground tracking-tight">
        Create a new session with your customer
      </h4>
      <Recorder />
    </div>
  );
}

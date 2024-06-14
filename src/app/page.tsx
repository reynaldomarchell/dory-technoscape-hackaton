import { CalendarDemo } from "@/components/calendar";
import { Overview } from "@/components/overview";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CalendarCheck,
  CalendarClock,
  Presentation,
  Projector,
  SmileIcon,
} from "lucide-react";
import Link from "next/link";

interface Meeting {
  meeting_id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  attendees: { name: string; email: string }[];
  location: string;
  agenda: string[];
}

const meetings: Meeting[] = [
  {
    meeting_id: "001",
    title: "Project Kickoff",
    date: "2024-06-20",
    time: "10:00 AM",
    duration: "1 hour",
    attendees: [
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
      },
      {
        name: "Bob Smith",
        email: "bob.smith@example.com",
      },
    ],
    location: "Conference Room A",
    agenda: ["Introduction", "Project Overview", "Timeline Discussion", "Q&A"],
  },
  {
    meeting_id: "002",
    title: "Design Review",
    date: "2024-06-22",
    time: "2:00 PM",
    duration: "2 hours",
    attendees: [
      {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
      },
      {
        name: "Dana White",
        email: "dana.white@example.com",
      },
    ],
    location: "Conference Room B",
    agenda: ["Design Presentation", "Feedback Session", "Action Items"],
  },
  {
    meeting_id: "003",
    title: "Sprint Planning",
    date: "2024-06-25",
    time: "9:00 AM",
    duration: "1.5 hours",
    attendees: [
      {
        name: "Eve Adams",
        email: "eve.adams@example.com",
      },
      {
        name: "Frank Wright",
        email: "frank.wright@example.com",
      },
      {
        name: "Grace Lee",
        email: "grace.lee@example.com",
      },
    ],
    location: "Conference Room C",
    agenda: ["Review Backlog", "Sprint Goal Discussion", "Task Assignment"],
  },
  {
    meeting_id: "004",
    title: "Client Presentation",
    date: "2024-06-27",
    time: "11:00 AM",
    duration: "1 hour",
    attendees: [
      {
        name: "Henry Black",
        email: "henry.black@example.com",
      },
      {
        name: "Isabel Green",
        email: "isabel.green@example.com",
      },
      {
        name: "Jack White",
        email: "jack.white@example.com",
      },
      {
        name: "Client Representative",
        email: "client.rep@example.com",
      },
    ],
    location: "Conference Room D",
    agenda: ["Welcome", "Project Update", "Client Feedback", "Next Steps"],
  },
  {
    meeting_id: "005",
    title: "Team Retrospective",
    date: "2024-06-30",
    time: "3:00 PM",
    duration: "1 hour",
    attendees: [
      {
        name: "Karen Martinez",
        email: "karen.martinez@example.com",
      },
      {
        name: "Leo Brown",
        email: "leo.brown@example.com",
      },
      {
        name: "Maria Garcia",
        email: "maria.garcia@example.com",
      },
    ],
    location: "Conference Room E",
    agenda: [
      "What went well",
      "Challenges faced",
      "Action items for improvement",
    ],
  },
  {
    meeting_id: "006",
    title: "Budget Review",
    date: "2024-07-02",
    time: "1:00 PM",
    duration: "2 hours",
    attendees: [
      {
        name: "Nina Patel",
        email: "nina.patel@example.com",
      },
      {
        name: "Oscar Clark",
        email: "oscar.clark@example.com",
      },
      {
        name: "Paula Harris",
        email: "paula.harris@example.com",
      },
    ],
    location: "Conference Room F",
    agenda: [
      "Current Budget Overview",
      "Expenditure Analysis",
      "Future Budget Planning",
    ],
  },
];

export default function Home() {
  return (
    <div className="p-5 w-full flex flex-col gap-4 h-full">
      <div className="flex gap-4">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Aktivitas anda dalam 7 hari terakhir
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex gap-4 w-full">
              <Card className="w-full bg-background">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Sesi
                  </CardTitle>
                  <Presentation className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 Sesi</div>
                  <p className="text-xs text-red-400 text-muted-foreground">
                    -10.9% dari bulan lalu
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full bg-background">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Rata-rata sentimen
                  </CardTitle>
                  <SmileIcon className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">90% Positif</div>
                  <p className="text-xs text-green-400 text-muted-foreground">
                    +15.1% dari bulan lalu
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full bg-background">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Jadwal Terselesaikan
                  </CardTitle>
                  <CalendarCheck className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10 Jadwal Selesai</div>
                  <p className="text-xs text-green-400 text-muted-foreground">
                    +50,8% dari bulan lalu
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
            <CardDescription>Kegiatan anda yang akan datang</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold flex gap-2 items-center">
              <Projector />
              Meeting dengan Pak Boni
            </p>
            <p className="font-bold flex gap-2 items-center">
              <CalendarClock />
              08.00 AM - 09.00 AM
            </p>
          </CardContent>
          <CardFooter className="grow">
            <div className="h-full w-full bg-background rounded p-4">
              Persiapan pembelian ABCD
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="flex gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Prompt</CardTitle>
            <CardDescription>
              Jumlah prompt dalam seminggu terakhir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Buat jadwal kegiatan anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div>
                  <Label>Judul</Label>
                  <Input
                    className="mb-2"
                    placeholder="Meeting dengan Klien A"
                  />
                </div>
                <div>
                  <Label>Deskripsi</Label>
                  <Input className="mb-2" placeholder="Impor barang ABC" />
                </div>
                <div>
                  <Label>Pukul</Label>
                  <Input className="mb-2" placeholder="07:00" />
                </div>
                <Button>Tambahkan</Button>
              </div>
              <div className="flex justify-center items-center">
                <CalendarDemo />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Jadwal Anda</CardTitle>
          <CardDescription>
            Menampilkan semua jadwal anda yang akan datang
          </CardDescription>
        </CardHeader>
        <CardContent>
          {meetings.map((meeting) => (
            <CardMeeting key={meeting.meeting_id} meeting={meeting} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function CardMeeting({ meeting }: { meeting: Meeting }) {
  return (
    <Card className="mb-4 bg-background">
      <CardHeader>
        <CardTitle>{meeting.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-4">
        <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Meeting ID
          </div>
          <div>{meeting.meeting_id}</div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Date
          </div>
          <div>{meeting.date}</div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Time
          </div>
          <div>{meeting.time}</div>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Duration
          </div>
          <div>{meeting.duration}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Attendees
          </div>
          <div className="flex flex-wrap gap-2">
            {meeting.attendees.map((attendee, index) => (
              <Avatar key={index} className="w-8 h-8 border">
                <AvatarFallback>
                  {attendee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Location
          </div>
          <div>{meeting.location}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Agenda
          </div>
          <ul className="list-disc pl-6 space-y-2">
            {meeting.agenda.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <Link href="https://zoom.com" target="_blank">
          <Button>Join Meeting</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

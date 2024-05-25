import { differenceInCalendarDays, format } from "date-fns";
export default function BookingDates({ booking, className }) {
  return (
    <div className={"flex gap-1 items-center " + className}>
      {/* clock icon */}
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M16 14h1.5v2.82l2.44 1.41-.75 1.3L16 17.69V14m1-2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0-2a7 7 0 017 7 7 7 0 01-7 7c-2.79 0-5.2-1.64-6.33-4H1v-3c0-2.66 5.33-4 8-4 .6 0 1.34.07 2.12.2A6.992 6.992 0 0117 10m-7 7c0-.7.1-1.38.29-2-.42-.07-.86-.1-1.29-.1-2.97 0-6.1 1.46-6.1 2.1v1.1h7.19A6.71 6.71 0 0110 17M9 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 1.9A2.1 2.1 0 006.9 8 2.1 2.1 0 009 10.1 2.1 2.1 0 0011.1 8 2.1 2.1 0 009 5.9z" />
      </svg>
      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )}{" "}
      nights:
      {/* calendar dates */}
      <div className="flex gap-1 items-center ml-2">
        {/* calendar icon */}
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M96 80 H416 A48 48 0 0 1 464 128 V416 A48 48 0 0 1 416 464 H96 A48 48 0 0 1 48 416 V128 A48 48 0 0 1 96 80 z"
          />
          <path d="M320 232 A24 24 0 0 1 296 256 A24 24 0 0 1 272 232 A24 24 0 0 1 320 232 z" />
          <path d="M400 232 A24 24 0 0 1 376 256 A24 24 0 0 1 352 232 A24 24 0 0 1 400 232 z" />
          <path d="M320 312 A24 24 0 0 1 296 336 A24 24 0 0 1 272 312 A24 24 0 0 1 320 312 z" />
          <path d="M400 312 A24 24 0 0 1 376 336 A24 24 0 0 1 352 312 A24 24 0 0 1 400 312 z" />
          <path d="M160 312 A24 24 0 0 1 136 336 A24 24 0 0 1 112 312 A24 24 0 0 1 160 312 z" />
          <path d="M240 312 A24 24 0 0 1 216 336 A24 24 0 0 1 192 312 A24 24 0 0 1 240 312 z" />
          <path d="M160 392 A24 24 0 0 1 136 416 A24 24 0 0 1 112 392 A24 24 0 0 1 160 392 z" />
          <path d="M240 392 A24 24 0 0 1 216 416 A24 24 0 0 1 192 392 A24 24 0 0 1 240 392 z" />
          <path d="M320 392 A24 24 0 0 1 296 416 A24 24 0 0 1 272 392 A24 24 0 0 1 320 392 z" />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M128 48v32M384 48v32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M464 160H48"
          />
        </svg>
        {format(new Date(booking.checkIn), "yyyy-MM-dd")}
      </div>
      {/* arrow icon */}
      <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
        />
      </svg>
      <div className="flex gap-1 items-center">
        {/* calendar icon */}
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M96 80 H416 A48 48 0 0 1 464 128 V416 A48 48 0 0 1 416 464 H96 A48 48 0 0 1 48 416 V128 A48 48 0 0 1 96 80 z"
          />
          <path d="M320 232 A24 24 0 0 1 296 256 A24 24 0 0 1 272 232 A24 24 0 0 1 320 232 z" />
          <path d="M400 232 A24 24 0 0 1 376 256 A24 24 0 0 1 352 232 A24 24 0 0 1 400 232 z" />
          <path d="M320 312 A24 24 0 0 1 296 336 A24 24 0 0 1 272 312 A24 24 0 0 1 320 312 z" />
          <path d="M400 312 A24 24 0 0 1 376 336 A24 24 0 0 1 352 312 A24 24 0 0 1 400 312 z" />
          <path d="M160 312 A24 24 0 0 1 136 336 A24 24 0 0 1 112 312 A24 24 0 0 1 160 312 z" />
          <path d="M240 312 A24 24 0 0 1 216 336 A24 24 0 0 1 192 312 A24 24 0 0 1 240 312 z" />
          <path d="M160 392 A24 24 0 0 1 136 416 A24 24 0 0 1 112 392 A24 24 0 0 1 160 392 z" />
          <path d="M240 392 A24 24 0 0 1 216 416 A24 24 0 0 1 192 392 A24 24 0 0 1 240 392 z" />
          <path d="M320 392 A24 24 0 0 1 296 416 A24 24 0 0 1 272 392 A24 24 0 0 1 320 392 z" />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M128 48v32M384 48v32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M464 160H48"
          />
        </svg>
        {format(new Date(booking.checkOut), "yyyy-MM-dd")}
      </div>
    </div>
  );
}

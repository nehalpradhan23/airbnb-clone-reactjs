import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";

import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

export default function BookingsPage() {
  const [bookings, setBookings] = useState("");
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="">
      <AccountNav />
      <div className="">
        {bookings?.length > 0 ? (
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
            >
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>

                <div className="text-xl">
                  <BookingDates
                    booking={booking}
                    className={"mb-2 mt-2 text-lg text-gray-500"}
                  />
                  <div className="flex gap-1 items-center">
                    {/* price icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <span className="text-xl">Total price${booking.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-4xl text-center mt-20">No bookings!</div>
        )}
      </div>
    </div>
  );
}

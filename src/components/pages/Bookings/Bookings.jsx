import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingCard from "../../shared/BookingCard/BookingCard";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/booking?email=${user.email}`;

    
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, []);

    console.log(booking);


    return (
        <div>
            {
                booking.map(book => <BookingCard
                key={book._id}
                book={book}
                ></BookingCard>)
            }
        </div>
    );
};

export default Bookings;
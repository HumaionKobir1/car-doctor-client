import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingCard from "../../shared/BookingCard/BookingCard";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, []);

    
    
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                  // ekhane amra sweet alart dibo;
                  alert('Deleted successful')
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBooking(remaining);
              }
          })
        }  
      }


    return (
        <div>
            {
                bookings.map(book => <BookingCard
                key={book._id}
                book={book}
                handleDelete={handleDelete}
                ></BookingCard>)
            }
        </div>
    );
};

export default Bookings;
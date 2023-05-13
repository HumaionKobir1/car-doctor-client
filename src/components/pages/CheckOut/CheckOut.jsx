import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const {title, _id,  img, price} = service;


    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;
        const phon = form.phon.value;
        const booking = {
          customerName : name,
          email,
          date,
          message,
          phon,
          service: title,
          service_id: _id,
          price: price,
          img
          

        }
        console.log(booking)  

        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(booking)
        })

        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            alert('service book successfully')
          }
        });
    }

    return (
        <div>
            
        <form className="bg-gray-100 rounded-lg shadow-lg md:px-24 p-6 w-full md:w-5/6 mx-auto px-3 md:mt-14 mt-8 mb-12" onSubmit={handleBookService}>
            <h3 className='text-2xl text-orange-400 font-serif text-center'>Get in Touch Now</h3>
            <h1 className='text-center text-5xl font-bold'>{title}</h1>

          <div className='md:grid md:grid-cols-2 justify-center gap-5 mb-3 md:mt-16 mt-10'>
            <div className="mb-5">

              <input
                className="shadow appearance-none border rounded py-3 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="your name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="mb-5">

              <input
                className="shadow appearance-none border rounded py-3 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="your email"
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className='md:grid md:grid-cols-2 justify-center gap-5 mb-3'>
            <div className="mb-5">

              <input
                className="shadow appearance-none border rounded py-3 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                placeholder="Enter the subject of your message"
              />
            </div>
            <div className="mb-5">

              <input
                className="shadow appearance-none border rounded py-3 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNum"
                type="tel"
                name="phon"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="text-gray-600 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-16 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="w-48 mx-auto">
            <button
              className="bg-[#FF3811] hover:bg-[#ff5837] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Order Confirm
            </button>
          </div>
        </form>
        </div>
    );
};

export default CheckOut;
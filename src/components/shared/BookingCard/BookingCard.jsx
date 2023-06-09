
const BookingCard = ({book, handleDelete, handleBookingConfirm}) => {
    const {service, img, date, _id, email, status} = book;

        
    return (
        <div className="md:flex md:w-5/6 px-3 my-10 mx-auto justify-center md:justify-between items-center w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex gap-3">
                <div className="grid items-center justify-center">
                    <button onClick={() => handleDelete(_id)} className="bg-slate-900 rounded-[100%] text-white px-3 py-1 mr-3">x</button>
                </div>
                <div className="py-2">
                    <img className="w-36 h-36 rounded-lg" src={img} alt="" />
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl font-bold text-gray-800">{service
    }</h1>
                    <p className="mt-2 text-sm text-gray-600">Color: Red</p>
                    <p className="mt-2 text-sm text-gray-600">Size: Medium</p>
                </div>
            </div>

            <div>
                <p className="text-lg font-semibold">{email}</p>
            </div>

            <div>
                <p className="mt-2 text-lg font-semibold ">Date: {date}</p>
            </div>

            <div className="grid justify-center items-center">
            { status === 'confirm' ? 
            
             <span className="border-green-700 text-[#29B170] border none px-5 py-3 rounded-md ">Approved</span>
            
            :
            
            <button onClick={()=> handleBookingConfirm(_id)} className="bg-[#FF3811] text-white px-5 py-3 rounded-md border-none">Please Confirm</button>
            
            }
            </div>
        </div>
    );
};

export default BookingCard;
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className=" shadow-md rounded-md overflow-hidden p-4">
        <img src={img} alt="Placeholder" className="w-full h-44 object-cover rounded-lg" />
            <div className="">
                <h3 className="text-xl font-medium mt-2">{title}</h3>
                <div className="flex items-center justify-between mb-4">
                <span className="text-base font-medium text text-[#FF3811]">Price: ${price}</span>
                <Link to={`/checkout/${_id}`} >
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF3811] hover:bg-gray-300 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.293 5.293a1 1 0 011.414 0L12 9.586V7a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 110-2h2.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
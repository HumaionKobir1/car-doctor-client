import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] =useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(()=> {
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    } , [asc, search]);

    const handleSearch = () => {
        setSearch (searchRef.current.value);
        console.log(searchRef.current.value)
    }

    return (
        <div className="mt-10  w-full md:w-5/6 mx-auto px-3">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
                <h2 className="text-5xl mt-2 mb-2">Our Services Area</h2>
                <p>The majority have suffered alteration in some form, gy injected humour, or randomised <br /> words which do not look even slightly believable.</p>
                
                <div data-aos="fade-left" className="mx-auto flex justify-center mb-4">
                
                <div className="flex gap-0 mt-4">
                    <input
                        type="text"
                        ref={searchRef}
                        className="w-64 bg-slate-100 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                        name="search"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2 focus:outline-none hover:bg-blue-600"
                    >
                        Search
                    </button>
                </div>
            </div>
            <button
                    className="btn bg-[#FF3811] border-none mt-5"
                    onClick={()=> setAsc(!asc)}
                >{asc ? 'Price High to Low' : 'Price Low to High'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mt-5">
                {            
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
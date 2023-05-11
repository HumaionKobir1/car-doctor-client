import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className='px-3'>
            <div className="carousel w-full md:w-5/6 mx-auto h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full' src={img1} />
                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide6" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide2" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                
                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide3" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                
                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide4" className="btn bg-[#FF3811] btn-circle mr-5">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />

                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide5" className="btn bg-[#FF3811] btn-circle mr-5">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />

                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide6" className="btn bg-[#FF3811] btn-circle mr-5">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />

                <div className="absolute flex h-full items-center md:pl-16 pl-6 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 w-1/3 bg-'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className=' bg-[#FF3811] text-white px-4 py-3 rounded-md border-none'>Discover More</button>
                            <button className='btn btn-outline  rounded-md ml-4 border-white border-2 text-white font-semibold lowercase'>Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide5" className="btn bg-[#FF3811] btn-circle mr-5">❮</a> 
                <a href="#slide1" className="btn bg-[#FF3811] btn-circle mr-5">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;
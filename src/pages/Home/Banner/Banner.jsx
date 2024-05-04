import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide5" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide6" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl pl-9 pt-32 flex  gap-3 bg-gradient-to-r from-[#020024] ">
                    <div className="text-[#fff] space-y-5 w-1/2">
                        <p className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </p>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-2">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-outline btn-warning">
                                Warning
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="border-2 p-3 rounded-xl">
            <img className="rounded-xl h-[280px] mb-2" src={img} alt="" />
            <p className="text-[20px] font-bold">{title}</p>
            <div className="font-bold flex justify-between items-center mt-2 text-orange-600">
                <p>Price : ${price}</p>
                <Link to={`/checkOut/${_id}`}>
                <FaArrowRight className="cursor-pointer" />
                </Link>
            </div>
        </div>
    );
};

export default Service;

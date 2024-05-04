import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    const url = "services.json";

    const loadServicesData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setServices(data);
    };

    useEffect(() => {
        loadServicesData();
    }, []);

    return (
        <div className="my-10">
            <div className="space-y-1 text-center">
                <p className="text-[20px] font-bold text-orange-600">Services</p>
                <p className="text-[35px] font-bold">Our Service Area</p>
                <p>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words <br /> which dont look even
                    slightly believable.
                </p>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;

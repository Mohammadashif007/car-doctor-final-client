import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:3000/bookedService?email=${user?.email}`)
        //     .then((res) => res.json())
        //     .then((data) => setBooking(data));
        axios
            .get(`http://localhost:3000/bookedService?email=${user?.email}`, {
                withCredentials: true,
            })
            .then((res) => setBooking(res.data));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookedService/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = booking.filter(
                                (x) => x._id !== id
                            );
                            setBooking(remaining);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    const handleUpdate = (id) => {
        fetch(`http://localhost:3000/bookingService/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "confirm" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter((x) => x._id !== id);
                    const updated = booking.find((x) => x._id === id);
                    updated.status = "confirmed";
                    const newBookings = [updated, ...remaining];
                    setBooking(newBookings);
                    Swal.fire({
                        icon: "success",
                        title: "Update successful",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div>
            <h1>My bookings</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {booking.map((x) => (
                            <tr key={x._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={x.img}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{x.service_title}</td>
                                <td>{x.price}</td>
                                <th>
                                    {x.status === "confirmed" ? (
                                        <button
                                            onClick={() => handleUpdate(x._id)}
                                            className="btn btn-warning text-white"
                                        >
                                            Update
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleUpdate(x._id)}
                                            className="btn btn-success text-white"
                                        >
                                            Update
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleDelete(x._id)}
                                        className="btn btn-info text-white"
                                    >
                                        delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;

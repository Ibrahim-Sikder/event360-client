import { FaTrashAlt, FaEdit, FaFileInvoice } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaUserGear } from "react-icons/fa6"
import { TextField } from "@mui/material"
import { BellOff } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"
import { Key } from "react"
import { getRecentEvent } from "../../../api/admin/recentEvent/recent.event.api"

const RecentEventList = () => {
  type TEvent = {
    _id: Key | null | undefined
    id: Key | null | undefined
    name: string | number | boolean
    image: string | undefined
    eventItem: string
    description: string
  }

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: getRecentEvent,
  })

  const handleDelete = (id: unknown) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://event-360-liart.vercel.app/recent-events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch()
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Event has been deleted.", "success")
            }
          })
      }
    })
  }

  console.log(data, isLoading, isError)
  if (isLoading) {
    return <p>Loading......</p>
  }
  if (isError) {
    return <p>somethin went to wrong</p>
  }

  return (
    <div className="mt-5 mb-24 w-full">
      <div className="flex justify-between border-b-2 pb-3 px-3">
        <div className="flex items-center mr-[80px]  justify-center topProductBtn">
          <Link to="/admin/add-service">
            <button>Add Service </button>
          </Link>
          <Link to="/admin">
            <button>Upcoming Event </button>
          </Link>
        </div>
        <div className="flex  justify-end items-end">
          <BellOff size={30} className="mr-2" />
          <FaUserGear size={30} />
        </div>
      </div>
      <div className="flex items-center justify-between my-3 mb-8">
        <div className="flex items-center justify-center ">
          <FaFileInvoice size="50" className="text-[#01DAF8]" />
          <div className="ml-2">
            <h3 className="text-2xl font-bold"> Event </h3>
            <span>Recent Event </span>
          </div>
        </div>
        <div className="eventHome">
          <span>Home / </span>
          <span>Event / </span>
          <span>Recent Event </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 bg-[#F1F3F6] py-5 px-3">
        <h3 className="text-3xl font-bold mb-3">All Recent Event </h3>
        <div className="flex items-center ">
          <TextField className="eventField" label="Search...." />

          <button className="bg-[#01DAF8] text-white px-5 py-4 rounded-sm ">
            Search{" "}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table px-10">
          <thead className="tableWrap">
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Event Name </th>
              <th>Event Item </th>
              <th>Descriptioin </th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: TEvent, i: number) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <img
                      className=" h-full w-full object-cover text-center"
                      alt="img"
                      src={item.image}
                    />
                  </div>
                </td>
                <td>{item.name} </td>
                <td>{item.eventItem}</td>
                <td>{item.description}</td>
                <td>
                  <div className="editIconWrap edit2">
                    <Link to={`/admin/update-recent-event/${item._id}`}>
                      <FaEdit className="editIcon" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="editIconWrap">
                    <FaTrashAlt
                      onClick={() => handleDelete(item._id)}
                      className="deleteIcon"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentEventList

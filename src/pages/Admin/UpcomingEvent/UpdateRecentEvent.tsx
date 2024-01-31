import TextField from "@mui/material/TextField"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"
import { FieldValues, useForm } from "react-hook-form"

const UpdateRecentEvent = () => {
  type TData = {
    _id: string
    name: string
    recentEventName: string
    image: string
    description: string
  }
  const events = useLoaderData()
  const { _id, name, recentEventName, description } = events as TData

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: FieldValues) => {
    const name = data.name
    const recentEventName = data.recentEventName
    const image = data.image
    const description = data.description
    const updatedServices = {
      name,
      recentEventName,
      image,
      description,
    }
    fetch(`https://event-360-liart.vercel.app/recent-events/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Event Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
  }

  return (
    <section>
      <div className=" addEventWraps">
        <div className="flex items-center mr-[80px]  justify-end topProductBtn">
          <Link to="/admin/add-service">
            <button>Add Services </button>
          </Link>
          <Link to="/admin/add-event">
            <button>Upcoming Event </button>
          </Link>
        </div>
        <div className="eventHeadWrap">
          <div className="flex items-center justify-center ">
            <div className="ml-2">
              <span>Update Recent Event </span>
            </div>
          </div>
        </div>
        <div className="my-3 flex justify-end mr-[80px] ">
          <Link to="/admin/recent-event-list">
            <div className="manageEvent">
              <FormatListNumberedIcon className="listIcon" />
              <h2>Recent Event </h2>
            </div>
          </Link>
        </div>
        <div className="addEventWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="eventFieldWrap">
              <TextField
                {...register("name")}
                name="name"
                className="eventField"
                fullWidth
                label={name}
              />
              <TextField
                {...register("recentEventName")}
                name="recentEventName"
                className="eventField"
                fullWidth
                label={recentEventName}
              />
            </div>
            <div className="mt-3">
              <TextField
                {...register("image")}
                name="image"
                type="file"
                fullWidth
                className="eventField2"
              />
            </div>
            <div className=" mt-3">
              <label className="block"> Event Details </label>
              <textarea
                {...register("description")}
                name="description"
                className="eventDetailWrap"
                defaultValue={description}
              />
            </div>
            <div className="savebtn mt-2">
              <button type="submit">Update Event </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateRecentEvent

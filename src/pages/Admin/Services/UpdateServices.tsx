import TextField from "@mui/material/TextField"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"
import { FieldValues, useForm } from "react-hook-form"

const UpdateServices = () => {
  type TServices = {
    _id: string
    name: string
    eventItem: string
    description: string
  }
  const services = useLoaderData()
  const { _id, name, eventItem, description } = services as TServices

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: FieldValues) => {
    const name = data.name
    const eventItem = data.eventItem
    const image = data.image
    const description = data.description
    const updatedServices = {
      name,
      eventItem,
      image,
      description,
    }
    fetch(`http://localhost:5000/services/${_id}`, {
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
            text: "Services Updated Successfully",
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
          <Link to="/dashboard/addjob">
            <button> Update Event </button>
          </Link>
          <Link to="/dashboard/qutation">
            <button>Upcoming Event </button>
          </Link>
        </div>
        <div className="eventHeadWrap">
          <div className="flex items-center justify-center ">
            <div className="ml-2">
              <span>Add New Event </span>
            </div>
          </div>
        </div>
        <div className="my-3 flex justify-end mr-[80px] ">
          <Link to="/dashboard/product">
            <div className="manageEvent">
              <FormatListNumberedIcon className="listIcon" />
              <h2>Event List </h2>
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
                label={eventItem}
              />
              <TextField
                {...register("eventItem")}
                name="eventItem"
                className="eventField"
                fullWidth
                label={name}
                defaultValue={name}
              />
            </div>
            <div>
              <input
                {...register("image")}
                name="image"
                placeholder="Products Descripton "
                type="file"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className=" mt-8">
              <label className="block"> Event Details </label>
              <textarea
                {...register("description")}
                name="description"
                className="eventDetailWrap"
                placeholder={description}
              />
            </div>
            <div className="savebtn mt-2">
              <button type="submit">Add Event </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateServices

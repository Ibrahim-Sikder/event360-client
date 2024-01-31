import TextField from "@mui/material/TextField"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import { Link } from "react-router-dom"
import { FieldValues, useForm } from "react-hook-form"
import Swal from "sweetalert2"

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddRecentEvent = () => {
  const { register, handleSubmit, reset } = useForm()
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData()
    formData.append("image", data.image[0])

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.url
        const { name, description, recentEventName } = data
        const newEvents = {
          name,
          image: imageUrl,
          recentEventName,
          description,
        }
        console.log(newEvents)
        fetch("https://event-360-liart.vercel.app/recent-events", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newEvents),
        })
          .then((res) => res.json())
          .then((data) => {
            reset()
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Service added Successfully !",
                showConfirmButton: false,
                timer: 1500,
              })
            }
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section>
      <div className=" addEventWraps">
        <div className="flex items-center mr-[80px]  justify-end topProductBtn">
          <Link to="/admin/add-service">
            <button> Add Service </button>
          </Link>
          <Link to="/admin/add-event">
            <button>Add Event </button>
          </Link>
        </div>
        <div className="eventHeadWrap">
          <div className="flex items-center justify-center ">
            <div className="ml-2">
              <span>Add New Recent Event </span>
            </div>
          </div>
        </div>
        <div className="my-3 flex justify-end mr-[80px] ">
          <Link to="/dashboard/product">
            <div className="manageEvent">
              <FormatListNumberedIcon className="listIcon" />
              <h2> Recent Event </h2>
            </div>
          </Link>
        </div>
        <div className="addEventWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="eventFieldWrap">
              <TextField
                {...register("name", { required: true })}
                name="name"
                className="eventField"
                fullWidth
                label="Name"
              />
              <TextField
                {...register("recentEventName", { required: true })}
                name="recentEventName"
                className="eventField"
                fullWidth
                label="Recent Event "
              />
            </div>
            <div className="mt-3">
              <TextField
                {...register("image", { required: true })}
                name="image"
                type="file"
                fullWidth
              />
            </div>
            <div className=" mt-3">
              <label className="block">Recent Event Details </label>
              <textarea
                {...register("description", { required: true })}
                name="description"
                placeholder="Recent Event Details "
                className="eventDetailWrap"
              />
            </div>
            <div className="savebtn mt-2">
              <button type="submit">Add Recent Event </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddRecentEvent

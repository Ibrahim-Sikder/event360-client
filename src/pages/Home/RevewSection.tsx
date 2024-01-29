import Container from "../../ui/Container"
import user from "../../assets/images/user.png"
const RevewSection = () => {
  const userData = [
    {
      id: 1,
      name: "Hellen Jummy",
      title: "Financial Counselor",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      img: user,
    },
    {
      id: 1,
      name: "Hellen Jummy",
      title: "Financial Counselor",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      img: user,
    },
    {
      id: 1,
      name: "Hellen Jummy",
      title: "Financial Counselor",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      img: user,
    },
  ]
  return (
    <div className="bg-[#0F172A] py-20 text-white ">
      <Container className=" ">
        <div>
          <h3 className="text-4xl font-bold">What everyone says</h3>
        </div>
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-12">
          {userData.map((user) => (
            <div
              data-aos="flip-left"
              key={user.id}
              className="w-full lg:w-[300px] xl:w-[400px] h-[305px] bg-[#070A12] p-8 rounded-md "
            >
              <p className="leading-3ding max-w-[40ch]">{user.review}</p>
              <div className="flex mt-8">
                <img src={user.img} alt="user" />
                <div className="ml-4">
                  <h6>{user.name} </h6>
                  <span>{user.title} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default RevewSection

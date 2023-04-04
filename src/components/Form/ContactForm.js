import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      console.log(
        "REACT_APP_SERVICE_ID =",
        process.env.serviceId,
        "REACT_APP_TEMPLATE_ID =",
        process.env.templateId,
        templateParams,
        "REACT_APP_USER_ID =",
        process.env.userId
      );
      await emailjs.send(
        process.env.serviceId,
        process.env.templateId,
        templateParams,
        process.env.userId
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-[600px] border rounded-lg border-solid border-black shadow-[0_2px_10px_rgba(124,124,124,0.6)] overflow-hidden  p-2 flex flex-col justify-center items-center sm:w-full">
        <form
          className="w-full p-10 flex-1 flex flex-col justify-center items-center sm:p-0"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="h-1/2 my-10 flex flex-col flex-1 w-full relative">
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Il faut indiquer votre nom",
                },
                maxLength: {
                  value: 30,
                  message:
                    "La valeur du champs ne doit pas dépasser 30 caractères",
                },
              })}
              className="focus:border-4 focus:border-black focus:mb-4 focus:block focus:w-full focus:p-4 focus:rounded focus:outline-none focus:text-base border-2 border border-black mb-4 block w-full p-4 rounded duration-150 ease outline-none text-base"
              placeholder="Nom"
            />

            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>

          <div className="h-1/2 my-10 flex flex-col flex-1 w-full">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="focus:border-4 focus:border-black focus:mb-4 focus:block focus:w-full focus:p-4 focus:rounded focus:outline-none focus:text-base border-2 border border-black mb-4 block w-full p-4 rounded duration-150 ease outline-none text-base"
              placeholder="Email"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Indiquez une adresse email valide
              </span>
            )}
          </div>

          <div className="h-1/2 my-10 flex flex-col flex-1 w-full relative">
            <textarea
              name="message"
              {...register("message", {
                required: true,
              })}
              className="h-32 w-full mb-4 block focus:border-black focus:border-4  p-4 rounded transition duration-150 ease outline-none text-base focus:text-base border-2 border-black"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">
                Il faut indiquer un message !
              </span>
            )}
          </div>
          <input
            type="submit"
            className="block w-full bg-[#000] border-none rounded p-4 text-base text-white font-semibold hover:cursor-pointer"
          />
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

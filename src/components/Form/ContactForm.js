import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { EmailIcon, PhoneIcon } from "../Icons";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast.info("Formulaire bien envoyé !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
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
      <div className="w-full flex justify-evenly lg:block">
        <div className="w-1/3 place-items: center flex flex-col h-full justify-center items-start lg:h-auto lg:justify-center lg:w-auto lg:mx-auto lg:w-1/2 lg:items-center lg:mb-6 md:mb-0">
          <h2 className="my-10 text-lg font-bold uppercase text-light lg:my-4 sm:text-base sm:font-medium">
            Coordonnées
          </h2>
          <div className="3xl:!text-2xl 2xl:!text-xl sm:!text-base  md:font-medium">
            <div className="flex items-center my-10 md:my-6 lg:my-4">
              <>
                <PhoneIcon /> <span className="ml-4">0615218101</span>
              </>{" "}
            </div>
          </div>

          <div className="my-10 3xl:!text-2xl 2xl:!text-xl sm:!text-base lg:my-4 md:font-medium">
            <div className="flex items-center ">
              <>
                <EmailIcon />{" "}
                <span className="ml-4">enault.mathieu2@gmail.com</span>
              </>{" "}
            </div>
          </div>
        </div>

        <div className="w-[500px] border rounded-lg border-solid border-black shadow-[0_2px_10px_rgba(124,124,124,0.6)] overflow-hidden flex flex-col justify-center items-center lg:mx-auto sm:w-full">
          <form
            className="w-full p-4 flex-1 flex flex-col  items-center sm:p-2"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="h-28 flex flex-col flex-1 w-full relative">
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
                className="focus:border-2 focus:border-black focus:block focus:w-full focus:p-4 focus:rounded focus:outline-none focus:text-base border border-black block w-full p-4 rounded duration-150 ease outline-none text-base"
                placeholder="Nom"
              />

              {errors.name ? (
                <span className="text-red-700 font-semibold">
                  {errors.name.message}
                </span>
              ) : (
                <span className="h-6"></span>
              )}
            </div>

            <div className=" flex flex-col flex-1 w-full">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="focus:border-2 focus:block focus:w-full focus:p-4 focus:rounded focus:outline-none focus:text-base border  border-black mb-4 block w-full p-4 rounded duration-150 ease outline-none text-base"
                placeholder="Email"
              ></input>
              {errors.email ? (
                <span className="text-red-700 font-semibold">
                  Indiquez une adresse email valide
                </span>
              ) : (
                <span className="h-6"></span>
              )}
            </div>

            <div className="h-1/2 flex flex-col flex-1 w-full relative">
              <textarea
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="h-32 w-full  block focus:border-2 p-4 rounded transition duration-150 ease outline-none text-base focus:text-base border border-black"
                placeholder="Message"
              ></textarea>
              {errors.message ? (
                <span className="text-red-700 font-semibold h-6">
                  Il faut indiquer un message
                </span>
              ) : (
                <span className="h-6"></span>
              )}
            </div>
            <input
              type="submit"
              className="block w-full bg-[#000] border-none rounded p-4 text-base text-white font-semibold hover:cursor-pointer"
            />
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

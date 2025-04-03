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
    toast.info("Merci d'avoir pris le temps de compléter le formulaire, je vous recontacte au plus vite 😊", {
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

  const toastifyError = (message) => {
    toast.info(message, {
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
    const { firstName, lastName, email, tel, message } = data;
    try {
      const templateParams = {
        firstName,
        lastName,
        email,
        tel,
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
      e.message ?
        toastifyError(e.message) : toastifyError("😢 une erreur est survenue lors de l'envoi du formulaire")
    }
  };

  function getFormErrors() {
    const errorMessages = Object.values(errors)
      .filter(error => error?.message)
      .map(error => error.message)
      .join(", ");

    return `Il est nécessaire de renseigner ce(s) champ(s): ${errorMessages}`;
  }
  return (
    <>
      <div className="w-full flex justify-evenly  lg:flex lg:flex-col lg:items-center">
        <div className="w-1/3 place-items: center flex flex-col h-full justify-center items-start lg:h-auto lg:justify-center lg:w-auto lg:mx-auto lg:items-center lg:mb-6 md:mb-0">
          <h2 className="my-10 text-lg font-bold uppercase text-light lg:my-4 sm:text-base sm:font-medium">
            Coordonnées
          </h2>
          <div className="3xl:!text-xl 2xl:!text-l sm:!text-base  md:font-medium">
            <div className="flex items-center my-10 md:my-6 lg:my-4">
              <>
                <PhoneIcon className="xs:w-[16px] xs:h-[16px]" /> <span className="ml-4 font-bold xs:text-[14px]">0615218101</span>
              </>
            </div>
          </div>
          <div className="my-10 3xl:!text-xl 2xl:!text-l sm:!text-base lg:my-4 md:font-medium">
            <div className="flex items-center ">
              <>
                <EmailIcon className="xs:w-[16px] xs:h-[16px]" />
                <span className="ml-4 font-bold xs:text-[14px]">enault.mathieu2@gmail.com</span>
              </>
            </div>
          </div>
        </div>
        <section className="relative lg:w-[700px] md:flex lg:justify-center xs:mt-6 md:mt-6">
          <div className="project-card group relative h-[420px] w-[740px]  md:w-[500px] xs:w-[232px] bg-[#333]  duration-500 lg:h-[440px] lg:w-[700px] md:h-[460px] sm:h-[500px] xs:h-[440px]  ">
            <div className="overflow-hidden absolute inset-0 bg-black  before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:h-[120px] before:w-[1000px] before:bg-gradient-to-r before:from-transparent before:via-[#45f3ff]  before:to-transparent before:animate-spin after:content-[''] after:absolute after:inset-0.5 after:bg-[#292929] "></div>

          </div>
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[420px] lg:w-[640px] xs:w-[210px] ">
            <h2 className="font-bold text-white uppercase text-lg xs:text-center xs:mb-0 md:text-base xs:text-sm mb-0">
              me contacter<span className="inline-block bg-green w-40 h-1 ml-2"></span>
            </h2>
            <p className="text-sm text-white w-full max-w-[750px]  md:max-w-[400px] xs:max-w-[232px] xs:text-xs xs:text-center my-8">N'hésitez pas à me contacter si vous souhaitez en savoir plus sur mon parcours et mes compétences. Je serais ravi de discuter de toute opportunité qui correspondrait à mon profil.</p>
            <form onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-6 mb-3 xs:gap-2">
                <div className="w-1/2">
                  <input type="text" placeholder="Prénom" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none text-black xs:text-xs" name="firstName"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "prénom",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "La valeur du champs ne doit pas dépasser 30 caractères",
                      },
                    })}

                  />
                </div>
                <div className="w-1/2">
                  <input type="text" placeholder="Nom" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none text-black xs:text-xs" name="lastName"

                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "nom",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "La valeur du champs ne doit pas dépasser 30 caractères",
                      },
                    })} />
                </div>
              </div>
              <div className="flex gap-6 my-3 xs:gap-2">
                <div className="w-1/2">
                  <input type="email" placeholder="E-mail" name="email" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none xs:text-xs text-black"               {...register("email", {
                    required: {
                      value: true,
                      message: "e-mail",
                    },
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })} />
                </div>
                <div className="w-1/2">
                  <input type="tel" name="tel" placeholder="Téléphone" className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none text-black xs:text-xs" {...register("tel", {
                    required: false,
                  })} />
                </div>
              </div>
              <div className="my-3">
                <textarea
                  name="message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "message",
                    },
                  })}
                  className="h-22 w-full text-black  block focus:border-2 p-2 rounded transition duration-150 ease outline-none text-base focus:text-base border border-black xs:text-xs"
                  placeholder="Message"
                ></textarea>
                {Object.keys(errors).length > 0 ? (
                  <div className="text-red-700 font-semibold h-8 text-base xs:text-xs">
                    {getFormErrors()}
                  </div>
                ) : (
                  <div className="h-8"></div>
                )}
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Envoyer"
                  className="w-24 bg-[#000] border-none rounded p-2 text-base text-white font-semibold hover:cursor-pointer xs:p-1 xs:text-sm"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
}
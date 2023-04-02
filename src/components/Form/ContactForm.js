import Head from "next/head";
import { useState } from "react";
import TextArea from "./TextArea";
import TextInputs from "./TextInputs";

export default function ContactForm() {
  const [name, setName] = useState({
    name: "name",
    label: "Name",
    value: "",
    focus: false,
    type: "text",
  });
  const [email, setEmail] = useState({
    name: "email",
    label: "Email",
    value: "",
    focus: false,
    type: "email",
  });
  const [message, setMessage] = useState({
    name: "message",
    label: "Message",
    value: "",
    focus: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  const handleFocus = (e) => {
    const inputName = e.target.name;
    if (inputName === "name") {
      setName({ ...name, focus: true });
    } else if (inputName === "email") {
      setEmail({ ...email, focus: true });
    } else {
      setMessage({ ...message, focus: true });
    }
  };

  const handleBlur = (e) => {
    const inputName = e.target.name;
    if (inputName === "name") {
      setName({ ...name, focus: false });
    } else if (inputName === "email") {
      setEmail({ ...email, focus: false });
    } else {
      setMessage({ ...message, focus: false });
    }
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === "name") {
      setName({ ...name, value: inputValue });
    } else if (inputName === "email") {
      setEmail({ ...email, value: inputValue });
    } else {
      setMessage({ ...message, value: inputValue });
    }
  };

  return (
    <div className="w-[600px] border rounded-lg border-solid border-black shadow-[0_2px_10px_rgba(124,124,124,0.6)] overflow-hidden  p-2 flex flex-col justify-center items-center sm:w-full">
      <form className="w-full p-10 flex-1 flex flex-col justify-center items-center sm:p-0">
        <formGroup className="h-1/2 my-10 flex flex-col flex-1 w-full">
          <TextInputs
            {...name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </formGroup>

        <formGroup className="h-1/2 my-10 flex flex-col flex-1 w-full">
          <TextInputs
            {...email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </formGroup>

        <formGroup className="h-1/2 my-10 flex flex-col flex-1 w-full">
          <TextArea
            {...message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </formGroup>
        <input
          type="submit"
          className="block w-full bg-[#000] border-none rounded p-4 text-base text-white font-semibold hover:cursor-pointer"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}

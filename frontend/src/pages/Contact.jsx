import { Toaster, toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipients: email,
          subject: subject,
          message: message,
        }),
      });

      if (response.ok) {
        toast.success("correo enviado");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-white-100 py-10">
      <Toaster richColors />
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Contacto</h2>
        <form className="-mx-4 flex flex-wrap" onSubmit={handleSubmit}>
          <div className="mb-6 w-full px-4 md:w-1/2">
            <input
              type="text"
              placeholder="Nombre"
              onChange={(event) => setSubject(event.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6 w-full px-4 md:w-1/2">
            <input
              type="email"
              placeholder="Correo electrónico"
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6 w-full px-4">
            <textarea
              placeholder="Mensaje"
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              rows="5"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

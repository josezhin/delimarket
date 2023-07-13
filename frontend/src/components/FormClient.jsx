import { Toaster, toast } from "sonner";
import { useState } from "react";

const FormClient = ({ userId, onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    image: null,
    user: userId,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const promise = () =>
      new Promise((resolve, reject) => {
        const form = new FormData();
        for (const [key, value] of Object.entries(formData)) {
          form.append(key, value);
        }

        fetch("http://127.0.0.1:8000/api/product/", {
          method: "POST",
          body: form,
        })
          .then((response) => {
            if (response.ok) {
              resolve(response.json());
            } else {
              reject(response.statusText);
            }
          })
          .catch((error) => {
            console.log(error);
            reject("Connection Failed");
          });
      });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        onAddProduct(data);
        return `Product "${data.name}" created successfully!`;
      },
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="my-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <Toaster richColors expand={true} />
      <form
        className="space-y-4"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            ></select>
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Price
          </label>
          <div className="mt-2">
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image
          </label>
          <div className="mt-2">
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormClient;

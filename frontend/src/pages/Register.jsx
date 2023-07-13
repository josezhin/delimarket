import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    country: "",
    address: "",
    password: "",
  });
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/country/");
        if (response.ok) {
          const data = await response.json();
          setCountryList(data);
        } else {
          console.error("Error fetching country list:", response.status);
        }
      } catch (error) {
        console.error("Error fetching country list:", error);
      }
    };

    fetchCountryList();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleClick = () => {
    if (
      formData.username !== "" &&
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.cell !== "" &&
      formData.country !== "" &&
      formData.address !== "" &&
      formData.password !== ""
    ) {
      const promise = new Promise((resolve) => setTimeout(resolve, 2000));

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          // Mostrar toast de éxito y luego redireccionar
          toast.success("Form submitted successfully");
          console.log("inicio");
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 7000);
          console.log("fin");
        },
        error: "Error",
      });
    } else {
      toast.error("You have not completed the fields");
      const errorMessage = "Please, complete the following fields";
      // Muestra el mensaje de error como desees
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      ...formData,
      country: formData.country,
    };

    fetch("http://127.0.0.1:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Realizar acciones con la respuesta del servidor
        //Redireccionar a otra ruta
        handleClick();
      })
      .catch((error) => {
        // Manejar errores
      });
  };

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-4 text-2xl font-bold">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="mb-2 block">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="mb-2 block">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cell" className="mb-2 block">
            Cell:
          </label>
          <input
            type="text"
            id="cell"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="mb-2 block">
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          >
            <option value="">Select a country</option>
            {countryList.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <Toaster position="bottom-right" />
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

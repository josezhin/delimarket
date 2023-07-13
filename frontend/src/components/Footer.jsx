export const Footer = () => {
  return (
    <div className="container mx-0">
      <footer className="border-t py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="mb-3">
            <a href="/" className="flex items-center link-body-emphasis text-decoration-none mb-3">
              <svg className="" width="40" height="32">
                <use xlinkHref="" />
              </svg>
            </a>
            <p className="text-body-secondary">© 2023</p>
          </div>

          <div className="col-span-1 mb-3"></div>

          <div className="mb-3">
            <h5 className="mb-2">Redes Sociales</h5>
            <ul className="flex flex-col">
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <h5 className="mb-2">Más Información</h5>
            <ul className="flex flex-col">
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Servicio al Cliente
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Quejas y Sugerencias
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-body-secondary">
                  Sucursales
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex flex-col">
              <h5 className="mb-2">Section</h5>
              <ul className="flex flex-col">
                <li className="mb-2">
                  <a href="#" className="text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4">
              <form>
                <h5 className="mb-2">Suscríbete y estate pendiente de nuestras novedades...</h5>
                <p className="mb-4">Obtén avisos sobre nuestras promociones.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="newsletter1" className="sr-only">
                    Email address
                  </label>
                  <div className="relative flex-grow">
                    <input
                      id="newsletter1"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email address"
                    />
                    <button
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      type="button"
                    >
                      Suscribirse
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

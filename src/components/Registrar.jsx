import fondo from "../assets/fondo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import es from 'i18n-iso-countries/langs/es.json';
import 'flag-icons/css/flag-icons.min.css';


countries.registerLocale(es); // Cargar nombres en español

// Generar opciones de países con bandera
const countryOptions = Object.entries(countries.getNames("es", { select: "official" }))
  .map(([code, name]) => ({
    value: code,
    label: (
      <span className="flex items-center gap-2">
        <span className={`fi fi-${code.toLowerCase()}`} /> {name}
      </span>
    ),
  }))
  .sort((a, b) => {
    const nameA = a.label.props.children[1];
    const nameB = b.label.props.children[1];
    return nameA.localeCompare(nameB);
  });

export default function Registrar() {
  const [pais, setPais] = useState(null);
  const [telefono, setTelefono] = useState('');


  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-10 rounded-2xl w-full max-w-2xl text-white shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2">Codingshar</h2>
        <p className="text-center text-gray-300 mb-6">Regístrate</p>

        {/* Redes sociales */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
                      .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                      -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09
                      2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
                      2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
                      2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            Github
          </button>
        </div>

        <p className="text-sm text-center text-gray-400 mb-4">
          * Al ingresar aceptas los <span className="text-blue-400 cursor-pointer">Términos y condiciones</span>
        </p>

        {/* Formulario */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

          <input
            type="text"
            placeholder="Escribe tu nombre"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Escribe tu apellido"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="Escribe tu usurio"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400 "
          />


          <input
            type="email"
            placeholder="Escribe tu correo electrónico"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400 "
          />

          <input
            type="password"
            placeholder="Escribe tu contraseña"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md placeholder:text-gray-400"
          />

          {/* Select de país */}
          <div className="w-full">
            <Select
              options={countryOptions}
              value={pais}
              onChange={setPais}
              classNamePrefix="select"
              placeholder="Selecciona tu país"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: '#1f2937', // bg-gray-800
                  color: 'white',
                  borderRadius: '0.375rem',
                  padding: '0.375rem 1rem',
                  border: 'none',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: 'white',
                }),
                placeholder: (base) => ({
                  ...base,
                  color: '#9ca3af', // placeholder:text-gray-400
                }),
                input: (base) => ({
                  ...base,
                  color: 'white',
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '0.375rem',
                }),
              }}
            />
          </div>

          {/* Teléfono */}
          <div className="w-full min-w-">
            <PhoneInput
              country={pais?.value.toLowerCase()}
              value={telefono}
              onChange={setTelefono}
              containerClass="!h-[48px] !flex !items-center !rounded-md !bg-gray-800"
              buttonClass="!bg-gray-800 !border-none !h-full !rounded-l-md"
              inputClass="!w-full !bg-gray-800 !text-white !rounded-md px-4 py-3 !border-none placeholder:text-gray-400"
              dropdownClass="bg-white text-black rounded-md !text-black"
              placeholder="Número de celular"

            />
          </div>


        </form>


        {/* Aceptar términos */}
        <div className="flex items-center mt-4">
          <input id="terms" type="checkbox" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-300">
            Acepto los <span className="text-blue-400 cursor-pointer">Términos y condiciones</span>
          </label>
        </div>

        {/* Botón de registro */}
        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition">
          Regístrate ahora
        </button>

        {/* Ya tienes cuenta */}
        <p className="text-center text-sm text-gray-400 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-400 hover:underline cursor-pointer">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

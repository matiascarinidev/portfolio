import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactPage() {
  return (
    <div className="text-contrast">
      <h1 className="text-3xl md:text-4xl font-light">MATIAS CARINI</h1>
      <p className="text-xl md:text-2xl font-extralight mt-2">
        Full Stack Developer
      </p>

      <div className="mt-8 space-y-2">
        <p className="text-base md:text-lg">
          Estoy esperando saber de tu proyecto.
        </p>
        <p className="text-base md:text-lg">
          Hablemos sobre cómo podemos construir un sitio web que funcione para
          tu negocio.
        </p>
      </div>

      <address className="not-italic mt-8">
        <ul className="flex flex-col gap-5 text-base md:text-lg">
          <li className="flex items-center gap-3">
            <IoIosMail className="text-2xl md:text-3xl shrink-0 text-accent" />
            <div className="flex flex-wrap items-center gap-2">
              <code className="select-all bg-gray-800/50 px-2 py-1 rounded text-sm font-mono">
                matiascarinidev@gmail.com
              </code>
              <a
                href="mailto:matiascarinidev@gmail.com"
                className="text-accent text-sm hover:text-accent-dark transition-colors"
              >
                Enviar mail →
              </a>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-2xl md:text-3xl shrink-0 text-accent" />
            <a
              href="https://www.linkedin.com/in/matias-carini/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              linkedin.com/in/matias-carini
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
}

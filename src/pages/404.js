import React, { useEffect } from "react";
import { Link } from "gatsby";
import SubHeader from "../components/sub-header";
import "../styles/blog-styles.css"

export default function NotFoundPage({ lang }) {
  const isDefaultLang = lang === 'es'

  useEffect(() => {
    //navigate("/"); // redirecting to home page
  }, []);

  return (
    <>
      <div className="parallax p-4 bg-black text-white screenHeight">
        <div className="container my-4 mx-auto text-center justify-center">
          <h1>
            { isDefaultLang ? 'Página no Encontrada' : 'Not Found Page' }
          </h1>
        </div>
          <div className="mx-auto text-center justify-center">
          <button className="bg-transparent border border-white px-4 py-2 hover:bg-danger">
            <Link
              className="hover:text-danger text-decoration-none text-white" 
              href={`/`}>
                Go to Home
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
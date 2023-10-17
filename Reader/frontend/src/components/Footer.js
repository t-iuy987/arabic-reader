import React from "react";

export default function Footer()
{
    return(
        <footer className="footer bg-dark text-white">
            <div className="container-custom d-flex justify-content-between align-items-center py-3 border-highlight">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="#" className="me-2 text-muted text-decoration-none">
                        <i className="bi bi-book"></i>
                        <span> &copy; 2022 ArabicReader</span>
                    </a>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
                <li className="ms-3"><a href="#"className="text-muted"> <i className="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a href="#"className="text-muted"> <i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a href="#"className="text-muted"> <i className="bi bi-facebook"></i></a></li>
                </ul>

            </div>

        </footer>

    );
}
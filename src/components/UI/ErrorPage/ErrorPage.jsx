import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="errorpage-container">
            <h1 className="errorCode">404</h1>
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button className="home-button" onClick={handleGoHome}>
                Go Back Home
            </button>
        </div>
    );
};
export default ErrorPage;

import React from "react";
import "../styles/Reviews.css";
// import "./images/rectangle-25.png"

export const Reviews = () => {
    return (
        <div className="component">

            <div className="content-box">
                <div className="frame">
                    <div className="text-wrapper">Top Leading Company</div>
                </div>
                <div className="div-wrapper">
                    <p className="div">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div className="frame-2">
                    <p className="p">Fresh Ideas for your business design, Top digital marketing service company</p>
                </div>
                <div className="group">
                    <img className="ellipse" alt="Ellipse1" src="assets/images/ellipse-1.png" />
                    <p className="text-wrapper-2">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation.
                    </p>
                    <div className="text-wrapper-3">Guy Hawkins</div>
                </div>
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle1" src='/assets/images/rectangle-25.png' />
                    <img className="img" alt="Rectangle2" src="assets/images/rectangle-26.png" />
                </div>
                <div className="group-2">
                    <img className="ellipse" alt="Ellipse2" src="assets/images/ellipse-2.png" />
                    <p className="text-wrapper-4">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation.
                    </p>
                    <div className="text-wrapper-5">Darlene Robertson</div>
                </div>

            </div>

        </div>
    );
};

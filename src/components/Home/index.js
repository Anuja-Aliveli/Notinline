import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  heroSection = () => (
    <div className="hero-section">
      <div className="text-container">
        <p className="hero-head">
          Your health and well-being are our top priorities. Your Trusted Source
          for Top Doctors.
        </p>
        <p className="hero-para">
          We are dedicated to helping you find the best medical professionals in
          your area. Whether you're looking for a specialist, surgeon,
          pediatrician, or any other medical expert, we've got you covered. Our
          team of highly-rated doctors is committed to providing the highest
          quality of care for you and your loved ones.
        </p>
        <button type="button">Find Doctor</button>
      </div>
      <div className="hero-images-container">
        <div className="video-container">
          <video autoPlay loop muted className="video">
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/dgkw0cxnh/video/upload/v1695184400/Notinline/production_id_4487122_2160p_t4vfrb.mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="two-images">
          <div className="space">
            <img
              className="center"
              alt="image1"
              src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1695133483/Notinline/pic7_niqmmg.avif"
            />
          </div>
          <div>
            <img
              alt="image2"
              src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1695134739/Notinline/pic12_yzbt90.avif"
            />
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="home-page">
        <Header />
        {this.heroSection()}
      </div>
    );
  }
}

export default Home;

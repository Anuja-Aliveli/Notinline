import { Component } from "react";
import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const top = [
  {
    id: "05",
    name: "Kavita",
    specialty: "Dermatologist",
    avgRating: 4.7,
    totalRating: 180,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133483/Notinline/pic8_jd6xd7.avif",
    totalPatients: 1100,
    location: "Chennai",
    hospital: "Chennai Skin Care Center",
  },
  {
    id: "06",
    name: "Vikram",
    specialty: "Gynecologist",
    avgRating: 4.6,
    totalRating: 220,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134740/Notinline/pic13_f5f2ra.avif",
    totalPatients: 1300,
    location: "Pune",
    hospital: "Pune Women's Clinic",
  },
  {
    id: "07",
    name: "Sneha",
    specialty: "Ophthalmologist",
    avgRating: 4.9,
    totalRating: 300,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133483/Notinline/pic7_niqmmg.avif",
    totalPatients: 1600,
    location: "Jaipur",
    hospital: "Jaipur Eye Care Hospital",
  },
];

class Home extends Component {
  renderHeroSection = () => (
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
        <Link to="/doctors">
          <button type="button">Find Doctor</button>
        </Link>
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

  renderTreatment = () => (
    <div className="treatment-section">
      <div className="head-button">
        <p className="treatment-head">Consult Doctors based on Symptoms</p>
        <button type="button">View All</button>
      </div>
      <div className="symptoms-container">
        <div className="type-container">
          <img
            className="type"
            alt="kidney"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191264/Notinline/top-speciality-kidney_mvthf9.svg"
          />
          <p>Kidney</p>
        </div>
        <div className="type-container">
          <img
            className="type"
            alt="stomach"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191519/Notinline/stomach_s0zspn.svg"
          />
          <p>Digestion</p>
        </div>
        <div className="type-container">
          <img
            className="type"
            alt="child"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191518/Notinline/childern_iwibty.svg"
          />
          <p>Child</p>
        </div>
        <div className="type-container">
          <img
            className="type"
            alt="mind"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191518/Notinline/mind_qtxo7c.svg"
          />
          <p>Mental Health</p>
        </div>
        <div className="type-container">
          <img
            className="type"
            alt="General"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191518/Notinline/general_ctn6rn.svg"
          />
          <p>Fever</p>
        </div>
        <div className="type-container">
          <img
            className="type"
            alt="skin"
            src="https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695191519/Notinline/skin_ckfd8u.svg"
          />
          <p>Acne</p>
        </div>
      </div>
    </div>
  );

  renderChooseUs = () => (
    <div className="treatment-section">
      <p className="treatment-head text-center">Why Choose Us?</p>
      <div className="choose-section">
        <p className="fact-container">100,000 Verified doctors</p>
        <p className="fact-container">3M+ Patients</p>
        <p className="fact-container">25M Patients/year</p>
        <p className="fact-container">Safety First</p>
        <p className="fact-container">Cutting Edge Technology</p>
      </div>
    </div>
  );

  renderServices = () => (
    <div className="treatment-section">
      <p className="treatment-head text-center">Our Medical Services</p>
      <div className="choose-section">
        <div className="card">
          <p className="bold">Video Consultation</p>
          <p className="card-para">-Connect within 60sec</p>
        </div>
        <div className="card">
          <p className="bold">Find Doctors Near U</p>
          <p className="card-para">-Confirmed Appointments</p>
        </div>
        <div className="card">
          <p className="bold">Medicines</p>
          <p className="card-para">-Essentials At your doorsteps</p>
        </div>
        <div className="card">
          <p className="bold">Lab Tests</p>
          <p className="card-para">-Sample Pickup at your Home</p>
        </div>
        <div className="card">
          <p className="bold">Surgeries</p>
          <p className="card-para">-Safe and Trusted Centers</p>
        </div>
      </div>
    </div>
  );

  renderTopDoctors = () => (
    <div className="treatment-section">
      <p className="treatment-head text-center">Our Top Doctors</p>
      <div className="profiles-container">
            {top.map((each) => (
              <div className="profile-card" key={each.id}>
                <img
                  className="profile-image"
                  alt="image-profile"
                  src={each.photo}
                />
                <div className="detail-container">
                  <div className="row">
                    <p className="bold">{each.name}</p>
                    <p>{each.specialty}</p>
                  </div>
                  <div className="row">
                    <p className="bold">{each.location}</p>
                    <p>{each.totalPatients}+ Patients</p>
                  </div>
                  <div className="row">
                    <p className="bold">Ratings</p>
                    <div className="rating">
                      <AiFillStar size={30} color="orange" />
                      <p>{each.avgRating}</p>
                      <p>({each.totalRating})</p>
                    </div>
                  </div>
                  <p className="text-center bold">{each.hospital}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
  );

  render() {
    return (
      <div className="home-page">
        <Header />
        {this.renderHeroSection()}
        {this.renderTreatment()}
        {this.renderChooseUs()}
        {this.renderTopDoctors()}
        {this.renderServices()}
        <Footer />
      </div>
    );
  }
}

export default Home;

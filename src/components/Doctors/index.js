import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import "./index.css";

const doctors = [
  {
    id: "01",
    name: "Naveen",
    specialty: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695135300/Notinline/pic21_owoa1s.avif",
    totalPatients: 1500,
    location: "Hyderabad",
    hospital: "Apollo Hospitals",
  },
  {
    id: "02",
    name: "Rajesh",
    specialty: "Cardiologist",
    avgRating: 4.5,
    totalRating: 210,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134738/Notinline/pic14_oai4fg.avif",
    totalPatients: 1200,
    location: "Mumbai",
    hospital: "Mumbai Heart Center",
  },
  {
    id: "03",
    name: "Priya",
    specialty: "Pediatrician",
    avgRating: 4.9,
    totalRating: 320,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133484/Notinline/pic9_vf7qie.avif",
    totalPatients: 1800,
    location: "Bangalore",
    hospital: "Children's Hospital Bangalore",
  },
  {
    id: "04",
    name: "Amit",
    specialty: "Orthopedic Surgeon",
    avgRating: 4.2,
    totalRating: 160,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134739/Notinline/pic12_yzbt90.avif",
    totalPatients: 900,
    location: "Delhi",
    hospital: "Delhi Ortho Clinic",
  },
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
  {
    id: "08",
    name: "Sreeja",
    specialty: "Neurologist",
    avgRating: 4.4,
    totalRating: 190,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133482/Notinline/pic6_dnvl39.avif",
    totalPatients: 950,
    location: "Kolkata",
    hospital: "Kolkata Neuro Clinic",
  },
  {
    id: "09",
    name: "Anita",
    specialty: "Dentist",
    avgRating: 4.8,
    totalRating: 280,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133483/Notinline/pic5_trtdln.avif",
    totalPatients: 1700,
    location: "Hyderabad",
    hospital: "Hyderabad Dental Care",
  },
  {
    id: "10",
    name: "Sanjay",
    specialty: "ENT Specialist",
    avgRating: 4.3,
    totalRating: 150,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134741/Notinline/pic16_laxfh3.avif",
    totalPatients: 800,
    location: "Mumbai",
    hospital: "Mumbai ENT Center",
  },
  {
    id: "11",
    name: "Manisha",
    specialty: "Psychiatrist",
    avgRating: 4.7,
    totalRating: 220,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133482/Notinline/pic4_zwhaqu.avif",
    totalPatients: 1200,
    location: "Bangalore",
    hospital: "Bangalore Mind Clinic",
  },
  {
    id: "12",
    name: "Sravan",
    specialty: "Urologist",
    avgRating: 4.6,
    totalRating: 230,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134744/Notinline/pic17_vnj5d2.avif",
    totalPatients: 1100,
    location: "Delhi",
    hospital: "Delhi Urology Center",
  },
  {
    id: "13",
    name: "Arpita",
    specialty: "Dermatologist",
    avgRating: 4.9,
    totalRating: 290,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133481/Notinline/pic3_h8fumd.avif",
    totalPatients: 1500,
    location: "Chennai",
    hospital: "Chennai Skin Solutions",
  },
  {
    id: "14",
    name: "Vivek",
    specialty: "Pediatrician",
    avgRating: 4.7,
    totalRating: 180,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134746/Notinline/pic18_vogdb1.avif",
    totalPatients: 900,
    location: "Pune",
    hospital: "Pune Children's Clinic",
  },
  {
    id: "15",
    name: "Smita",
    specialty: "Gynecologist",
    avgRating: 4.5,
    totalRating: 200,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133481/Notinline/pic2_y7d4jv.avif",
    totalPatients: 1100,
    location: "Jaipur",
    hospital: "Jaipur Women's Health Center",
  },
  {
    id: "16",
    name: "Prateek",
    specialty: "Orthopedic Surgeon",
    avgRating: 4.8,
    totalRating: 240,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134748/Notinline/pic19_xywpof.avif",
    totalPatients: 1400,
    location: "Kolkata",
    hospital: "Kolkata Ortho Solutions",
  },
  {
    id: "17",
    name: "Preeti",
    specialty: "Ophthalmologist",
    avgRating: 4.6,
    totalRating: 210,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133548/Notinline/pic1_p6ilre.avif",
    totalPatients: 1200,
    location: "Hyderabad",
    hospital: "Hyderabad Eye Care",
  },
  {
    id: "18",
    name: "Alok",
    specialty: "Neurologist",
    avgRating: 4.3,
    totalRating: 160,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134748/Notinline/pic20_mvdocb.avif",
    totalPatients: 800,
    location: "Mumbai",
    hospital: "Mumbai Neuro Clinic",
  },
  {
    id: "19",
    name: "Soumya",
    specialty: "Dentist",
    avgRating: 4.9,
    totalRating: 280,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695133484/Notinline/pic10_lxxf3k.avif",
    totalPatients: 1500,
    location: "Bangalore",
    hospital: "Bangalore Dental Care",
  },
  {
    id: "20",
    name: "Sudhir",
    specialty: "ENT Specialist",
    avgRating: 4.5,
    totalRating: 190,
    photo:
      "https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1695134801/Notinline/pic11_tlg2rl.avif",
    totalPatients: 950,
    location: "Chennai",
    hospital: "Chennai ENT Center",
  },
];

class Doctors extends Component {
  state = {
    searchInput: "",
    doctorsArray: doctors,
    empty: false,
  };

  onInput = (event) => {
    const searchInput = event.target.value;
    this.setState({ searchInput }, () => {
      if (searchInput === "") {
        this.setState({ doctorsArray: doctors, empty: false });
      }
    });
  };

  onEnter = (event) => {
    if (event.key === "Enter") {
      this.onSearchInput();
    }
  };

  onSearchInput = () => {
    const { searchInput } = this.state;
    const filteredArray = doctors.filter(
      (each) => each.name === searchInput || each.location === searchInput
    );
    if (filteredArray.length === 0) {
      this.setState({ empty: true });
    } else {
      this.setState({ doctorsArray: filteredArray, empty: false });
    }
  };

  renderSearch = () => {
    let { doctorsArray, searchInput, empty } = this.state;
    doctorsArray = searchInput === "" ? doctors : doctorsArray;
    return (
      <>
        <div className="search-container">
          <input
            type="search"
            placeholder="Enter Doctor or Location"
            className="input"
            onChange={this.onInput}
            onKeyDown={this.onEnter}
          />
          <AiOutlineSearch
            size={25}
            onClick={this.onSearchInput}
            type="button"
          />
        </div>
        {empty && (
          <p className="text-center bold" style={{ alignSelf: "center" }}>
            No Doctors Found. Try Searching Others.
          </p>
        )}
        {!empty && (
          <div className="profiles-container">
            {doctorsArray.map((each) => (
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
        )}
      </>
    );
  };

  render() {
    return (
      <div className="doctors-page">
        <Header />
        {this.renderSearch()}
        <Footer />
      </div>
    );
  }
}
export default Doctors;

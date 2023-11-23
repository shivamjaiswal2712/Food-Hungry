import { restaurant } from "../../data/restaurantData";
import BookingForm from "./BookingForm";
import Button from "../../components/Button";
import contactImg from "../../assets/phone-call.jpg";

const Contact = () => {
    const hours = restaurant.openingHours;
    const address = restaurant.address;

    const openingHours = hours.map((item) => (
        <li key={item.id}>
            {item.id}: {item.hours}
        </li>
    ));

    const fullAddress = address.map((item) => (
        <li key={item.id}>
            {item.id}: {item.value}
        </li>
    ));

    return (
        <section className="contact">
            <img src={contactImg} alt="man putting a pizza in wood oven" />
            <div className="contact-content">
                <div className="text-box">
                    <div className="title">
                        <h2 className="oleo">Get in</h2>
                        <h1 className="exo">CONTACT</h1>
                    </div>
                    <p>Drop us a line here... we look forward to hearing from you!</p>
                </div>

                <section className="hours">
                    <h2 className="oleo">Opening Hours</h2>
                    <ul>{openingHours}</ul>
                </section>

                <section className="booking">
                    <h2 className="oleo">Booking</h2>
                    <BookingForm />
                    <Button theme={"primary"} onClick={() => alert(
                        "oh no, looks like this form is out of order. Please send an email instead. Sorry for the inconvenience!"
                    )}>
                        Book a table
                    </Button>
                </section>

                <section className="address">
                    <h2 className="oleo">Address</h2>
                    <ul>{fullAddress}</ul>
                    {/* <img src="map" alt="man putting a pizza in wood oven" /> */}
                </section>
            </div>
        </section>
    );
}

export default Contact;
import { useState } from "react";
// project files
import Input from "../../components/Input";
import { formData } from "../../data/formData";

const BookingForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nrPeople, setNrPeople] = useState("");
    const [time, setTime] = ("");
    const [date, setDate] = useState("");

    return(
        <form>
            <div className="fields">
                <Input hook={[name, setName]} setting={formData.name} />
                <Input hook={[email, setEmail]} setting={formData.email} />
                <Input hook={[phone, setPhone]} setting={formData.phone} />
                <Input hook={[nrPeople, setNrPeople]} setting={formData.nrPeople} />
                <Input hook={[time, setTime]} setting={formData.time} />
                <Input hook={[date, setDate]} setting={formData.date} />
            </div>
        </form>
    );
}

export default BookingForm;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface BookingFormProps {
  onNextStep: (formData: any) => void;
  formData: any;
}

const BookingForm: React.FC<BookingFormProps> = ({ onNextStep, formData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [address, setAddress] = useState(formData.address || "");
  const [notes, setNotes] = useState(formData.notes || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextStep({ email, firstName, lastName, phoneNumber, address, notes });
  };

  return (
    <form onSubmit={handleSubmit} className="grid">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;

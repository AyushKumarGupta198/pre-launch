import { useState } from "react";
import { pushEvent } from "@/lib/clevertap";

export const useSaveEmail = () => {
     const [isOpen, setIsOpen] = useState(false);
      const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [reserved,setReserved] = useState(false);

      const handleReserve = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    setError('');
    setLoading(true);
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ email }),
         headers: {
    "Content-Type": "text/plain",
  },
      });
      setReserved(true);
      pushEvent("Pre Launch Email Submitted", {
            timestamp: new Date(),
            Email: email,
          });
      console.log("Email submitted successfully");
    } catch (error) {
      console.error("Error submitting email:", error);
      setError("Sorry, something went wrong. Please try again.");
    }finally{
      setLoading(false);
    }
  };
  return { isOpen, setIsOpen, email, setEmail, loading, setLoading, error, setError, handleReserve, reserved };
}
import { useState } from "react";
import { pushEvent } from "@/lib/clevertap";

export const useSaveEmail = () => {
     const [isOpen, setIsOpen] = useState(false);
      const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [reserved,setReserved] = useState(false);

      const handleReserve = async () => {
    if (!email) {
    setError("Email is required.");
    return;
  }

  const trimmedEmail = email.trim();

  // Basic strong regex (covers most real-world cases)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(trimmedEmail)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Extra safety checks
  if (trimmedEmail.length > 254) {
    setError("Email is too long.");
    return;
  }

  if (trimmedEmail.startsWith(".") || trimmedEmail.endsWith(".")) {
    setError("Invalid email format.");
    return;
  }

  if (trimmedEmail.includes("..")) {
    setError("Email cannot contain consecutive dots.");
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
  return { isOpen, setIsOpen, email, setEmail, loading, setLoading, error, setError, handleReserve, reserved,setReserved };
}
import React, { useState } from "react";

const Contact: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`Name: ${name} Email: ${email} Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;

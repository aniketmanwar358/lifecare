import React, { useState } from "react";
import axios from "axios";
import "./DoctorBot.css";

const DoctorBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const hfToken = "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";

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/google/flan-t5-large", // You can replace this with another model
        {
          inputs: `Patient: ${input}\nDoctor:`,
        },
        {
          headers: {
            Authorization: `Bearer ${hfToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse =
        response.data?.[0]?.generated_text || "I'm not sure. Please rephrase.";
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Hugging Face API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble right now. Please try again later.",
          sender: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="doctorbot">
      <h2>DoctorBot - AI Health Assistant</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
        {loading && <p className="bot typing">DoctorBot is thinking...</p>}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>
    </div>
  );
};

export default DoctorBot;

// import React, { useState } from "react";
// import axios from "axios";
// import "./DoctorBot.css";

// const DoctorBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const apiKey =
//     "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";

//   const handleSend = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "https://openrouter.ai/api/v1/chat/completions",
//         {
//           model: "google/gemini-2.0-flash-thinking-exp:free",
//           messages: [{ role: "user", content: input }],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${apiKey}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const botResponse =
//         response.data.choices?.[0]?.message?.content ||
//         "I'm not sure. Please try again.";
//       setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "Error fetching response. Try again.", sender: "bot" },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="doctorbot">
//       <h2>DoctorBot - AI Health Assistant</h2>
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <p key={index} className={msg.sender}>
//             {msg.text}
//           </p>
//         ))}
//         {loading && <p className="bot typing">DoctorBot is typing...</p>}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Describe your symptoms..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleSend} disabled={loading}>
//           {loading ? "Thinking..." : "Ask"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DoctorBot;

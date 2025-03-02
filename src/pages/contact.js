export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Create the transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Use environment variable
          pass: process.env.EMAIL_PASS, // Use environment variable
        },
      });
      

      // Set up email options
      const mailOptions = {
        from: email,
        to: "niku2003kumari@gmail.com", // Replace with your email
        subject: `New message from ${name}`, // Corrected with backticks
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Corrected with backticks
      };
      

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
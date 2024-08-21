import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./CSS/Register.css"

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/api/user/register", {
        name,
        email,
        password,
      });
      

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login"); 
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;


// import React, { useEffect } from "react";
// import Layout from "../layout/Layout";
// import { useFormik } from "formik";
// import { registerSchema } from "../schema";
// import InputField from "../components/inputForm/InputField";
// import { useNavigate } from "react-router-dom";
// import { useAppStore } from "../../store/appStore";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const Register = () => {
//   const { registerUser, user } = useAppStore();
//   const navigate = useNavigate();
//   const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: registerSchema,
//       onSubmit: (values, action) => {
//         registerUser(values, navigate);
//       },
//     });

//   const formValues = [
//     { name: "name", title: "Name ", type: "text", value: values.name },
//     { name: "email", title: "Email ", type: "email", value: values.email },
//     {
//       name: "password",
//       title: "Password ",
//       type: "password",
//       value: values.password,
//     },
//     {
//       name: "confirmPassword",
//       title: "Confirm password ",
//       type: "password",
//       value: values.confirmPassword,
//     },
//   ];

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user]);

//   return (
//     <Layout>
//       <section className="w-full h-full py-5 flex items-center justify-center">
//         <form
//           onSubmit={handleSubmit}
//           className="w-[550px] shadow-md p-8 sm:p-10 rounded-2xl bg-white"
//         >
//           <h2 className="font-extrabold text-[26px] tracking-widest">
//             Get Started
//           </h2>

//           <p className="pt-6">
//             Already have an account?
//             <span
//               onClick={() => navigate("/login")}
//               className="text-blue-500 underline cursor-pointer"
//             >
//               Login
//             </span>
//           </p>
//           {formValues.map((item, id) => (
//             <InputField
//               key={id}
//               handleChange={handleChange}
//               name={item.name}
//               title={item.title}
//               type={item.type}
//               value={item.value}
//               errors={errors}
//               touched={touched}
//               handleBlur={handleBlur}
//             />
//           ))}
//           <button
//             type="submit"
//             className="text-[18px] hover:bg-black hover:text-white my-4 w-full py-4 rounded-[8px] border-[1px] border-black font-semibold"
//           >
//             Register
//           </button>
//         </form>
//       </section>
//     </Layout>
//   );
// };

// export default Register;

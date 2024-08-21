import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/api/user/login", { email, password });
      
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); 
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


// import React, { useEffect } from "react";
// import Layout from "../Components/layout/Layout";
// import { useFormik } from "formik";
// // import InputField from "../components/inputForm/InputField";
// import { useNavigate } from "react-router-dom";
// import { useAppStore } from "../Components/store/appStore";
// import * as YUP from "yup";

// const loginSchema = YUP.object({
//   email: YUP.string().email("invalid mail").required("enter email"),
//   password: YUP.string().required("enter password"),
// });

// const InputField = ({
//     title,
//     name,
//     value,
//     type,
//     handleChange,
//     errors,
//     touched,
//     handleBlur,
//   }) => {
//     return (
//       <div className="w-full pt-3 flex flex-col">
//         <label htmlFor={name}>
//           {title}
//           {"*"}
//         </label>
//         {errors[name] && touched[name] ? (
//           <span className="text-red-500">{errors[name]}</span>
//         ) : null}
//         <input
//           className="w-full my-2 outline-none rounded-[8px] bg-gray-100 p-4"
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={handleChange}
//           placeholder={title}
//           onBlur={handleBlur}
//         />
//       </div>
//     );
//   };

// const initialValues = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const { loginUser, user } = useAppStore();
//   const navigate = useNavigate();
//   const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: loginSchema,
//       onSubmit: (values, action) => {
//         loginUser(values, navigate);
//       },
//     });

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user]);

//   return (
//     <Layout>
//       <section className="w-full h-screen flex items-center justify-center">
//         <form
//           onSubmit={handleSubmit}
//           className="w-[550px] shadow-md p-8 sm:p-10 rounded-2xl bg-white"
//         >
//           <h2 className="font-extrabold text-[26px] tracking-widest">Login</h2>

//           <p onClick={() => navigate("/register")} className="pt-6">
//             Don't have an account?
//             <span className="text-blue-500 underline cursor-pointer">
//               Get Started
//             </span>
//           </p>

//           <InputField
//             handleChange={handleChange}
//             name={"email"}
//             title={"Email "}
//             type={"email"}
//             value={values.email}
//             errors={errors}
//             touched={touched}
//             handleBlur={handleBlur}
//           />
//           <InputField
//             handleChange={handleChange}
//             name={"password"}
//             title={"Password "}
//             type={"password"}
//             value={values.password}
//             errors={errors}
//             touched={touched}
//             handleBlur={handleBlur}
//           />
//           <h2 className="text-blue-500 py-3 underline text-right cursor-pointer">
//             forgot-password
//           </h2>
//           <button
//             type="submit"
//             className="text-[18px] hover:bg-black hover:text-white my-4 w-full py-4 rounded-[8px] border-[1px] border-black font-semibold"
//           >
//             Login
//           </button>
//         </form>
//       </section>
//     </Layout>
//   );
// };

// export default Login;

"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "../../components/view/Banner.tsx/banner.module.css";
import bg from "../../../public/assets/home-1-s-slider-1.jpg";

const SignUp = () => {
  type Inputs = {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    password: string | number;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full">
      <div className={`${style.bgWrap}`}>
        <Image
          alt="coffee image"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={`${style.bgText} h-full rounded-xl bg-black/50 bg-opacity-50 px-16 py-8 shadow-lg flex flex-col justify-center items-center`}
      >
        {/* login form */}
        <div className="backdrop-blur-md border py-6 rounded-lg px-2 md:px-5 flex flex-col justify-center items-center">
          <div className="text-white">
            <div className="mb-6 flex flex-col items-center">
              <Image src={logo} width={150} height={150} priority alt="" />
              <span className="text-gray-300 mt-2 font-bold uppercase">
                Sign Up Now
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center space-y-4 w-[80%] mx-auto"
            >
              {/* first name */}
              <div className="text-lg">
                <input
                  className="rounded-3xl border bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <br />
                <div className="text-center text-wrap">
                  {errors.firstName && (
                    <span className="text-red-500 text-xs text-wrap">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
              </div>
              {/* last name */}
              <div className="text-lg">
                <input
                  className="rounded-3xl border bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                <br />
                <div className="text-center text-wrap">
                  {errors.lastName && (
                    <span className="text-red-500 text-xs text-wrap">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              {/* gender */}
              <div className="text-lg w-full">
                <select
                  className="rounded-3xl border !bg-[#5C4935] bg-opacity-50 px-6 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md"
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <div className="text-center text-wrap">
                  {errors.gender && (
                    <span className="text-red-500 text-xs text-wrap">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>

              {/* email */}
              <div className="text-lg">
                <input
                  className="rounded-3xl border bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  placeholder="id@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <br />
                <div className="text-center text-wrap">
                  {errors.email && (
                    <span className="text-red-500 text-xs text-wrap">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              {/* password */}
              <div className="text-lg">
                <input
                  className="rounded-3xl border bg-transparent bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  placeholder="your password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message:
                        "Invalid password format (6-16 characters with special characters)",
                    },
                  })}
                />
                <br />
                <div className="text-center text-wrap">
                  {errors.password && (
                    <span className="text-red-500 text-xs text-wrap">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="!mt-5 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-[#4db5ff] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

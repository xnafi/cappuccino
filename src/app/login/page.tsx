"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo/logo.png";
import {
  useForm,
  SubmitHandler,
  Ref,
  MultipleFieldErrors,
  Message,
} from "react-hook-form";
import style from "../../components/view/Banner.tsx/banner.module.css";
import bg from "../../../public/assets/img2.jpg";
import FadeIn from "@/utils/FadeIn";

const LoginPage = () => {
  type Inputs = {
    email: string;
    password: string | number;
    pattern: string;
    required: boolean;
  };

  type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs, FieldError>();
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
        <div className="backdrop-blur-md border py-10 rounded-lg px-2 md:px-5 flex flex-col justify-center items-center">
          <div className="text-white">
            <div className="mb-6 flex flex-col items-center ">
              <Image src={logo} width={150} height={150} priority alt="" />
              <span className="text-gray-300 mt-2">Enter Login Details</span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center space-y-4 w-[80%] mx-auto"
            >
              {/* email */}
              <div className="mb-4 text-lg">
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
              <div className="mb-4 text-lg">
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

              <div className="!mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-[#4db5ff] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

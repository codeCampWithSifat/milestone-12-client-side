import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName : data.name})
    navigate("/")
  };

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p>{error?.message || error1?.message || error2?.message}</p>
    );
  }
  if (loading || loading1 || updating) {
    return <Loading />;
  }
  if (user || user1) {
    console.log(user1 )
   
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-2xl text-indigo-700">
            {" "}
            Please Sign Up Here
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name Is Required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.name?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Is Required",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Provide A Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Your Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must Be 6 Or More Character",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="btn btn-active btn-accent w-full"
            />
          </form>
          <p>
            <small>
              Already Have An Account{" "}
              <Link className="text-secondary" to="/login">
                Please Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <h3 className="text-red-500 text-lg my-4">{errorElement}</h3>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline sm:btn-sm md:btn-md"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

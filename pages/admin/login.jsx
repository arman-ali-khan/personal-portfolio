import Layout from "@/Layout/Layout";
import Lottie from "lottie-react";
import Link from "next/link";
import loginAmination from "../../src/lottie/login.json";

const login = () => {
  return (
    <Layout title={"Admin Login"}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row justify-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Admin Login!</h1>
            <div className="w-full hidden md:block max-w-sm">
              <Lottie animationData={loginAmination} loop={true} />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    href="/admin/forgot"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;

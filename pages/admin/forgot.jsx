import Layout from "@/Layout/Layout";
import Lottie from "lottie-react";
import Link from "next/link";
import fotgotPassword from "../../src/lottie/forgot-password.json";

const forgot = () => {
  return (
    <Layout title={"Admin Login"}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row justify-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Forgot Password!</h1>
            <div className="w-full hidden md:block max-w-sm">
            <Lottie animationData={fotgotPassword} loop={true} />
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
                  <Link href="/admin/login" className="label-text-alt link link-hover">
                   Back To Login 
                  </Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default forgot;

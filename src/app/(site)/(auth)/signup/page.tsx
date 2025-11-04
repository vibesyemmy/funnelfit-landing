import SignUp from "@/app/components/auth/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | FunnelFit",
};

const SignupPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignupPage;

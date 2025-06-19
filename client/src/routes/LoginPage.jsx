import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex item-center justify-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/login" />
    </div>
  );
};

export default LoginPage;

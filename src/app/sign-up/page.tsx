"use client";
import { Form, Input, Button } from "antd";
import BGWrapper from "components/WrapperBG";
import { useRouter } from "next/navigation";
import AuthService from "services/authService";
import { Rule } from "antd/lib/form";
import { useState } from "react";

type SignUpInputProps = {
  fullname: string;
  email: string;
  password: string;
};

const initialUserInput: SignUpInputProps = {
  fullname: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const router = useRouter();

  const [userInput, setUserInput] =
    useState<SignUpInputProps>(initialUserInput);

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleLoginClick = () => {
    router.push("/login");
  };
  const isEmailValid = (email: string): boolean => {
    // Regular expression for basic email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignupClick = async () => {
    console.log("handleSignupClick");
    let fullname: string = userInput.fullname;
    let email: string = userInput.email;
    let password: string = userInput.password;

    console.log("Full name", fullname, email, password);

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (password.length < 4) {
      alert("Password must be at least 4 characters long!");
      return;
    }
    if (fullname.length < 4) {
      alert("Full name must be at least 4 characters long!");
      return;
    }

    try {
      const token = await AuthService.signup(fullname, email, password);
      AuthService.saveToken(token);
      // You can redirect to the login page or do other actions after signup
      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <BGWrapper>
      <div>
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </div>
      <Form
        name="basic"
        {...formItemLayout}
        initialValues={{ remember: true }}
        onFinish={handleSignupClick}
        style={{
          maxWidth: "100%", // Adjusted to be full-width on small screens
          width: "400px", // Set a fixed width for larger screens
          margin: "40px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please enter your full name!" }]}
        >
          <Input
            placeholder="Enter your full name"
            size="large"
            name="fullname"
            value={userInput.fullname}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            placeholder="Enter email"
            size="large"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter password"
            size="large"
            name="password"
            value={userInput.password}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="bg-[#1677ff]"
            // onClick={handleSignupClick}
          >
            Signup
          </Button>
        </Form.Item>

        <div className="text-center">
          Already have an account?{" "}
          <Button onClick={handleLoginClick}>Login</Button>
        </div>
      </Form>
    </BGWrapper>
  );
};

export default SignUp;

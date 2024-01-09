"use client";

import { Form, Input, Button } from "antd";
import BGWrapper from "components/WrapperBG";
import { useRouter } from "next/navigation";
// import AuthService from "services/authService";
import { login, saveToken } from "services/authService";
type LoginProps = {
  setLoggedIn: (loggedIn: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  const router = useRouter();

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleSignupClick = () => {
    router.push("/sign-up");
  };

  const handleLoginClick = async () => {
    const email = ""; // get email from form;
    const password = ""; // get password from form;

    try {
      const token = await login(email, password);
      saveToken(token);
      setLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error
    }
  };
  return (
    <BGWrapper>
      <div>
        <h1 className="text-2xl font-bold">Log In</h1>
      </div>
      <Form
        name="basic"
        {...formItemLayout}
        initialValues={{ remember: true }}
        style={{
          maxWidth: "100%", // Adjusted to be full-width on small screens
          width: "400px", // Set a fixed width for larger screens
          margin: "40px ",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Enter email" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter password" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="bg-[#1677ff]"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Form.Item>

        <div className="text-center">
          Don't have an account?{" "}
          <Button onClick={handleSignupClick}>Sign up</Button>
        </div>
      </Form>
    </BGWrapper>
  );
};

export default Login;

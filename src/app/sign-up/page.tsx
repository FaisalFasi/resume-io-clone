"use client";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleSignupClick = () => {
    // Handle signup logic here
    console.log("Signing up...");
  };

  return (
    <div className="mt-[-60px] flex h-screen items-center justify-center">
      <Form
        name="signup"
        {...formItemLayout}
        initialValues={{ remember: true }}
        style={{
          maxWidth: 400,
          margin: "auto",
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
          <Input placeholder="Enter your full name" size="large" />
        </Form.Item>

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
            onClick={handleSignupClick}
          >
            Signup
          </Button>
        </Form.Item>

        <div className="text-center">
          Already have an account?{" "}
          <Button onClick={handleLoginClick}>Login</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;

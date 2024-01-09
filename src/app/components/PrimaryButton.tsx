import { cx } from "lib/cx";
import { Button as AntButton } from "antd";
import { ButtonProps } from "./Button";

export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <AntButton className={cx("btn-primary", className)} {...props} /> // Use Ant Design Button here
);

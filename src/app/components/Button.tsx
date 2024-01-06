import { cx } from "lib/cx";
import { Tooltip } from "components/Tooltip";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

type ReactButtonProps = React.ComponentProps<"button">;
type ReactAnchorProps = React.ComponentProps<"a">;
type ButtonProps = ReactButtonProps | ReactAnchorProps;

const isAnchor = (props: ButtonProps): props is ReactAnchorProps => {
  return "href" in props;
};

export const Button = (props: ButtonProps) => {
  if (isAnchor(props)) {
    return <a {...props} />;
  } else {
    // Omitting 'type' prop to avoid conflict with AntButton
    const { type, ...buttonProps } = props;
    return <button type="button" {...buttonProps} />;
  }
};

type IconButtonProps = ButtonProps & {
  size?: "small" | "medium";
  tooltipText: string;
};

export const IconButton = ({
  className,
  size = "medium",
  tooltipText,
  ...props
}: IconButtonProps) => (
  <Tooltip text={tooltipText}>
    <AntButton
      type="default" // Set the type explicitly or omit it based on your needs
      className={cx(
        "rounded-full  outline-none hover:bg-gray-100 focus-visible:bg-gray-100",
        size === "medium" ? "p-1.5" : "p-1",
        className
      )}
      {...(props as AntButtonProps)} // Pass relevant properties to AntButton
    />
  </Tooltip>
);

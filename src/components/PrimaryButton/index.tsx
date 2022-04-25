import { FC } from "react";

interface Props {
  text?: string;
  link?: string;
  target?: string;
  download?: string;
}
const PrimaryButton: FC<Props> = ({ text, link, target, download }) => {
  return (
    <a className="mycv" href={link} download={download} target={target}>
      {text}
    </a>
  );
};

export default PrimaryButton;

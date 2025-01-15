import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import LogoImage from "../assets/images/eddie_profile_pic_480.png";
interface LogoProps {
  image?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ image, width, height }) => {
  return (
    <Box>
      <Image
        width={width || 300}
        height={height || 300}
        src={LogoImage}
        alt="Eddie Villanueva"
        className="grayscale shadow-md"
      />
    </Box>
  );
};

export default Logo;

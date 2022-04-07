import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-row justify-between border-t-2 w-full border-blue-500 py-5">
        <div className="copyright">
          <p>
            Copyright <span className="text-blue-500">&copy;</span> 2022 Portrayed Words
          </p>
        </div>
        <div className="flex flex-row">
          <p className="mr-4">Follow Us:</p>
          <Link href={"https:/facebook.com"}>
            <a target={"_blank"}>
              <FaFacebook className="mr-4 text-blue-800 cursor-pointer text-2xl" />
            </a>
          </Link>
          <Link href={"https://instagram.com"}>
            <a target={"_blank"}>
              <FaInstagram className="mr-4 text-pink-600 cursor-pointer text-2xl" />
            </a>
          </Link>
          <Link href={"https://twitter.com"}>
            <a target={"_blank"}>
              <FaTwitter className="text-blue-500 cursor-pointer text-2xl" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

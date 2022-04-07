import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-2 w-full inline-block border-blue-500 py-2">
        <div className="md:float-left block">
          <Link href="/">
            <p className="cursor-pointer font-Euphoria font-bold text-4xl text-black tracking-wider">
              <span className="font-bolder text-5xl text-blue-500">P</span>ortrayed{" "}
              <span className="font-bolder text-5xl text-blue-500">W</span>
              ords
            </p>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:text-blue-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

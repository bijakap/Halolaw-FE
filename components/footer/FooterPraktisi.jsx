import Link from "next/link";
import React from "react";
import { useState } from "react";

const FooterPraktisi = (props) => {

  const selectedUser = props.user;
  let [linkTerm, setLinkTerm] = useState(0);
  let [linkPrivacy, setLinkPrivacy] = useState(0);

  if (selectedUser === "praktisi") {
    linkTerm = "/praktisi/pengaturan/termCondition";
    linkPrivacy = "/praktisi/pengaturan/privacyPolicy";
  } else if (selectedUser === "admin") {
    linkTerm = "/admin/pengaturan/termCondition";
    linkPrivacy = "/admin/pengaturan/privacyPolicy";
  }

  return (
    <div className="px-10 py-2.5 bg-white md:flex justify-start md:ml-10 w-auto">
      <div className="text-[#000] text-[12px] font-medium">
        <p>
          <Link href={linkPrivacy}>
            <a href="" className="mr-6">
              Privacy Policy
            </a>
          </Link>
          <Link href={linkTerm}>
            <a href="" className="">
              Term and condition
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterPraktisi;

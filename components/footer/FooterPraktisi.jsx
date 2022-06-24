import Link from "next/link";
import { useState } from "react";

const FooterPraktisi = (props) => {
  const privacy = props.privacy;
  const term = props.term;
  
// const [footerLink, setFooterLink] = useState([
//   {user: 'praktisi', term:'/praktisi/pengaturan/termCondition', privacy: '/praktisi/pengaturan/privacyPolicy'},
//   {user: 'admin', term:'/admin/pengaturan/termCondition', privacy: '/admin/pengaturan/privacyPolicy'},
// ])

  return (
    <div className="px-10 py-2.5 bg-white md:flex justify-start md:ml-10 w-auto">
      {/* {footerLink.map((footerLink) => ( */}
        <div className="text-[#000] md:text-[12px] font-medium">
        <p>
          <Link href={privacy}>
            <a href="" className="mr-6">
              Privacy Policy
            </a>
          </Link>
          <Link href={term}>
            <a href="" className="">
              Term and condition
            </a>
          </Link>
        </p>
      </div>
      {/* ))} */}
    </div>
  );
};

export default FooterPraktisi;

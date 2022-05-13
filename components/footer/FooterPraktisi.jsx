import Link from "next/link";

const FooterPraktisi = () => {
  return (
    <div className="hidden px-10 py-2.5 bg-white mt-6 md:flex justify-start ml-10 w-auto">
      <div className="text-[#000] md:text-[12px] font-regular">
        <p>
          <Link href="/praktisi/PrivacyPolicy">
            <a href="#" className="mr-6">
              Privacy Policy
            </a>
          </Link>
          <Link href="/praktisi/termCondition">
            <a href="#" className="">
              Term and condition
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterPraktisi;

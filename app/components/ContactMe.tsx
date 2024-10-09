import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ContactItem from "./ContactItem";
function ContactMe() {
  const items = [
    { icon: <FaGithub />, text: "github", link: "https://github.com/Noorhesham" },
    {
      icon: <FaLinkedin className=" text-blue-600" />,
      text: "linkedin",
      link: "https://www.linkedin.com/in/noor-elgendy-0aa84b207/",
    },
    {
      icon: <FaFacebook className=" text-blue-700" />,
      text: "facebook",
      link: "https://web.facebook.com/profile.php?id=100006306765558",
    },
    {
      icon: <img src="/insta.webp" className=" w-5" />,
      text: "instagram",
      link: "https://www.instagram.com/noorhesham174/",
    },
    {
      icon: <img src="/upwork.svg" className=" w-5" />,
      text: "Upwork",
      link: "https://www.upwork.com/freelancers/~019263158c8f922a92",
    },
  ];
  return (
    <div className=" hidden lg:block z-[9999999999999999999999] bg-gray-300 dark:bg-black-200 border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-3 px-1 rounded-full fixed top-[30%] left-14">
      <ul className="flex flex-col  text-xl  lg:text-2xl items-center gap-5 justify-center  ">
        {items.map((item, i) => (
          <ContactItem key={i} link={item.link} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

export default ContactMe;

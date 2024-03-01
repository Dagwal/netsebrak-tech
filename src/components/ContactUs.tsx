import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const ContactUs = () => {
  return (
    <div id="contact" className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl bg-white text-[#333] font-[sans-serif]">
      <div className="ml-5">
        <h1 className="text-2xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-400 mt-3">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <IconMail  color="#f5d480" />

              </div>
              <a
                href="#"
                className="text-[#f5d480]  text-sm ml-3"
              >
                <small className="block">Mail</small>
                <strong>info@netsebrak.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
              <IconBrandFacebook color="#f5d480" />

              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
              <IconBrandLinkedin  color="#f5d480" />

              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <IconBrandInstagram color="#f5d480" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form className="ml-5 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#f5d480]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#f5d480]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#f5d480]"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#f5d480]"
        ></textarea>
        <button
          type="button"
          className="text-white bg-[#f5d480] hover:bg-yellow-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

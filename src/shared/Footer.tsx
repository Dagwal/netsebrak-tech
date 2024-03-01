export default function Footer() {
  const currentDateTime = new Date().getFullYear();

  return (
    <footer className="bg-black lg:px-5 p-8">
      <div className="md:flex md:item-center">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a
              href="#terms-of-service"
              className="hover:text-white text-gray-300 text-sm"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="privacy-policy"
              className="hover:text-white text-gray-300 text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="security"
              className="hover:text-white text-gray-300 text-sm"
            >
              Security
            </a>
          </li>
        </ul>
        <p className="text-gray-300 text-sm ml-auto max-md:mt-5">
          Copyright © {currentDateTime}
          <a href="#" className="hover:underline mx-1">
            Netsebrak Tech
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

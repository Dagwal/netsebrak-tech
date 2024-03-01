import { ContactInputBoxProps } from "../../types/contactInputBox";

const ContactInputBox = ({ type, placeholder, name }:ContactInputBoxProps) => {
    return (
      <>
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          />
        </div>
      </>
    );
  };
  export default ContactInputBox;
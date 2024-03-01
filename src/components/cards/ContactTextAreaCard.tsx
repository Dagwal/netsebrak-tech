import { ContactTextAreaProps } from "../../types/contactTextArea";

const ContactTextArea = ({ row, placeholder, name, defaultValue }:ContactTextAreaProps) => {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
            defaultValue={defaultValue}
          />
        </div>
      </>
    );
  };
  
  export default ContactTextArea;
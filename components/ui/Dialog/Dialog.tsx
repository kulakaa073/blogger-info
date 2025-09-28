export interface DialogData {
  title: string;
  description: string;
  buttonText?: string;
  externalLink?: string;
  externalLinkAnchorText?: string;
}

interface DialogProps {
  dialogData: DialogData;
  onClose: () => void;
}

const Dialog = ({ onClose, dialogData }: DialogProps) => {
  return (
    <div className="relative max-w-78.25 ds:max-w-auto bg-primary shadow-[4px_6px_10px_4px_#A75DF333_inset] rounded-xbig px-10 py-15 ds:px-20 ds:py-22 flex flex-col">
      <button
        type="button"
        onClick={onClose}
        aria-label="Закрити діалог"
        className="absolute top-7 right-[28.99px] rounded-full hover:bg-white/20 transition-all ease-in-out duration-250 z-54 hover:opacity-80"
      >
        <svg className="w-8 h-8 fill-white ">
          <use href="#icon-close" />
        </svg>
      </button>
      <h3 className="font-raleway font-bold text-2xl leading-7 text-center uppercase mb-9">
        {dialogData.title}
      </h3>
      <p className="ds:whitespace-pre-line font-raleway ds:text-2xl ds:leading-7 text-center mb-10">
        {dialogData.description}
        {dialogData.externalLink && (
          <a
            href={dialogData.externalLink}
            className="block font-bold"
            target="_blank"
          >
            {dialogData.externalLinkAnchorText}
          </a>
        )}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="bg-white text-primary rounded-full h-11.75 flex items-center justify-center font-manrope font-semibold leading-5.5 hover:scale-102 transition-all duration-250 ease-in-out hover:opacity-80"
      >
        {dialogData.buttonText || 'OK'}
      </button>
    </div>
  );
};

export default Dialog;

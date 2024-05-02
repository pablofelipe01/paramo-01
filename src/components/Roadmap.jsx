import { useState } from 'react';
import Button from "./Button";
import Section from "./Section";

const Roadmap = () => {
  const [showIframe, setShowIframe] = useState(false); // State to manage iframe visibility
  const [iframeUrl, setIframeUrl] = useState(''); // State to manage the iframe URL

  // Function to handle button click, setting the iframe URL and showing the iframe
  const handleButtonClick = () => {
    setIframeUrl("https://tokensolutions.mypinata.cloud/ipfs/QmbXXibEJFXQB5h8A5AzcVNAUmZNeVaiRPc4safEZF8V2i");
    setShowIframe(true);
  };

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button onClick={handleButtonClick}>Certificado</Button>
        </div>
        {showIframe && (
          <div className="iframe-container relative w-full max-w-4xl mx-auto mt-8">
            <iframe
              src={iframeUrl}
              style={{ width: '100%', height: '900px' }}
              frameBorder="0"
              className="rounded-lg"
            ></iframe>
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-0 right-0 p-2 m-2 text-xl bg-black rounded-full cursor-pointer hover:bg-gray-200"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Roadmap;


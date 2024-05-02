import  { useState } from 'react';
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const [iframeUrl, setIframeUrl] = useState('');
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = (url) => {
    setIframeUrl(url);
    setShowIframe(true);
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
    setIframeUrl(''); // Optionally clear the URL
  };

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            onClick={() => handleButtonClick(item.linkUrl)}
            white={!!item.price}
          >
            {item.price ? "Buy" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showIframe && (
        <div className="iframe-backdrop absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="iframe-container relative p-4 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl"
                style={{ width: '100%', maxWidth: '600px', height: 'auto', minHeight: '700px' }}>
                <iframe src={iframeUrl} title="Checkout" 
                  style={{ width: '100%', height: '100%' }}
                  className="rounded-lg h-full min-h-[600px]" frameBorder="0"></iframe>
                    <button
                    onClick={handleCloseIframe}
                    className="absolute top-0 right-0 p-2 m-2 text-xl bg-black rounded-full cursor-pointer hover:bg-gray-200"
                    aria-label="Close"
                    >
                      ×
                   </button>
             </div>
          </div>



      )}
    
    </div>

  );
};

export default PricingList;

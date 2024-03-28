import React, { useEffect } from 'react';

function HubspotForm({ form }) {
  useEffect(() => {
    console.log(form);
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '21472314',
          formId: `${form}`,
          target: '#hubspotFormContainer',
        });
      }
    };
  }, []);

  return <div id="hubspotFormContainer"></div>;
}

export default HubspotForm;

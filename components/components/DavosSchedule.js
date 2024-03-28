import * as React from 'react';

export default function DavosSchedule() {
  return (
    <div
      className="DavosSchedule  max-w-7xl mx-auto w-screen h-[1000px] p-2 md:p-5"
      id="schedule"
    >
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTNq1XGAlpCB4UEQnlDzAHu7eQRcXoA47Yoch99zrcAmKQ9QKwxR9Qi2xz2rq5qtqrBbC61N1WwCnKY/pubhtml?widget=true&amp;headers=false"
        className="w-full h-full "
      ></iframe>
    </div>
  );
}

import React from "react";

const PdfViewer = () => {
  return (
    <div className="pdfViewer">
      <iframe src="/cv.pdf" width="60%" height="1200px" />
    </div>
  );
};
export default PdfViewer;

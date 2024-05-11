import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const PDFViewer = ({ pdfName, userInfo }) => {
  const pdfPath = "https://cdn.simplepdf.eu/simple-pdf/assets/sample.pdf";
  console.log(pdfPath);

  return (
    <div className="max-w-md rounded-lg shadow-md">
      <EmbedPDF>
        <a
          href={pdfPath}
          className="inline-block px-4 py-2 text-center text-sm font-medium text-white bg-primary hover:bg-accent rounded-b-lg"
        >
          Open {pdfName}
        </a>
      </EmbedPDF>
    </div>
  );
};

export default PDFViewer;

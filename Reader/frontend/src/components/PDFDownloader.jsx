import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PDFDownloader = ({ words }) => {
  const downloadPdf = () => {
    const doc = new jsPDF();

    const tableColumn = ["Word", "Meaning", "Root"];
    const tableRows = [];

    words.forEach(word => {
      const wordData = [
        word.word,
        word.definition,
        word.root,
        //word.tags // Assuming 'tags' is an array or a string of POS tags
      ];
      tableRows.push(wordData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Words with the Same Root", 14, 15);
    doc.save(`words_${new Date().getTime()}.pdf`);
  };

  return (
    <button onClick={downloadPdf}>Download PDF</button>
  );
};

export default PDFDownloader;

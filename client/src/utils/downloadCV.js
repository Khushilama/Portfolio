import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function downloadCV(ref) {
  const element = ref.current;
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const pageWidth = pdf.internal.pageSize.getWidth();   // 210mm
  const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let yOffset = 0;
  let remainingHeight = imgHeight;

  // Add pages if content overflows
  while (remainingHeight > 0) {
    pdf.addImage(imgData, 'PNG', 0, -yOffset, imgWidth, imgHeight);
    remainingHeight -= pageHeight;
    yOffset += pageHeight;
    if (remainingHeight > 0) pdf.addPage();
  }

  pdf.save('Khushi_Lama_CV.pdf');
}

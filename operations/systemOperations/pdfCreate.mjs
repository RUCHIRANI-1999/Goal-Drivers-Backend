import PDFDocument from 'pdfkit'
import fs from 'fs'
  
export async function operation(data){
    const doc = new PDFDocument();
  
    doc.pipe(fs.createWriteStream('report.pdf'));
    doc.fillColor('black',0.9)
    doc.image('logo.jpg', {
        fit: [100, 100],
        align: 'left',
        valign: 'top'
      });

    doc
       
      .fontSize(27)
      .text('Budget Pos Kaduwela Sri Lanka', 100, 200)
      .text('email:email@gmail.com', 150, 230)

    doc.fontSize(20).fillColor('black',0.5)
      .text('Seller Report', 100, 300);

    doc.fillColor('gray',1 ).font('Helvetica')
    doc
       
      .fontSize(15)
      .text('Product Id', 130, 350)
      .text(data.id, 350, 350)
      .text('product Name', 130, 380)
      .text(data.name, 350, 380)
      .text('product Price', 130, 410)
      .text('LKR '+data.price, 350, 410)
      .text('product Quantity', 130, 440)
      .text(data.amount, 350, 440)
      .text('Sold Out Quantity', 130, 470)
      .text(data.sold, 350, 470)
      .text('product Income', 130, 500)
      .text(data.income, 350, 500);

    //   doc
    //   .addPage()
    //   .fontSize(15)
    //   .text('Generating PDF with the help of pdfkit', 100, 100);
       
      
       
    // // Apply some transforms and render an SVG path with the 
    // // 'even-odd' fill rule
    // doc
    //   .scale(0.6)
    //   .translate(470, -380)
    //   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    //   .fill('red', 'even-odd')
    //   .restore();
       
    // // Add some text with annotations
    // doc
    //   .addPage()
    //   .fillColor('blue')
    //   .text('The link for GeeksforGeeks website', 100, 100)
        
    //   .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
       
    // Finalize PDF file
    doc.end();
}
let data = {
    id : 1,
    name: "name",
    income:1000.00,
    price:200,
    amount:100,
    sold:5
}
operation(data)

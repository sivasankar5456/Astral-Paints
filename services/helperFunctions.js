export function splitParagraphs(htmlString) {
    if(!htmlString){
        return null;
    }
    const cleanString = htmlString.replace(/\n/g, ''); // remove \n
    const regex = /<p>(.*?)<\/p>/g;
    const paragraphs = [];
    let match;
  
    while ((match = regex.exec(cleanString)) !== null) {
      paragraphs.push(match[1].trim()); // get only inner text, trimmed
    }
  
    return paragraphs;
}  
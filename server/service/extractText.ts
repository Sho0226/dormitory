export function extractTextFromDom(Element: HTMLElement): string {
  let textContent = "";
  const childNodes = Element.childNodes;

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      textContent += `${node.textContent?.trim()}\n`;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      textContent += extractTextFromDom(node as HTMLElement);
    }
  });
  return textContent;
}

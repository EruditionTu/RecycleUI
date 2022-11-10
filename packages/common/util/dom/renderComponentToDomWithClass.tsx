import type { DOMElement, DOMAttributes } from 'react';
import type { Container } from 'react-dom';
import ReactDOM from 'react-dom';

function renderComponentToDomWithClass(
  component: DOMElement<DOMAttributes<Element>, Element>,
  container: Container,
  rootDomClass: string,
) {
  const div = document.createElement('div');
  div.setAttribute('class', rootDomClass);
  container.appendChild(div);
  ReactDOM.render(component, div);
}
export default renderComponentToDomWithClass;

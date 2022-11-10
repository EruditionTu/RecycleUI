import type { DOMElement, DOMAttributes } from 'react';
import type { Container } from 'react-dom';
import ReactDOM from 'react-dom';
import findChildInDom from './findChildInDom';

// This Function is used to render the component into the real dom
// the root dom is mean that all component will be reandered in it
// if you do not income the params rootDomId the component will be rendered into
function renderComponentToDomWithId(
  component: DOMElement<DOMAttributes<Element>, Element>,
  container: Container,
  rootDomId: string,
) {
  const needRoot: boolean = Boolean(rootDomId);
  if (!needRoot) {
    ReactDOM.render(component, container);
    return;
  }
  let rootDom = findChildInDom(container as HTMLElement, (dom: Element | null) => {
    return dom?.id === rootDomId;
  });
  if (!rootDom) {
    rootDom = document.createElement('div');
    rootDom.setAttribute('id', rootDomId as string);
    container.appendChild(rootDom);
  }
  ReactDOM.render(component, rootDom);
}
export default renderComponentToDomWithId;

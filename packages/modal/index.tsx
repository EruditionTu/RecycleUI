import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { omit as _omit } from 'lodash';

import type { FC } from 'react';

import type { ModalMethod, DialogModalMethod, ModalOptions, DialogProps } from './type';
import type ModalProps from './type';
import Modal from './Modal';
import DialogModal from './DialogModal';
import "./style"

const rootDomClass: string = 'recycle-ui-modal-root';

interface ExportModalInterface extends FC<ModalProps> {
  info: DialogModalMethod;
  error: DialogModalMethod;
  success: DialogModalMethod;
  confirm: DialogModalMethod;
  warning: DialogModalMethod;
  method: ModalMethod;
}
const ExportModal: ExportModalInterface = memo(Modal) as unknown as ExportModalInterface;

function renderDialog(options: DialogProps) {
  const div = document.createElement('div');
  const container = document.body;
  div.setAttribute('class', rootDomClass);
  container.appendChild(div);
  const afterClose = () => {
    container.removeChild(div);
    typeof options.afterClose === 'function' && options.afterClose();
  };

  ReactDOM.render(<DialogModal {..._omit(options, ['afterClose'])} afterClose={afterClose} />, div);
}

ExportModal.info = (options: ModalOptions) => {
  renderDialog({ ...options, type: 'info' });
};
ExportModal.error = (options: ModalOptions) => {
  renderDialog({ ...options, type: 'error' });
};
ExportModal.success = (options: ModalOptions) => {
  renderDialog({ ...options, type: 'success' });
};
ExportModal.confirm = (options: ModalOptions) => {
  renderDialog({ ...options, type: 'confirm' });
};
ExportModal.warning = (options: ModalOptions) => {
  renderDialog({ ...options, type: 'warning' });
};
ExportModal.method = (options: DialogProps) => {
  const { type } = options;
  switch (type) {
    case 'error':
      ExportModal.error({ ..._omit(options, ['type']) });
      break;
    case 'info':
      ExportModal.info({ ..._omit(options, ['type']) });
      break;
    case 'success':
      ExportModal.success({ ..._omit(options, ['type']) });
      break;
    case 'warning':
      ExportModal.warning({ ..._omit(options, ['type']) });
      break;
    default:
      ExportModal.confirm({ ..._omit(options, ['type']) });
  }
};
export default ExportModal;

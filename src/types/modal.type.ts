import { ReactNode } from 'react';

export interface IConfirmModalProps {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmitFn: () => void;
  name: string;
}

export interface GlobalModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  children?: ReactNode;
}

import type { ReactNode } from 'react';

type ResultStatus = 'success' | 'error' | 'info' | 'warn' | '404' | '403' | '500';
interface ResultProps {
  icon?: ReactNode;
  extra?: ReactNode;
  status?: ResultStatus;
  subTitle?: ReactNode;
  title?: ReactNode;
}
export { ResultStatus };
export default ResultProps;

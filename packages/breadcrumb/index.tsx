import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import './style'

type BreadcrumbComponent = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

(Breadcrumb as BreadcrumbComponent).Item = BreadcrumbItem;

export default Breadcrumb as BreadcrumbComponent;

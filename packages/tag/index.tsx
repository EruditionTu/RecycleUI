import { forwardRef } from 'react';
import InternalTag from './Tag';
import CheckableTag from './CheckableTag';
import type TagProps from './type';

interface TagType
  extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
  CheckableTag: typeof CheckableTag;
}

const Tag = forwardRef<unknown, TagProps>(InternalTag) as TagType;

Tag.CheckableTag = CheckableTag;

export default Tag;

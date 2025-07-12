import dynamic from 'next/dynamic';
import {memo} from 'react';
import {LucideProps} from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export type IconName = keyof typeof dynamicIconImports;

const DynamicIcon = memo(function DynamicIcon(props: IconProps) {
  const Icon = dynamic(dynamicIconImports[props.name]);
  return <Icon {...props} />;
});

export default DynamicIcon;

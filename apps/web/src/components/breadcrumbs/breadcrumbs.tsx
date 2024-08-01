import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@repo/ui';
import { ReactNode } from 'react';
import { BreadcrumbsType } from '@/types/Breadcrumbs';

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbsType;
};

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const renderBreadcrumbList = () => {
    const crumbs : ReactNode[] = [];
    const crumbsLength = breadcrumbs.length;

    breadcrumbs.forEach((breadcrumb, index) => {
      const { href, label } = breadcrumb;

      if (index === crumbsLength - 1) {
        crumbs.push(
          <BreadcrumbItem key={label}>
            <BreadcrumbPage>{label}</BreadcrumbPage>
          </BreadcrumbItem>,
        );

        return;
      }

      crumbs.push(
        <BreadcrumbItem key={label}>
          <BreadcrumbLink key={`${label}_l`} href={href}>{label}</BreadcrumbLink>
        </BreadcrumbItem>,
        <BreadcrumbSeparator key={`${label}_s`} />,
      );
    });

    return crumbs;
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {renderBreadcrumbList()}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

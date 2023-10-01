import AddItemButton from '@/components/AddItemButton';
import Container from '@/components/atom/Container';
import { PropsWithChildren } from 'react';

export default function ListPageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container>{children}</Container>
      <AddItemButton />
    </>
  );
}

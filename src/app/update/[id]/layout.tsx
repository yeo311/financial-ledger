import Appbar from '@/components/appbar/Appbar';
import AppbarBackButton from '@/components/appbar/AppbarBackButton';
import AppbarTitle from '@/components/appbar/AppbarTitle';
import Container from '@/components/atom/Container';
import { PropsWithChildren } from 'react';

export default function CreatePageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Appbar>
        <AppbarBackButton />
        <AppbarTitle title="수정" />
      </Appbar>
      <Container>{children}</Container>
    </>
  );
}

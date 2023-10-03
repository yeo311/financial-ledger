import Appbar from '@/components/appbar/Appbar';
import AppbarTitle from '@/components/appbar/AppbarTitle';
import Container from '@/components/atom/Container';
import { PropsWithChildren } from 'react';

export default function AccessPageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Appbar>
        <AppbarTitle title="엑세스키 입력" />
      </Appbar>
      <Container>{children}</Container>
    </>
  );
}

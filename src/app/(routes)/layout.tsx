import NavBar from '@components/nav-bar';
import IndicatorBar from '@components/indicator-bar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <NavBar />
      <IndicatorBar />
    </>
  );
}

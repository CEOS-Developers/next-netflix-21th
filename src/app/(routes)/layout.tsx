import IndicatorBar from '@components/indicator-bar';
import NavBar from '@components/nav-bar';

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

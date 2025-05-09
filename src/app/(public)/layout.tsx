import IndicatorBar from '@components/indicator-bar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <IndicatorBar />
    </>
  );
}

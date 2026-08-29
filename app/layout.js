export const metadata = {
  title: "SSC Lifecycle Test",
  description: "Disposable workload for Small Software Cloud lifecycle verification",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>{children}</body>
    </html>
  );
}

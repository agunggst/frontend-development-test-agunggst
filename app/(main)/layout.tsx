import Navbar from "../components/Navbar";

export default function MainLayout({ // Main Layout
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-65px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </>
  )
}
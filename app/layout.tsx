import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: 'Disaster Management SEWA - Blog',
  description: 'Developed by Kishan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Disaster Management SEWA - Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to our Disaster Management SEWA Blog!</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <p>Developed by Kishan</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-4xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}

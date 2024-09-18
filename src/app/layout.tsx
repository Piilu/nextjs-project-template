import "~/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Open_Sans } from 'next/font/google'
import { TRPCReactProvider } from "~/trpc/react";
import ModalProvider from "./_components/modal-provider";
import { ToastContainer, Zoom } from "react-toastify";
import { ThemeProvider } from "./_components/ui/theme-provider";
import { Suspense } from "react";
import { Metadata } from "next";
import { env } from "~/env";
import NextTopLoader from 'nextjs-toploader';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    default: "Broneeripraam - Praamipiletid Hiiumaale ja Saaremaale",
    template: "%s | Broneeripraam - Praamipiletid Hiiumaale ja Saaremaale",
  },
  description: "Osta mugavalt praamipilet Hiiumaale ja Saaremaale. Soovitud pileti puudumisel broneerime selle esimesel võimalusel. Lihtne ja kiire viis praamipiletite ostmiseks Virtsu-Kuivastu ja Rohuküla-Heltermaa parvlaevaliinile.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
} as Metadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
{
  return (
    <html lang="en" className={openSans.className}>
      {/* <head>
      </head> */}
      <body>
        <NextTopLoader showSpinner={false} />
        <ToastContainer hideProgressBar draggable transition={Zoom} theme="colored" position="bottom-right" />
        <Suspense>
          <TRPCReactProvider>
            <ModalProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <main className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-5">
                  {children}
                </main>
              </ThemeProvider>
            </ModalProvider>
          </TRPCReactProvider>
        </Suspense>
      </body>
    </html>
  );
}

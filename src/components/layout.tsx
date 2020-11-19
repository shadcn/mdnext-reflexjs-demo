import config from '@config';
import { DefaultSeo, NextSeo } from 'next-seo';
import { Navbar } from '.';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <DefaultSeo
        title="Build stunning websites"
        description="Blast off with the speed of Nextjs, the power of MDX and the best-in-class developer experience of Reflexjs."
        openGraph={{
          images: [
            {
              url: 'https://arshad.io/uploads/mdnext-reflexjs.jpg',
            },
          ],
        }}
      />
      <Navbar />
      <main>{children}</main>
      <footer py="12|18|20">
        <div variant="container.sm">
          <div borderTopWidth="1" display="flex" justifyContent="center" pt="6">
            {config.site.copyright ? (
              <p fontSize="sm" color="gray">
                {config.site.copyright}
              </p>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}

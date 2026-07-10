export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/about', label: 'About', pageFile: 'AboutPage' },
  { path: '/our-process', label: 'Our Process', pageFile: 'OurProcessPage' },
  { path: '/faq', label: 'Faq', pageFile: 'FaqPage' },
];

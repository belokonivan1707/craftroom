export const getPathname = (pathname: string) => {
  if (pathname !== '/') {
    // The leading / is only added to support static hosting (resolve /index.html).
    // We remove it to normalize the pathname.
    return pathname.replace(/\/$/, '');
  }
  return pathname;
};
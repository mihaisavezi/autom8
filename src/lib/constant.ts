export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
  name: `Client ${index + 1}`,
}));

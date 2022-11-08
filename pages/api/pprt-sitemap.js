// import { SitemapStream } from 'sitemap'
// import { streamToPromise } from 'sitemap'
// import {Readable} from 'stream'

// // An array with your links
// const links = [
//   { url: '/', changefreq: 'daily', priority: 1 },
//   { url: '/about/', changefreq: 'daily', priority: 0.3 },
//   { url: '/about/structure', changefreq: 'daily', priority: 0.3 },
//   { url: '/about/occupationalSecurity', changefreq: 'daily', priority: 0.3 },
//   { url: '/about/anticorruption', changefreq: 'daily', priority: 0.3 },
//   { url: '/about/antiterror', changefreq: 'daily', priority: 0.3 },
//   { url: '/civilservice', changefreq: 'daily', priority: 0.3 },
//   { url: '/civilservice/vacancies', changefreq: 'daily', priority: 0.3 },
//   { url: '/civilservice/requirements', changefreq: 'daily', priority: 0.3 },
//   { url: '/civilservice/results', changefreq: 'daily', priority: 0.3 },
//   { url: '/activity', changefreq: 'daily', priority: 0.3 },
//   { url: '/activity/npa', changefreq: 'daily', priority: 0.3 },
//   { url: '/activity/functions', changefreq: 'daily', priority: 0.3 },
//   { url: '/projects', changefreq: 'daily', priority: 0.3 },
//   { url: '/documents', changefreq: 'daily', priority: 0.3 },
//   { url: '/sendrequest', changefreq: 'daily', priority: 0.3 },
//   { url: '/news', changefreq: 'daily', priority: 0.3 },
//   { url: '/management', changefreq: 'daily', priority: 0.3 },
//   { url: '/press-service', changefreq: 'daily', priority: 0.3 },
//   { url: '/contacts', changefreq: 'daily', priority: 0.3 },
// ]

// // Create a stream to write to
// const stream = new SitemapStream({ hostname: 'https://pprt.rtyva.ru/' })

// const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
//   data.toString()

// )
// // Return a promise that resolves with your XML string
// return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
//   data.toString()
// )
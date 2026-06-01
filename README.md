# Turpotic Gallery

Turpotic Gallery is a premium automotive showcase for high-performance cars and motorcycles. The project is built as a fast, responsive, static-first web experience with cinematic visuals, inventory filtering, vehicle detail pages, cart interactions, search, and a secure checkout-style flow.

## Live Experience

The site is designed to run smoothly on GitHub Pages, Netlify, Vercel, or any static hosting provider.

```text
https://abd-elrahman-jehad.github.io/TURPOTIC/
```

## Highlights

- Full-screen luxury hero sections with cinematic motion.
- Responsive pages for desktop, tablet, and mobile screens.
- Vehicle inventory for cars, motorcycles, and mixed rentals.
- Working category filters and price sorting.
- Vehicle detail pages with related recommendations.
- Search drawer with recent search shortcuts.
- Shopping cart drawer with saved vehicle preview.
- Checkout form with required-field validation.
- Lightweight image warming for smoother browsing.
- Static hosting support with relative asset paths.
- Netlify cache headers for faster repeat visits.

## Pages

- **Home**: Main luxury gallery entrance, path cards, and featured vehicles.
- **Cars**: Automotive inventory with filters, sorting, and pagination.
- **Rent**: Mixed rental fleet with cars and motorcycles.
- **Motorcycles**: Dedicated motorcycle inventory.
- **Details**: Dynamic page for each selected vehicle.
- **Payment**: Secure checkout-style form connected to the selected vehicle.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js local preview server
- Static deployment ready

No external JavaScript framework is required. The project stays lightweight so it can load quickly after deployment.

## Project Structure

```text
.
+-- index.html
+-- src
|   +-- app.js
|   +-- styles.css
+-- server
|   +-- index.js
+-- favicon-luxury-car.png
+-- _headers
+-- package.json
+-- README.md
```

## Getting Started

Install Node.js, then run the local preview server:

```bash
npm start
```

Open the project in your browser:

```text
http://127.0.0.1:3000
```

## Deployment

### Netlify

The project includes a `_headers` file for production caching. To deploy:

1. Zip the project files or use the prepared deploy package.
2. Open Netlify Drop.
3. Drag and drop the project folder or ZIP file.
4. Netlify will generate a live URL automatically.

### GitHub Pages

The project uses relative asset paths, so it can work from a repository subpath.

Recommended settings:

- Source: `main`
- Folder: `/root`
- Entry file: `index.html`

## Performance Notes

The site is built to stay smooth by keeping animation work on transform and opacity, lazy-loading non-critical images, eagerly loading first-screen media, and warming only nearby images instead of loading the full gallery at once.

## Repository Details

Suggested GitHub description:

```text
Premium responsive automotive gallery with luxury vehicle inventory, details, search, cart, and checkout flow.
```

Suggested topics:

```text
automotive luxury-gallery responsive-design vanilla-javascript static-site netlify github-pages vehicle-showcase cars motorcycles
```

## Author

Built by Abd Elrahman Jehad as a luxury automotive gallery experience.

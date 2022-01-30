import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

// This is essentially the root of the app
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* The Outlet component renders the output of the current route that we are in. */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {/* LiveReload component is used for live reloading on save */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <p className="gradient-text text-7xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This page doesn't exist</h1>
      <p className="mt-2 text-zinc-400">The link may be old or mistyped.</p>
      <a href="/" className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black">Back to home</a>
    </section>
  );
}

function ErrorComponent() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-500 text-white h-screen">
      <h1 className="text-4xl font-bold mb-4">Error browsing site</h1>
      <p className="text-lg">
        An error occurred while trying to load the requested page.
      </p>
    </div>
  );
}

export default ErrorComponent;

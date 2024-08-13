export default function Loading() {
  return (
    <main className="flex  items-center justify-center text-white w-screen h-screen bg-gray-500">
      <div className="flex items-center justify-center gap-2">
        <span className="w-1 h-8 animate-loading-100   bg-white rounded-md"></span>
        <span className="w-1 h-10 animate-loading-200  bg-white rounded-md"></span>
        <span className="w-1 h-8 animate-loading-300    bg-white rounded-md"></span>
      </div>
    </main>
  );
}

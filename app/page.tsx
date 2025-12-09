import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 font-sans dark:from-zinc-900 dark:to-black">
      <main className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🔥 Instant Roaster Machine</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Prepare to get roasted!</p>
        </div>
        <form action="" method="post" className="flex flex-col gap-4">
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="My name is..." 
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-gray-500"
          />
          <button 
            type="submit"
            className="rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:from-orange-600 hover:to-red-600 hover:shadow-lg active:scale-95"
          >
            Roast Me 🔥
          </button>
        </form>
      </main>
    </div>
  );
}

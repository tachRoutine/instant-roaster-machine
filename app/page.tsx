import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Instant Roaster Machine</h1>
        <form action="" method="post">
          <input type="text" name="name" id="name" placeholder="My name is... " />
          <button type="submit">Roast Me</button>
        </form>
      </main>
    </div>
  );
}

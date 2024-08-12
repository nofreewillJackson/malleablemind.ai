import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundColor: "#343a40", color: "#4dabf7" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-12">
          <Image
            src="/Logo.svg"
            alt="Malleable Mind Logo"
            width={600} // Adjusted size for Logo.svg
            height={144}
            priority
          />
        </div>

        <div>
          <Image
            src="/Logo2.svg"
            alt="Malleable Mind Logo"
            width={450} // Adjusted size for Logo2.svg
            height={450}
            priority
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://malleablemind.ai/docs"
          className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://malleablemind.ai/learn"
          className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://malleablemind.ai/templates"
          className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://malleablemind.ai/deploy"
          className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-4 text-3xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}

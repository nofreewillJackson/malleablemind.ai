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
            width={600}
            height={144}
            priority
          />
        </div>

        <div className="definition-container mb-12" style={{ fontFamily: 'monospace', color: '#4dabf7' }}>
          <span className="word" style={{ fontWeight: 'bold' }}>malleable</span> (mal-ee-uh-buhl) <br />
          <span>adj. A canvas for infinite possibilities, forever </span>
          <span id="unfolding" className="unfolding"></span>
          <span className="blinking-cursor">|</span>
        </div>

        <div>
          <Image
            src="/hellscapeLogo.svg"
            alt="Surviving the hellscape of late-stage capitalism"
            width={450}
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
              {"->"} 
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
              {"->"} 
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
              {"->"} 
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
              {"->"} 
            </span>
          </h2>
        </a>
      </div>

      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #4dabf7;
          }
        }

        .unfolding {
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 2s steps(9, end), blink-caret 0.75s step-end infinite;
        }

        .blinking-cursor {
          margin-left: 0.1em;
          animation: blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </main>
  );
}

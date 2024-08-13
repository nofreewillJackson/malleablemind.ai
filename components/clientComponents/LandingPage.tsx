'use client';
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 sm:p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-12">
          <Image
            src="/Logo.svg"
            alt="Malleable Mind Logo"
            width={600}
            height={144}
            priority
            className="max-w-full sm:max-w-none"
          />
        </div>

        <div className="definition-container mb-12 text-center sm:text-left" style={{ fontFamily: 'monospace', color: '#4dabf7' }}>
          <span className="word" style={{ fontWeight: 'bold' }}>malleable</span> (mal-ee-uh-buhl) <br />
          <span>adj. A canvas for infinite possibilities, forever </span>
          <span id="unfolding" className="unfolding">unfolding</span>
        </div>

        <div className="mb-12">
          <Image
            src="/hellscapeLogo.svg"
            alt="Surviving the hellscape of late-stage capitalism"
            width={450}
            height={450}
            priority
            className="max-w-full sm:max-w-none"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <a
          href="https://malleablemind.ai/excalidraw-notes"
          className="group rounded-lg border border-transparent px-6 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-4 text-xl sm:text-3xl font-semibold">
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
          <h2 className="mb-4 text-xl sm:text-3xl font-semibold">
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
          <h2 className="mb-4 text-xl sm:text-3xl font-semibold">
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
          <h2 className="mb-4 text-xl sm:text-3xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              {"->"} 
            </span>
          </h2>
        </a>
      </div>

      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }
          70% {
            width: 9ch; /* Number of characters in "unfolding" */
          }
          85% {
            width: 9ch; /* Pause */
          }
          100% {
            width: 0; /* Reset */
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
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite;
          border-right: 2px solid #4dabf7; /* Blinking cursor */
          vertical-align: bottom; /* Align with the rest of the sentence */
        }
      `}</style>
    </div>
  );
}

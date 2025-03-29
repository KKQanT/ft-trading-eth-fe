import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                <span className="block">Welcome to S3T</span>
                <span className="block text-orange-500">NFT Marketplace</span>
              </h1>
              <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                Create, buy, and sell unique digital assets on the Ethereum blockchain.
              </p>
              <div className="mt-10 flex justify-center gap-6">
                <Link 
                  href="/mint"
                  className="px-8 py-3 rounded-md text-base font-medium bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  Mint NFT
                </Link>
                <Link 
                  href="/marketplace"
                  className="px-8 py-3 rounded-md text-base font-medium bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
                >
                  Browse Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Everything you need to create and trade NFTs
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-white">Easy Minting</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Create and mint your NFTs with just a few clicks. No coding required.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-white">Seamless Trading</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Buy and sell NFTs on our marketplace with low fees and instant transactions.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-white">Fast Transfers</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Transfer your NFTs quickly and securely on the Ethereum blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

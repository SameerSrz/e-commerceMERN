import React from 'react'

const ErrorPage = () => {
  return (
    <div className="text-white bg-black">
    
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <div className="flex flex-col justify-center mx-auto mt-8 mb-16 text-center max-w-2x1">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        404 – Unavailable
      </h1>
      <a
        className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
        href="/"
      >
        Return Home
      </a>
    </div>
    <div className="mt-96">
      <br></br>
      <div className="mt-52">
        <br></br>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default ErrorPage
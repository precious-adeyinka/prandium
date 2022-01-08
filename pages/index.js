import Head from 'next/head'

// Components
import Home from '../components/views/Home/HomeIndex'

export default function HomePage() {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Head>
        <title>Prandium | Home</title>

        {/* <!-- Meta --> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="X-UA-Compatible" content="IE-Edge" />
        <meta name="keywords" content="creators, fans, tydplatform" />
        <meta name="description" content="Where creators and fans meet" />
        <meta name="author" content="Precious Adeyinka" />
        <meta name="theme-color" content="#000" />

        {/* <!-- Open Graph --> */}
        <meta property="og:title" content="Tydplatform | Home" key="title" />
        <meta property="og:site_name" content="Tydplatform" key="site_name" />
        <meta property="og:url" content="tydplatform.com" key="url" />
        <meta property="og:description" content="A meeting spot for creators and fans." key="description" />
        <meta property="og:type" content="website" key="title" key="type" />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2018/04/12/21/22/palette-3314838__340.jpg" key="image" />

        {/* <!-- Twitter Cards --> */}
        {/* <!-- Instagram Cards --> */}
        {/* <!-- Linkedin Cards --> */}

        {/* <!-- Favico --> */}
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Icons --> */}
        {/* <!-- Line Awesome --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* <!-- Fonts --> */}
        {/* <!-- Poppins --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

        {/* <!-- Custom Styles --> */}
      </Head>

      <main className="h-auto w-full">
        <Home />
      </main>

     {/* Footer */}
    </div>
  )
}

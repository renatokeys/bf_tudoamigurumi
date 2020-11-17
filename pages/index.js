import Head from 'next/head'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const Logo = () => (
    <>
    <Image
    src="/logo-white.png"
    alt="Tudo Amigurumi"
    width={206}
    height={44}
    ></Image>
    </>
)

const Home = () => (
    <>
       <div className="container">
           <Head>
               <title>Tudo Amigurumi - Black Friday</title>
               <link rel="icon" href="/favicon.ico" />
           </Head>
        </div>
        <section>
            <div className="bg-red-700 p-2">
                <p className="text-center text-white font-bold">Aproveite o Black Friday do Tudo Amigurumi e comece hoje mesmo.</p>
            </div>
        </section>
        <section>
            <div className="md:pl-64 p-4">
                <Logo />
            </div>
        </section>
        <section>
            <div className="md:flex p-2">
                <div className="flex-auto text-center text-white md:py-32 mb-10">
                    <p className="text-3xl">Aprenda a fazer os modelos de</p>
                    <p className="text-center text-5xl text-red-600 font-bold uppercase">Amigurumis</p>
                    <p className="text-3xl">mais procurados do momento!</p>
                </div>
                <div className="flex-auto md:pr-40">
                    <div className='player-wrapper'>
                        <ReactPlayer 
                        className='react-player'
                        playing= {true}
                        light='https://i.ytimg.com/vi/zRYj-lPvpCs/hqdefault.jpg'
                        url='https://player.vimeo.com/video/480030701?title=0&byline=0&portrait=0'
                        width='100%'
                        height='100%'
                        />
                    </div>
                    
                </div>

            </div>
            <div className="text-center mt-20">
                <a href="" className="text-white bg-green-500 py-5 px-20 hover:bg-green-600 rounded-lg border-b-4 border-green-600 text-2xl uppercase font-bold">Comprar com Desconto</a>
                <p className="mt-10"></p><Image
                src='/compra-segura.png'
                alt='Compra Segura'
                width={445}
                height={100}
                ></Image>
            </div>
        </section>
        
        <section className="bg-gray-300 mt-20">
            <div className="container mx-auto p-2">
                <p className="text-center">Titulo</p>
            </div>
            <div className="">
            </div>
        </section>
    </>
)

export default Home
import ButtonFill from "../compontents/ButtonFill"
import CardSpeakers from "../compontents/CardSpeakers"

import AaronCox from '../assets/Speakers/Aaron Cox.svg'
import FreddiePerry from '../assets/Speakers/Freddie Perry.svg'
import JasmineStewart from '../assets/Speakers/Jasmine Stewart.svg'
import JordanReynolds from '../assets/Speakers/Jordan Reynolds.svg'
import MelissaCollins from '../assets/Speakers/Melissa Collins.svg'
import SophieStewart from '../assets/Speakers/Sophie Stewart.svg'

import Conference from '../assets/Conference.svg'

import Form from "../compontents/Form"

function Home() {

  return (
    <main className="bg-zinc-100 flex flex-col justify-between items-center scroll-smooth">

      <section className="p-12 text-center flex flex-col justify-center items-center gap-4 before:bg-[url('./assets/ConferenceBg.jpg')] before:absolute before:w-full before:h-[500px] h-[500px] before:bg-cover before:bg-center before:opacity-100 before:brightness-50 before:z-0 w-full" id="home">
        <div className="isolate h-full flex flex-col gap-4 justify-center text-zinc-100">
          <h2 className="z-10 font-bold text-5xl">Digital World<br />Conference</h2>
          <p className="text-sm font-medium opacity-80">Join industry leaders to learn, inspire and connect</p>
        
          <div className="flex flex-col gap-3">
            <ButtonFill link="#ticket" title="Get a ticket" />
          </div>
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3 bg-zinc-200">
        <p className="text-sm text-zinc-600"></p>
        <h2 className="font-bold text-5xl">Event Speakers</h2>
        <p className="text-sm text-zinc-600">Join industry leaders to learn, inspire and connect</p>
        <div className="grid gap-10 md:grid-cols-3 grid-cols-2">
          <CardSpeakers img={AaronCox} name="Aaron Cox" senior="CEO & Manager" />
          <CardSpeakers img={SophieStewart} name="Sophie Stewart" senior="Marketing Coordinator" />
          <CardSpeakers img={MelissaCollins} name="Melissa Collins" senior="SEO Specialist" />
          <CardSpeakers img={FreddiePerry} name="Freddie Perry" senior="Director of marketing" />
          <CardSpeakers img={JasmineStewart} name="Jasmine Stewart" senior="Content marketing" />
          <CardSpeakers img={JordanReynolds} name="Jordan Reynolds" senior="Marketing Analyst" />
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3 bg-zinc-900 text-zinc-50" id="about">
        <div className="flex flex-col md:flex-row  gap-10">
          <div className="w-96 flex flex-col gap-8 justify-between">
            <h2 className="font-bold text-2xl">Why you should join event</h2>
            
            <p className="text-justify"><span className="font-bold">Access to Exclusive Content:</span> Attend talks and workshops led by the industry's top experts, who will share exclusive insights and the latest trends in digital marketing.</p>
            
            <p className="text-justify"><span className="font-bold">High-Level Networking:</span> Connect with influential professionals and industry leaders. Our conference offers countless networking opportunities, helping you expand your network and find potential partners and customers.</p>
            <p className="text-justify"><span className="font-bold">Renowned Speakers:</span> Hear inspiring presentations from renowned digital marketing experts. These thought leaders will share their experiences, case studies, and proven strategies that will take your campaigns to the next level.</p>
          </div>
          <img className="w-96 rounded-md" src={Conference} alt="conference" />
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3" id="ticket">
        <Form />
      </section>
    </main>
  )
}

export default Home
import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <div>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia maxime ut placeat voluptates totam, expedita consequuntur cumque eos ab porro recusandae accusamus ipsum. Ab vero tempora aliquid numquam incidunt!</p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam enim, maiores mollitia labore, magnam iste repellat quia officiis quisquam nam laboriosam, sequi neque! A dignissimos necessitatibus unde amet numquam. Quisquam!
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quos, reiciendis numquam voluptate nam. Natus dolorum ad consequatur necessitatibus doloremque tempora repellat corrupti? Ullam suscipit doloremque totam adipisci nulla.</p>
    </div>
  )
}
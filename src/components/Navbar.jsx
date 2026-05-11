import { Link } from 'react-router-dom'

const links = [
['Главная','/'],
['Пед. кредо','/creed'],
['Копилка','/library'],
['Учебная практика','/study-practice'],
['Этапы урока','/lesson-stages'],
['Пед. практика','/teaching-practice'],
['Преддипломная практика','/pre-diploma'],
['Контакты','/contacts'],
]

export default function Navbar(){
  return(
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <h1 className="font-black tracking-[0.3em]">PORTFOLIO</h1>

        <nav className="hidden xl:flex gap-6 text-sm text-gray-300">
          {links.map(([title,href])=>(
            <Link key={href} to={href} className="hover:text-white transition">
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
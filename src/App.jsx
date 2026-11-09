import { Scale, Phone, MapPin } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-amber-400">Canova & Soares Advocacia</h1>
      <div className="flex gap-4">
        <Scale className="w-8 h-8 text-amber-400" />
        <Phone className="w-8 h-8 text-slate-200" />
        <MapPin className="w-8 h-8 text-slate-200" />
      </div>
    </div>
  )
}
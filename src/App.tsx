import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Committee from './pages/Committee'
import Coaches from './pages/Coaches'
import Captains from './pages/Captains'
import FuelToGo from './pages/FuelToGo'
import TrainingFacilities from './pages/TrainingFacilities'
import Integrity from './pages/Integrity'
import Squads from './pages/Squads'
import Fees from './pages/Fees'
import ClubNights from './pages/ClubNights'
import Championships from './pages/Championships'
import TargetMeets from './pages/TargetMeets'
import Uniform from './pages/Uniform'
import JXProgram from './pages/JXProgram'
import Calendar from './pages/Calendar'
import News from './pages/News'
import Sponsors from './pages/Sponsors'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import CountryPennants from './pages/CountryPennants'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/committee" element={<Committee />} />
        <Route path="/about/coaches" element={<Coaches />} />
        <Route path="/about/captains" element={<Captains />} />
        <Route path="/about/fuel-to-go" element={<FuelToGo />} />
        <Route path="/about/training-facilities" element={<TrainingFacilities />} />
        <Route path="/about/integrity" element={<Integrity />} />
        <Route path="/squads" element={<Squads />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/club-nights" element={<ClubNights />} />
        <Route path="/championships" element={<Championships />} />
        <Route path="/target-meets" element={<TargetMeets />} />
        <Route path="/uniform" element={<Uniform />} />
        <Route path="/jx-program" element={<JXProgram />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country-pennants" element={<CountryPennants />} />
      </Routes>
    </Layout>
  )
}

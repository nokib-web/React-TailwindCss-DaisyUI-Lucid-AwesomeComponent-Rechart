
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOption/PricingOption'
import { Heading1 } from 'lucide-react'
import ResultsCharts from './components/ResultCharts/ResultsCharts'
import axios from 'axios'
import MarksCharts from './components/MarksChart/MarksCharts'



const pricingPromise= fetch('/PricingData.json').then(res=>res.json());
const marksPromise = axios.get('Marks.json')

function App() {


  return (
    <>

   

    
    <Navbar></Navbar>

  <Suspense fallback={<h1><span className="loading loading-dots loading-lg"></span></h1>}>
      <PricingOption pricingPromise={pricingPromise}>
      
    </PricingOption>

  </Suspense>

  <Suspense fallback={<h1><span className="loading loading-dots loading-lg"></span></h1>}>
    <MarksCharts  marksPromise={ marksPromise} ></MarksCharts>
  </Suspense>

  <ResultsCharts></ResultsCharts>
      
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LandingPage, CariMobil, HasilPencarianMobil, DetailPaketSewaMobil } from '../../pages'


const Rute = () => {
return (
<Router>
    <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/carimobil" element={<CariMobil></CariMobil>} />
        <Route path="/hasilpencarianmobil" element={<HasilPencarianMobil></HasilPencarianMobil>} />
        <Route path="/detailpaketsewamobil" element={<DetailPaketSewaMobil></DetailPaketSewaMobil>} />
    </Routes>
</Router>
)
}

export default Rute;

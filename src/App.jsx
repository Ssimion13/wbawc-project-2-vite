import React from "react"
import "./App.css"
import { Grid } from "@mui/material"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from "./Components/MainPage"
import Dashboard from "./Dashboard"
import { Hanipaganda, LikeAnAnimal, PrayerVessel, EveryDayIsAGoodDay, TheCreator, WildernessPegasus, RockAByeBaby, Step123 } from "./Components/HanipagandaAlbum"

export default function App () {
    return (
      <Grid className="App">
        <BrowserRouter>
          <Dashboard />
          <Routes>
          <Route path="/TheCreator" element={<TheCreator />} />
          <Route path="/Hanipaganda" element={<Hanipaganda />} />
          <Route path="/LikeAnAnimal" element={<LikeAnAnimal />} />
          <Route path="/Step123" element={<Step123/>} />
          <Route path="/RockAByeBaby" element={<RockAByeBaby/>} />
          <Route path="/EveryDayIsAGoodDay" element={<EveryDayIsAGoodDay/>} />
          <Route path="/WildernessPegasus" element={<WildernessPegasus/>} />
          <Route path="/PrayerVessel" element={<PrayerVessel/>} />
            <Route path="/*" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    )
}

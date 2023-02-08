import React from 'react'
import Paragraf from '../atoms/Paragraf'
import Header from '../atoms/Header'
function Status() {
  return (
    <div style={{}}>

      <Header back="black" padding="2px" color="white" deger="My ToDo App"/> 
      <Paragraf deger="Konu"/>
      <Paragraf deger="Yapılacaklar"/>
      <Paragraf deger="Ekleme Tarihi"/>
      <Paragraf deger="Bitti mi ?"/>
    </div>
  )
}

export default Status
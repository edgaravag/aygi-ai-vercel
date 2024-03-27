import React from 'react'
import WelcomeSection from './mainSection/WelcomeSection'
import AppStoresSection from './mainSection/AppStoresSection'
import AppDescriptionSection from './mainSection/AppDescriptionSection'
import GetAdviceSection from './mainSection/GetAdviceSection'
import PlantExploringSection from './mainSection/PlantExploringSection'
import AppFunctionalitySection from './mainSection/AppFunctionalitySection'
import PopularQuestionsSection from './mainSection/PopularQuestionsSection'

const Main = () => {
  return (
	<main className='flex flex-col justify-center '>
	  <WelcomeSection />
	  <AppStoresSection />
	  <AppDescriptionSection />
	  <GetAdviceSection />
	  <PlantExploringSection />
	  <AppFunctionalitySection />
	  <PopularQuestionsSection />
	</main>
  )
}

export default Main

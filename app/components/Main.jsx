import React from 'react'
import WelcomeSection from './mainSections/WelcomeSection'
import AppStoresSection from './mainSections/AppStoresSection'
import AppDescriptionSection from './mainSections/AppDescriptionSection'
import GetAdviceSection from './mainSections/GetAdviceSection'
import PlantExploringSection from './mainSections/PlantExploringSection'
import AppFunctionalitySection from './mainSections/AppFunctionalitySection'
import PopularQuestionsSection from './mainSections/PopularQuestionsSection'

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
